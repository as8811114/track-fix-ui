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


# Testing and PR Verification

Testing is part of implementation, not an optional follow-up task.

For every code change, independently assess:

1. What observable behavior changed?
2. What existing flow could regress?
3. What is the smallest meaningful test that protects this behavior?
4. Does an existing test already provide sufficient coverage?
5. Should the change require a Unit, Component, or E2E test?

Do not wait for me to explicitly ask for tests.

If meaningful automated coverage is appropriate, add or update the test as part of the implementation.

Do not add tests only to increase coverage numbers.

---

# Test Based on Risk

Prioritize tests for behavior that would matter if it broke.

High-value targets include:

* business logic
* filtering
* sorting
* validation
* state transitions
* data transformations
* service/data-access behavior
* forms
* user interactions
* conditional rendering
* loading states
* empty states
* error states
* navigation
* permissions or availability rules
* regression-prone behavior
* previously reported bugs
* critical user flows

Purely visual changes generally do not require new automated tests.

Examples:

* spacing
* colors
* typography
* borders
* shadows
* minor alignment
* decorative changes

However, existing tests must still be run when appropriate to detect regressions.

---

# Unit Tests

Use Unit Tests for isolated logic.

Examples:

```text
filterIssues()
sortIssues()
validateIssue()
mapIssueStatus()
calculateDashboardStats()
```

Test:

* normal cases
* important edge cases
* invalid inputs when relevant

Do not test trivial implementation details.

---

# Component Tests

Use Component Tests for meaningful UI behavior.

Test from the user's perspective.

Examples:

```text
User selects "High" priority
→ only high-priority issues are displayed

User submits an empty issue title
→ validation message is displayed

Service returns no issues
→ empty state is displayed

User opens mobile navigation
→ navigation becomes visible
```

Prefer queries and assertions based on what the user can see or interact with.

Avoid testing:

* internal React state
* exact component implementation
* exact Tailwind classes
* private helper functions
* arbitrary DOM structure

---

# E2E Tests

E2E tests protect critical application flows.

Do NOT create an E2E test for every feature or UI change.

Add or update E2E coverage when a change introduces or materially modifies a critical user journey.

Examples of critical Track Fix flows may include:

```text
Application loads
Create issue
Edit issue
Delete issue
Change issue status
Filter/search issues
Navigate between project and issue
```

Prefer a small, stable E2E suite over a large brittle suite.

Existing critical E2E tests should run before PR merge even when the current change did not require adding a new E2E test.

---

# Bug Fix Rule

For bug fixes, strongly prefer a regression test.

When practical:

```text
Understand bug
↓
Identify reproducible behavior
↓
Add or update test that exposes the bug
↓
Implement minimal fix
↓
Verify test passes
↓
Run related regression tests
```

The test should protect the behavior that was broken, not the specific implementation used to fix it.

---

# Existing Test Coverage

Before creating a new test:

1. Search existing tests.
2. Determine whether the behavior is already covered.
3. Extend an existing test when that is clearer than creating another test.
4. Avoid duplicate tests protecting exactly the same behavior.

Do not create unnecessary test files.

---

# Test Selection

Choose the lowest test level that provides sufficient confidence.

Prefer:

```text
Unit
```

over Component when pure logic is enough.

Prefer:

```text
Component
```

over E2E when interaction can be reliably tested without the entire application.

Use:

```text
E2E
```

when confidence depends on multiple application layers working together.

Do not move behavior into a lower-level function solely to make it easier to test unless that extraction also improves the production code.

---

# Change Impact Analysis

Before finishing implementation, inspect the diff and identify affected flows.

Ask:

```text
What could this change accidentally break?
```

Run tests covering those flows when available.

If shared code was modified, inspect its consumers and run relevant tests for those consumers.

Do not assume that only the directly edited component is affected.

---

# PR Verification

Before considering a change ready for PR, run the project's required validation.

For Track Fix, this normally includes:

```bash
yarn lint
yarn typecheck
yarn test
yarn build
yarn test:e2e
```

These commands serve different purposes:

```text
lint
→ code-quality/static checks

typecheck
→ TypeScript correctness

test
→ Unit + Component regression suite

build
→ production compilation/integration problems

test:e2e
→ critical user-flow regression suite
```

Do not claim PR readiness if required checks have not successfully completed.

If a command cannot run because of an environment limitation, report it explicitly.

---

# Test Failure Policy

Never:

* delete a failing test just to make CI pass
* weaken an assertion just to make CI pass
* skip a test without explaining why
* modify unrelated production behavior to satisfy a test
* assume the test is wrong without investigating it

When a test fails:

1. Determine whether the production code is wrong.
2. Determine whether the test expectation is outdated.
3. Determine whether the failure is pre-existing.
4. Make the smallest correct change.

---

# Final Testing Report

After every implementation task, include:

## Tests

### Added / Updated

List tests added or modified.

If none:

```text
No new tests required.
Reason: <short explanation>
```

### Existing Coverage

Mention relevant existing tests that already protect the changed behavior when applicable.

### Validation

