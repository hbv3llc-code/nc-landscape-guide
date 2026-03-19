# Build Lessons & Standing Rules

## Rule: Never link outbound from homepage
**Reason:** Homepage receives all backlink equity. Outbound links from it dilute PageRank before it can be distributed internally.

## Rule: All outbound links use data-outbound="true" attribute
**Reason:** Makes future auditing and removal trivial without hunting through MDX content.

## Rule: City pages use CityPageTemplate — never custom one-offs
**Reason:** Consistency in structure and internal linking. Easier to update 8 pages at once.

## Rule: No stock photography anywhere
**Reason:** Maintains institutional, text-authority aesthetic. Images invite irrelevant alt text and break the .org resource feel.

## Rule: next.config.js must have output: 'export' and trailingSlash: true
**Reason:** Cloudflare Pages requires a fully static export in the `out/` directory. trailingSlash ensures clean URL routing on Cloudflare's static file server — without it, direct page loads on inner routes will 404.

## Rule: RelatedLinks are defined in navigation.ts, not hardcoded in MDX
**Reason:** Allows bulk updates to related links without editing individual content files.
