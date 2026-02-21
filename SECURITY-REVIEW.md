# Security Review — GameTime.ai

**Date:** 2026-02-21
**Scope:** Full codebase review of the GameTime.ai marketing website
**Reviewed by:** Claude Code Security Analysis

---

## Executive Summary

This is a **static marketing website** built with Next.js 16 (App Router). It has **no API routes, no database, no authentication, and no user input processing**. The overall attack surface is minimal. No critical vulnerabilities were found. Below are findings organized by severity.

---

## Findings

### HIGH — Dependency Vulnerabilities (15 issues)

**Location:** `package.json` / `package-lock.json`

`npm audit` reports 15 vulnerabilities:

| Package | Severity | Issue |
|---------|----------|-------|
| `ajv` (<6.14.0) | Moderate | ReDoS when using `$data` option |
| `minimatch` (<10.2.1) | High (x14) | ReDoS via repeated wildcards |

The 14 high-severity issues all originate from the `minimatch` vulnerability propagating through the ESLint toolchain (`eslint`, `@eslint/config-array`, `@eslint/eslintrc`, `@typescript-eslint/*`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `eslint-config-next`, `typescript-eslint`).

**Impact:** These are **dev-only dependencies** — they do not ship to production. Risk is limited to development environments where a malicious filename could trigger ReDoS in the linter.

**Remediation:**
```bash
npm audit fix           # Fixes ajv (non-breaking)
npm audit fix --force   # Fixes all — upgrades eslint to v10 (breaking)
```

---

### MEDIUM — `dangerouslySetInnerHTML` Usage

**Location:** `src/app/layout.tsx:111`

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

**Assessment:** SAFE. The `jsonLd` object is a hardcoded constant defined at `layout.tsx:83-99` — no user input flows into it. `JSON.stringify` also escapes any special characters. This is the standard Next.js pattern for structured data.

**Recommendation:** No action needed. This is a false-positive pattern.

---

### MEDIUM — No Security Headers

**Location:** No `next.config.ts` headers, no `middleware.ts`

The site does not set any HTTP security headers:

| Missing Header | Risk |
|----------------|------|
| `Content-Security-Policy` | Allows inline scripts/styles from any origin |
| `X-Frame-Options` / `frame-ancestors` | Page can be embedded in iframes (clickjacking) |
| `X-Content-Type-Options` | Browser may MIME-sniff responses |
| `Referrer-Policy` | Full referrer sent on navigation |
| `Permissions-Policy` | Browser features (camera, mic, geolocation) not restricted |
| `Strict-Transport-Security` | HTTPS not enforced at app level |

**Impact:** Low for a static marketing site with no sensitive operations. Higher risk if the site is ever extended with forms or authentication.

**Remediation:** Add headers in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; font-src 'self';"
          },
        ],
      },
    ];
  },
};
```

---

### LOW — Email Address Hardcoded in Client-Side Code

**Locations:**
- `src/components/layout/Header.tsx:9`
- `src/components/sections/Hero.tsx:90`
- `src/components/sections/CTA.tsx:34, 42`

`main@dehyl.ca` is hardcoded as `mailto:` links in 4 places.

**Impact:** Email address is exposed to automated scrapers and will likely receive spam. This is common for marketing sites, but the address could be obfuscated.

**Remediation (optional):**
- Use a contact form with server-side email delivery instead of `mailto:`
- Or obfuscate the address with JavaScript encoding

---

### LOW — `public/demo.html` — Static HTML Outside Next.js

**Location:** `public/demo.html` (902 lines)

This is a standalone HTML/CSS/JS file served as a static asset. It bypasses Next.js entirely.

**Observations:**
- Uses `innerHTML` assignments (`bubble.innerHTML = ...`) at line 721-723
- Text is passed through `escapeHTML()` at line 696 which properly escapes `&`, `<`, `>`
- `formatText()` at line 699 applies basic markdown-like formatting (bold/italic) via regex on the escaped output
- All content is hardcoded — no external data or user input flows in
- Uses `window.` global function assignments for controls (lines 860-887)

**Assessment:** SAFE for current usage. The `innerHTML` usage is protected by the `escapeHTML` sanitizer and all data is hardcoded. However:

**Recommendation:**
- If this demo ever accepts dynamic input, the `formatText` regex patterns could be exploited for XSS — consider using a proper sanitization library
- The file should have CSP `<meta>` tags since it bypasses Next.js headers

---

### LOW — Broad `allowedDevOrigins` Wildcards

**Location:** `next.config.ts:4-12`

```ts
allowedDevOrigins: [
  "*.worf.replit.dev",
  "*.kirk.replit.dev",
  "*.pike.replit.dev",
  "*.spock.replit.dev",
  "*.replit.dev",
  "*.repl.co",
  "*.replit.app",
],
```

**Impact:** This is **development-only** (Next.js ignores this in production). The broad `*.replit.dev` pattern allows any Replit subdomain as a dev origin. No risk in production.

**Recommendation:** No action needed for production. Could tighten to specific subdomains if running shared Replit environments.

---

### LOW — Missing Privacy/Terms Pages

**Location:** `src/components/layout/Footer.tsx:41-51`

The "Privacy" and "Terms" links both point to `href="#"` (dead links).

**Impact:** Not a security vulnerability, but a compliance gap if the site collects any data (even analytics). Could be flagged by privacy regulators.

**Recommendation:** Create proper `/privacy` and `/terms` pages before production launch.

---

### INFO — Google Site Verification File

**Location:** `public/google0e8bffded9200447.html`

This is a standard Google Search Console verification file. It is public and harmless, but confirms ownership verification for Google services.

---

## What's Done Well

| Area | Status |
|------|--------|
| No hardcoded secrets, API keys, or tokens | PASS |
| `.gitignore` excludes `.env*`, `*.pem`, `.vercel` | PASS |
| No `.env` files committed to repository | PASS |
| No API routes or server-side data processing | PASS |
| No database connections | PASS |
| No user input forms or data collection | PASS |
| All dependencies are well-known, maintained packages | PASS |
| `next/image` used for image optimization (prevents oversized payloads) | PASS |
| Proper `escapeHTML` in `demo.html` inline scripts | PASS |
| Skip-to-content link for accessibility (`layout.tsx:117-122`) | PASS |
| `prefers-reduced-motion` media query respected (`globals.css:347-360`) | PASS |
| Proper `aria-label` and `aria-expanded` on mobile menu | PASS |
| TypeScript strict mode (catch type errors at build time) | PASS |

---

## Recommended Actions (Priority Order)

1. **Run `npm audit fix`** to patch the `ajv` vulnerability (non-breaking)
2. **Add security headers** to `next.config.ts` (medium effort, high value)
3. **Create Privacy/Terms pages** before production launch
4. **Consider a contact form** instead of exposed `mailto:` addresses
5. **Add CSP meta tags** to `public/demo.html` if it remains in production

---

## Scope Limitations

This review covers:
- Source code in `src/`
- Configuration files
- Public assets
- Dependency audit
- Static HTML files

This review does **not** cover:
- Infrastructure/hosting security (Vercel/Replit config)
- DNS and domain security
- Third-party analytics or tracking scripts added post-deploy
- CI/CD pipeline security
