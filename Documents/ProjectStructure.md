# Project Structure

This document describes the frontend source-code organization based on
the current project structure.

## Directory Overview

```text
src/
├── api/
│   ├── query/
│   │   ├── dashboard.ts
│   │   ├── expense.ts
│   │   ├── experiments.ts
│   │   └── login.ts
│   ├── axios.ts
│   ├── endpoint.ts
│   ├── reactQuery.ts
│   └── types.ts
│
├── assets/
│
├── components/
│   ├── common/
│   ├── AuthLayout.tsx
│   ├── Header.tsx
│   ├── MainLayout.tsx
│   ├── ProtectedRoute.tsx
│   ├── PublicRoute.tsx
│   ├── SideMenu.tsx
│   ├── StatsCard.tsx
│   └── types.ts
│
├── mockApi/
│
├── pages/
│   ├── Activity/
│   ├── Dashboard/
│   ├── Expense/
│   │   ├── hook/
│   │   │   ├── ExpenseColumn.tsx
│   │   │   ├── ExpenseFormSchema.tsx
│   │   │   ├── useAddEditExpense.ts
│   │   │   └── useExpense.ts
│   │   ├── AddEditExpense.tsx
│   │   ├── Expense.tsx
│   │   └── types.ts
│   ├── Experiment/
│   ├── Login/
│   └── Management/
│
├── providers/
│
├── store/
│   ├── slice/
│   │   ├── <Slice>.ts
│   └── store.ts
│
├── theme/
│   ├── colors.ts
│   ├── light.css
│   ├── theme.ts
│   └── tokens.ts
│
├── utils/
│   ├── constants.ts
│   ├── enum.ts
│   └── helper.ts
│
├── routes.tsx
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

> The `common/`, `assets/`, `mockApi/`, `providers/`, and several page
> folders are shown as directories in the project explorer; their
> internal contents are not expanded in the provided screenshots.

# Highlights

## Custom Hooks

The project structure emphasizes separation of concerns, logic isolation, and code reusability through custom React hooks.

Custom hooks encapsulate business logic and state management, keeping UI components focused on rendering and user interactions.

For example, `useAddEditExpense.ts` handles the business logic associated with adding and editing expenses, separating it from the presentation layer. This approach makes the code easier to maintain, debug, test, and reuse across components.

## React Query

The project uses React Query as a centralized approach to server-state management and API data handling.

`reactQuery.ts` provides a common layer for managing data-fetching operations, mutations, caching, and request lifecycle management. It works in conjunction with `axios.ts`, which provides the shared HTTP client configuration and serves as the foundation for API communication.

This separation ensures consistent API handling across the application, reduces duplicated request logic, and makes data management easier to maintain and extend.

## Folder and File Responsibilities

### `api/` --- API Layer

Contains the shared API configuration and feature-specific API query
modules.

- `axios.ts` --- shared Axios client configuration.
- `endpoint.ts` --- API endpoint definitions.
- `reactQuery.ts` --- shared React Query configuration or utilities.
- `types.ts` --- shared API-related TypeScript types.
- `query/` --- API operations grouped by feature:
  - `dashboard.ts` --- dashboard data requests.
  - `expense.ts` --- expense-related requests.
  - `experiments.ts` --- experiment-related requests.
  - `login.ts` --- authentication/login requests.

### `components/` --- Shared UI Components and Layouts

Contains reusable components used across multiple pages.

- `common/` --- shared/common UI components.
- `AuthLayout.tsx` --- authentication-related layout.
- `Header.tsx` --- application header.
- `MainLayout.tsx` --- main application layout.
- `ProtectedRoute.tsx` --- route guard for protected pages.
- `PublicRoute.tsx` --- route handling for public pages.
- `SideMenu.tsx` --- application side navigation.
- `StatsCard.tsx` --- reusable statistics card.
- `types.ts` --- component-related TypeScript types.

### `pages/` --- Feature Pages

Organizes application screens by feature.

- `Activity/` --- activity-related pages.
- `Dashboard/` --- dashboard screens and related functionality.
- `Expense/` --- expense management functionality.
- `Experiment/` --- experiment-related screens and functionality.
- `Login/` --- login screens and functionality.
- `Management/` --- management-related screens and functionality.

### `providers/` --- Application Providers

Contains provider components used to make application-level services or
context available to the component tree.

### `store/` --- Global State Management

Contains the application store and feature slices.

- `store.ts` --- store configuration.
- `slice/AuthSlice.ts` --- authentication state.
- `slice/ExpenseSlice.ts` --- expense state.
- `slice/ExperimentSlice.ts` --- experiment state.

### `theme/` --- Theme and Design Tokens

Contains theme configuration and styling tokens.

- `colors.ts` --- color definitions.
- `light.css` --- light theme CSS definitions.
- `theme.ts` --- theme configuration.
- `tokens.ts` --- reusable design tokens.

### `utils/` --- Shared Utilities

Contains reusable constants, enums, and helper functions.

- `constants.ts` --- application constants.
- `enum.ts` --- shared enums.
- `helper.ts` --- common helper functions.

## Application Entry and Routing

- `main.tsx` --- application entry point; mounts the React
  application.
- `App.tsx` --- root application component.
- `App.css` --- styles associated with the root application component.
- `index.css` --- global styles.
- `routes.tsx` --- application route definitions.

## Root Configuration

The screenshots also show an `.env` file at the project root. It is used
for environment-specific configuration. Keep secrets and private
credentials out of source control; commit an `.env.example` containing
only placeholder values when documenting required environment variables.
