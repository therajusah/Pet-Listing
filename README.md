# Pet Listing Website Using React.js

## Overview

This is a Pet Listing Website Using React.js. The platform allows users to search for pets available for adoption, view pet details, and more. The UI is designed to be user-friendly, with features like a modal search form, image sliders for pet details, and a responsive design.

## Table of Contents

- [Pet Listing Website Using React.js](#pet-listing-website-using-reactjs)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Design Decisions](#design-decisions)

## Project Structure

The project structure is organized as follows:

```plaintext
src/
├── assets/               # Static assets like images, fonts, etc.
├── components/           # Reusable UI components
│   ├── ErrorBoundary.jsx # Error boundary component for handling errors gracefully
│   ├── PetDetails.jsx    # Component to display details of a selected pet
│   ├── PetList.jsx       # Component to display a list of pets
│   ├── SearchForm.jsx    # Form component for searching pets
│   ├── SearchModal.jsx   # Modal component for the search form
│   ├── SearchResults.jsx # Component to display search results
│   ├── Spinner.jsx       # Loading spinner component
├── pages/                # Pages of the application
│   ├── Home.jsx          # Home page component
├── services/             # API service functions
│   ├── api.jsx           # Contains API request functions
├── utils/                # Utility functions and context
│   ├── Context.jsx       # Context for global state management
├── App.jsx               # Main App component
├── index.css             # Global CSS styles
└── main.jsx              # Entry point of the application
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/therajusah/Pet-Listing.git
   cd Pet-Listing
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:
   ```bash
   npm install
   ```

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server, and the application will be accessible at `http://localhost:3000`.

## Design Decisions

1. **Component-based Architecture:**
   The application is structured using a component-based architecture to promote reusability and maintainability. Components are organized into directories based on their purpose.

2. **Context API:**
   The `PetContext` is used for state management, allowing different components to access shared state, such as the list of pets, loading status, and error messages.

3. **Error Handling:**
   The `ErrorBoundary` component is used to catch and handle errors gracefully, preventing the application from crashing.

4. **Responsive Design:**
   The application is designed to be responsive, ensuring a good user experience on various devices, including mobile and desktop.

5. **API Integration:**
   The application integrates with a mock API to fetch pet data. The API requests are managed in the `api.jsx` file.