Report actual execution results:

```text
yarn lint       — PASS / FAIL / NOT RUN
yarn typecheck  — PASS / FAIL / NOT RUN
yarn test       — PASS / FAIL / NOT RUN
yarn build      — PASS / FAIL / NOT RUN
yarn test:e2e   — PASS / FAIL / NOT RUN
```

Never report PASS unless the command actually completed successfully.

---

# Definition of Done

A code change is not complete merely because the implementation works locally.

Before reporting completion:

```text
Implementation
↓
Relevant automated tests
↓
Affected-flow regression consideration
↓
Lint
↓
Typecheck
↓
Unit / Component tests
↓
Build
↓
Critical E2E tests
↓
Diff review
```

The goal is not maximum test count.

The goal is:

> Use the smallest meaningful set of tests that gives strong confidence that the requested behavior works and existing flows remain unchanged.

# Automated Testing Requirements

Testing is part of implementation.

Do not wait for me to explicitly ask for tests.

Whenever you implement or modify production code, independently assess whether the change introduces, modifies, or could regress observable behavior.

If meaningful automated coverage is appropriate, you must **actually create or update the relevant test files** as part of the task.

Do not only recommend tests or describe what could be tested.

---

## Testing Workflow

For every implementation task, follow this process:

```text
Understand the requested change
↓
Inspect existing implementation
↓
Inspect existing tests
↓
Identify changed or affected behavior
↓
Determine whether existing tests already provide coverage
↓
Add or update meaningful tests when necessary
↓
Implement the change
↓
Run relevant tests
↓
Run required project validation
↓
Review the diff
↓
Report testing results
```

Testing should be considered during implementation, not after the implementation is already complete.

---

## Test Impact Analysis

Before finishing any production-code change, explicitly ask:

1. What observable behavior changed?
2. What existing behavior could accidentally regress?
3. Is this behavior already covered by an existing test?
4. What is the smallest meaningful automated test that protects it?
5. Should this be covered by a Unit, Component, or E2E test?

If meaningful behavior changed and existing coverage is insufficient, add or update tests.

If no new test is needed, explicitly explain why in the final response.

Never silently skip the testing assessment.

---

## Actual Test Files

When tests are required, create or modify actual automated test files.

Depending on the project's existing conventions, these may include:

```text
*.test.ts
*.test.tsx
*.spec.ts
*.spec.tsx
```

Follow the repository's existing testing structure and naming conventions.

Do not create a new testing structure if an appropriate one already exists.

Before creating a new test file:

1. Search for existing related tests.
2. Determine whether an existing test can be extended.
3. Avoid duplicate coverage.
4. Prefer the smallest maintainable test change.

Do not merely provide test examples in the final response.

Implement the tests.

---

## What Should Be Tested

Prioritize behavior that matters if it breaks.

High-value testing targets include:

* business logic
* filtering
* sorting
* validation
* state transitions
* data transformations
* service and data-access behavior
* forms
* user interactions
* navigation behavior
* route-aware behavior
* conditional rendering
* loading states
* empty states
* error states
* important data rendering
* responsive interactions
* previously reported bugs
* regression-prone behavior
* critical user flows

Examples:

```text
User selects a status filter
→ matching issues are displayed

User submits an invalid form
→ validation error is displayed

Service returns no issues
→ empty state is displayed

User opens the mobile navigation
→ sidebar becomes visible

Current route changes
→ correct navigation item becomes active
```

---

## What Should Usually Not Be Tested

Do not create low-value tests for purely visual implementation details.

Examples that normally do not require new automated tests:

* spacing changes
* colors
* typography
* border radius
* shadows
* minor alignment
* decorative styling
* exact Tailwind classes

Avoid assertions such as:

```text
element has class "px-6"
card has class "rounded-xl"
background uses a specific Tailwind class
component has an exact internal DOM structure
```

Test behavior rather than styling implementation.

Purely visual changes should still run relevant existing validation when appropriate.

---

## Unit Tests

Use Unit Tests for isolated logic.

Examples:

* filtering
* sorting
* validation
* transformations
* utilities
* calculations
* state transitions
* domain logic

Test meaningful normal cases and important edge cases.

Do not create Unit Tests for trivial implementation details.

---

## Component Tests

Use Component Tests for meaningful UI behavior.

Test from the user's perspective whenever possible.

Examples:

```text
Dashboard renders important service-provided data.

User selects "High" priority
→ only high-priority issues are shown.

User clicks the mobile menu button
→ navigation opens.

User closes the mobile menu
→ navigation closes.

Service returns an empty result
→ empty state is displayed.
```

Prefer assertions based on:

* accessible roles
* labels
* visible text
* user interactions
* observable output

Avoid testing:

* internal React state
* private implementation details
* exact component hierarchy
* exact Tailwind classes

---

## E2E Tests

Use E2E tests to protect critical application flows.

Do not create an E2E test for every small feature or UI change.

Maintain a small, stable set of tests for important user journeys.

Examples may include:

