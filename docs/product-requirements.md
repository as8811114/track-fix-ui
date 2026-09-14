# Track Fix — Product Requirements

## Product

Track Fix is a frontend application for tracking software bugs and development issues.

This repository contains the frontend application only.

## Goal

The goal of Track Fix is to build a practical issue tracking interface while practicing an AI-agent-assisted frontend development workflow.

The project should demonstrate:

- Frontend architecture
- React and Next.js development
- TypeScript
- Responsive UI
- Automated testing
- Pull-request-based development
- Continuous Integration
- AI-agent-assisted software development

## Current Development Phase

The current phase is frontend-only.

The backend will be implemented separately in a future project.

During this phase:

- Use mock data.
- Do not connect to a real backend.
- Do not create a database.
- Do not implement real authentication.
- Keep data access replaceable so real APIs can be connected later.

## MVP Features

### Dashboard

Display:

- Total issues
- Open issues
- In-progress issues
- Completed issues
- Recent issues

### Projects

Users should be able to interact with:

- Project list
- Project detail
- Create project UI
- Edit project UI

### Issues

An issue contains:

- ID
- Title
- Description
- Status
- Priority
- Created time
- Updated time

Users should be able to:

- View issues
- Create an issue
- Edit an issue
- Delete an issue
- View issue detail

### Issue Status

- Todo
- In Progress
- Done

### Priority

- Low
- Medium
- High

### Board

Provide a Kanban-style board:

- Todo
- In Progress
- Done

### Search and Filter

Support filtering by:

- Status
- Priority

Search should support issue title when implemented.

### Responsive Design

The primary workflows should support:

- Desktop
- Tablet
- Mobile

## Out of Scope

The frontend MVP does not include:

- Backend APIs
- Database
- Real authentication
- Teams
- Comments
- Notifications
- GitHub integration
- AI product features