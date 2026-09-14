# Track Fix — Coding Guidelines

## General

* Use TypeScript.
* Prefer simple solutions.
* Keep changes scoped to the current task.
* Avoid unrelated refactoring.
* Avoid unnecessary dependencies.
* Reuse existing project patterns.

## TypeScript

* Avoid `any`.
* Define domain types clearly.
* Do not suppress TypeScript errors without justification.
* Avoid unsafe type assertions when proper typing is possible.

## React

* Use functional components.
* Keep components focused.
* Avoid unnecessary state.
* Avoid duplicated derived state.
* Avoid unnecessary `useEffect`.
* Follow the conventions supported by the installed Next.js version.

## Styling

* Use Tailwind CSS.
* Reuse existing visual patterns.
* Support responsive layouts.
* Avoid unnecessary inline styles.
* Do not introduce another styling framework without a requirement.

## Data Access

Components must not directly import mock data.

Preferred:

```text id="b0v4zj"
component
↓
service
↓
mock
```

Future:

```text id="o8e9l6"
component
↓
service
↓
API
```

## Testing

Tests should verify behavior rather than implementation details.

### Unit Tests

Use unit tests for:

* Utilities
* Filtering
* Sorting
* Validation
* Data transformation
* State transitions

### Component Tests

Use component tests for:

* Forms
* Modals
* Filters
* Important user interactions
* Error states
* Empty states

### E2E Tests

Use Playwright for critical user flows.

Do not use E2E tests for everything.

### Regression Tests

Bug fixes should include regression tests when practical.

## Validation

Before a feature can be merged into `develop`, the following must pass:

```bash id="d3clcp"
yarn lint
yarn typecheck
yarn test
yarn build
yarn test:e2e
```

## Git Workflow

Normal development:

```text id="vs9ax4"
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

Do not develop directly on `develop`.

Do not develop directly on `master`.

`master` is reserved for production releases.

## Scope Control

Do not:

* Implement unrelated functionality.
* Refactor unrelated code.
* Introduce backend functionality during the frontend-only phase.
* Delete or weaken tests to make CI pass.
* Add dependencies without a clear reason.
