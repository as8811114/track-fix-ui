# Track Fix — Frontend Architecture

## Repository Responsibility

`track-fix-ui` contains the frontend application for Track Fix.

Frontend and backend are maintained separately.

Future repositories may look like:

```text
track-fix-ui
track-fix-api
```

## Current Architecture

The application is currently frontend-only.

Backend integration will be implemented after the frontend MVP becomes stable.

## Technology Stack

### Application

* Next.js
* React
* TypeScript

### Styling

* Tailwind CSS

### Testing

* Vitest
* React Testing Library
* Playwright

### Continuous Integration

* GitHub Actions

### Package Manager

* Yarn

## Suggested Structure

```text
app/
components/
features/
mocks/
services/
hooks/
types/
utils/
```

Feature-specific code should remain grouped when practical.

Example:

```text
features/
└─ issues/
   ├─ components/
   ├─ services/
   ├─ hooks/
   ├─ types.ts
   └─ utils.ts
```

## Data Access

UI components must not directly depend on mock data.

Avoid:

```text
UI
↓
mock data
```

Prefer:

```text
UI
↓
service / data-access layer
↓
mock data
```

Example:

```text
IssueList
↓
getIssues()
↓
mockIssues
```

Future implementation:

```text
IssueList
↓
getIssues()
↓
Track Fix API
```

The UI should not need to know whether data comes from mocks or a real API.

## Mock Data

During frontend development:

* Mock data represents backend responses.
* Domain objects should have TypeScript types.
* Components should not import mock data directly.
* Backend-specific behavior should not be invented unless required by the UI.

## State Management

Prefer local state for isolated UI state.

Introduce shared or global state only when multiple areas genuinely require it.

Do not add a global state library without a clear requirement.

## Backend Boundary

Do not implement backend endpoints inside `track-fix-ui`.

The future backend should be treated as an external API.