```text
Application loads successfully

Dashboard loads
→ application shell is visible
→ primary navigation is available

Create issue
→ submit
→ issue appears in the application

Edit issue
→ save
→ updated data is displayed

Change issue status
→ updated status persists through the flow
```

When a change introduces or materially modifies a critical user flow, determine whether the relevant E2E test should be added or updated.

Existing critical E2E tests should still be executed before PR merge even when the current task does not require a new E2E test.

Do not create fake product functionality merely to make an E2E test possible.

---

## Regression Tests for Bug Fixes

Bug fixes should strongly prefer regression tests when practical.

Expected workflow:

```text
Understand the bug
↓
Identify reproducible behavior
↓
Create or update a test that exposes the bug
↓
Implement the smallest correct fix
↓
Verify the regression test passes
↓
Run related tests
```

The regression test should protect the expected behavior, not the specific implementation used to fix the bug.

If a practical regression test cannot be added, explain why.

---

## Protect Existing Flows

Testing should not only verify the newly implemented behavior.

Also consider:

```text
What existing flow could this change accidentally break?
```

If shared code is modified:

1. Inspect its consumers.
2. Identify affected flows.
3. Check existing tests for those flows.
4. Run relevant regression tests.
5. Add coverage only when an important gap exists.

This is especially important when modifying:

* shared components
* shared hooks
* shared utilities
* services
* data-access code
* application layout
* routing
* state management

The goal is to preserve existing behavior while making the smallest necessary change.

---

## Test Level Selection

Use the lowest test level that provides sufficient confidence.

Prefer:

```text
Unit Test
```

when isolated logic can be tested directly.

Prefer:

```text
Component Test
```

when the behavior depends on UI rendering or user interaction.

Use:

```text
E2E Test
```

when confidence depends on multiple application layers working together as a real user flow.

Do not use E2E tests when a reliable Component Test provides sufficient confidence.

Do not extract production code into unnecessary functions or components solely to make testing easier.

---

## Do Not Over-Test

The goal is not maximum test count or maximum coverage percentage.

The goal is:

> Use the smallest meaningful set of automated tests that provides strong confidence in the changed behavior and protects important existing flows.

Do not:

* create duplicate tests
* test trivial implementation details
* create meaningless tests just to increase coverage
* create unnecessary test files
* make tests excessively coupled to implementation

Tests should survive reasonable internal refactoring when observable behavior remains unchanged.

---

## Test Failure Policy

Never:

* delete a failing test just to make CI pass
* weaken an assertion just to make CI pass
* skip a failing test without explanation
* modify unrelated behavior just to satisfy a test
* assume a failing test is wrong without investigating it

When a test fails, determine whether:

1. production code is incorrect
2. the test expectation is outdated
3. the failure is caused by the current change
4. the failure is pre-existing
5. the failure is caused by the environment

Make the smallest correct change.

---

## PR Validation

Before considering implementation ready for review or PR, run the validation required by the current repository.

For projects using the Track Fix validation setup, this normally includes:

```bash
yarn lint
yarn typecheck
yarn test
yarn build
yarn test:e2e
```

The purpose of these checks is:

```text
lint
→ static code-quality checks

typecheck
→ TypeScript correctness

test
→ Unit and Component regression coverage

build
→ production build and integration validation

test:e2e
→ critical user-flow regression coverage
```

Do not report a command as `PASS` unless it was actually executed successfully.

If a command cannot be executed, report:

```text
NOT RUN
```

and explain why.

---

## Final Testing Report

After every implementation task, include a testing section in the final response.

Use:

```text
## Tests

Added:
- <test and behavior protected>

Updated:
- <test and behavior protected>

Existing coverage:
- <relevant existing coverage>

Not added:
- <reason, if no new tests were necessary>
```

Only include categories that are relevant.

Then report actual validation:

```text
## Validation

yarn lint       — PASS / FAIL / NOT RUN
yarn typecheck  — PASS / FAIL / NOT RUN
yarn test       — PASS / FAIL / NOT RUN
yarn build      — PASS / FAIL / NOT RUN
yarn test:e2e   — PASS / FAIL / NOT RUN
```

Also mention any important affected flow that was specifically verified.

---

## Definition of Done

Production-code implementation is not considered complete only because the UI appears to work.

The expected completion flow is:

```text
Implementation
↓
Test impact analysis
↓
Add/update meaningful automated tests
↓
Run affected tests
↓
Run project validation
↓
Review affected flows
↓
Review final diff
↓
Report results
```

The default rule is:

> If a change introduces or modifies meaningful testable behavior, add or update the appropriate automated test without waiting for me to ask.

> If existing tests already provide sufficient coverage, reuse them instead of creating duplicate tests.

> If no meaningful automated test is necessary, explicitly explain why.


# Communication Language

Always communicate with me in Traditional Chinese (繁體中文).

This includes:
- implementation plans
- explanations
- progress reports
- testing reports
- validation results
- risk assessments
- final responses

Code, identifiers, filenames, commands, commit messages, and technical terminology may remain in English when appropriate.

Unless I explicitly request another language, use Traditional Chinese for all natural-language communication.