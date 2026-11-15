# React.js Project

## Overview

This project is built using **React.js** and **Vite**, with a collection of modern libraries for state management, API handling, routing, form management, data visualization, and UI development.

API requests are mocked using **Mock Service Worker (MSW)** to simulate backend interactions during development. The project currently uses sample/mock data, which may not represent actual business data.

# Project Documentation

For additional information about the project, refer to the following documentation:

[Project Structure](/Documents/ProjectStructure.md) – Overview of the project folder structure and code organization.

[Project Overview](/Documents/ProjectOverView.md) – Overview of the project and its main modules.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Project

Start the development server using:

```bash
npm run dev
```

This executes the following script configured in `package.json`:

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

Once the server starts, Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser to access the application.

## Technologies & Packages Used

The project uses the following major dependencies:

| Package               | Version  | Purpose                                 |
| --------------------- | -------- | --------------------------------------- |
| React.js              | -        | Frontend UI development                 |
| Vite                  | -        | Development server and build tool       |
| @tanstack/react-query | ^5.107.1 | Server-state management and API caching |
| @tanstack/react-table | ^8.21.3  | Flexible and customizable data tables   |
| axios                 | ^1.21.1  | HTTP client for API requests            |
| dayjs                 | ^1.11.23 | Date formatting and manipulation        |
| formik                | ^2.4.9   | Form state management                   |
| lodash                | ^4.18.1  | Utility functions and data manipulation |
| lucide-react          | ^1.72.0  | Icon library                            |
| react-router-dom      | ^7.18.5  | Application routing and navigation      |
| react-toastify        | ^11.2.0  | Toast notifications                     |
| recharts              | ^3.10.1  | Charts and data visualization           |
| tailwindcss           | ^4.3.5   | Utility-first CSS styling               |
| yup                   | ^1.7.1   | Form validation and schema validation   |

## API Mocking

### Mock Service Worker (MSW)

The project uses **Mock Service Worker (MSW)** to mock API requests during development.

MSW intercepts HTTP requests at the network level and provides predefined mock responses without requiring an actual backend server.

This allows frontend functionality to be developed and tested independently of backend API availability.

### Mock Data

- API endpoints are simulated using MSW handlers.
- Mock responses are returned for supported API requests.
- Sample data is used to demonstrate application functionality.
- The current mock data is not necessarily related to actual business requirements or production data.
- No real backend integration is required to run the application in its current development setup.

### Replacing Mock APIs

When integrating with the actual backend:

1. Replace the MSW mock handlers with actual API endpoints.
2. Configure the API base URL.
3. Connect the existing API services to the backend.
4. Update response handling according to the actual API response structure.
5. Disable MSW in the production environment.

## Development Notes

- The project uses Vite for fast development and hot module replacement.
- React Query handles server-state management and API caching.
- React Router manages application navigation.
- Formik and Yup are used for form handling and validation.
- TanStack Table provides data table functionality.
- Recharts is used for chart and dashboard visualizations.
- Tailwind CSS handles application styling.

## Available Commands

| Command       | Description                  |
| ------------- | ---------------------------- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |

## Important Notes

- Ensure Node.js and npm are installed before starting the project.
- Run `npm install` after cloning the repository.
- The application currently uses mocked APIs and sample data.
- Actual backend integration is not included in the current setup.
- Environment-specific configurations should be updated before production deployment.

---
