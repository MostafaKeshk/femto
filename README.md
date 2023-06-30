# Femto Finance Web App

Femto is a finance web application that helps users set and track their saving goals. Authenticated users can enter their desired savings goal, and the app will calculate the monthly deposit amount required to reach that goal. This readme provides an overview of the project's features and installation instructions.

## Features

### Authentication

- The app includes two pages and two endpoints for user authentication: one for login and the other for registration.
- Access to authenticated pages is guarded, redirecting users to the login page if they attempt to access them without logging in.
- Once logged in or registered, users receive a JSON Web Token (JWT) and their user data, which are stored in both local storage and the context API.

### Goals (CRUD Operations)

- The goals section is an authenticated page that fetches data from the server's goals endpoint, using the user ID decoded from the JWT.
- Users can create new goals by clicking a create button, which opens a modal with inputs for the total amount and target date. The app dynamically calculates the required monthly deposit based on these inputs. When submitted, the goal is saved through a POST endpoint.
- The UI includes a list of goal cards, each displaying the total amount, target date, and required monthly deposit for a specific number of months. The goal cards also feature delete and edit buttons.
- Clicking the delete button prompts a modal with a confirmation message. If confirmed, the goal is deleted through a DELETE endpoint.
- Clicking the edit button opens a modal with the same functionality as the create modal, pre-filled with the existing goal data. When submitted, the goal is updated through a PATCH endpoint.
- Pagination is implemented, allowing the retrieval of goals in batches of 6.
- In case there are no goals available, an empty list message is displayed.

### Settings

- The settings page, accessible only to authenticated users, includes a form pre-filled with the user's data. Users can update their information and change their password through this form.
- Upon submission, the user data is updated in both local storage and the context API, and a PATCH endpoint is called to update the server-side data.

### General

- Each form includes validation using the yup library, ensuring that user inputs are properly validated.

## Installation

To install and run Femto on your local machine, follow these steps:

1. Clone the repository, which already includes the necessary environment variables.
2. Navigate to the 'frontend' folder, install the dependencies by running `npm install`, and start the frontend using `npm start`.
3. Navigate to the 'backend' folder, install the dependencies by running `npm install`, and start the backend using `npm run start`.

Make sure to have the required dependencies and Node.js installed on your machine before proceeding with the installation.
