<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
<!-- Keep the existing Next.js agent rules above this section unchanged. -->

# Track Fix UI

Track Fix is a frontend application for tracking software bugs and development issues.

This repository is also used to practice a disciplined AI-agent-assisted frontend development workflow.

## Current Status

The project is currently frontend-only.

Mock data is used during the current phase.

Backend APIs, database persistence, and real authentication will be implemented separately.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Vitest
* React Testing Library
* Playwright
* GitHub Actions
* Yarn

## Development

Install dependencies:

```bash id="bax9m5"
yarn
```

Start development:

```bash id="c5uevq"
yarn dev
```

## Validation

```bash id="dt3ybc"
yarn lint
yarn typecheck
yarn test
yarn build
yarn test:e2e
```

## Documentation

* `docs/product-requirements.md`
* `docs/architecture.md`
* `docs/coding-guidelines.md`
* `AGENTS.md`

## Branch Strategy

Normal development:

```text id="1lj1hk"
develop
↓
feature/*
↓
Pull Request
↓
CI
↓
develop
```

Production release:

```text id="myx9cu"
develop
↓
release/*
↓
Full Validation
↓
master
```

`master` contains production-ready releases only.

## AI-Assisted Development

```text id="ew6xfj"
Requirement
↓
Agent reads documentation
↓
Codebase analysis
↓
Implementation plan
↓
Human review
↓
Implementation
↓
Automated testing
↓
Diff review
↓
Pull Request
↓
CI validation
↓
Merge
```

AI-generated code is considered unverified until automated validation and human review are complete.
