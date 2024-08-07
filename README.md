Prolif
======

## Overview
--------

Prolif is a React application that showcases various artists. On the index page, you can see individual artist names, each linking to a personal show page. The app also includes features to add, edit, and delete artists, along with a special page dedicated to Kara Walker's personalized honorable mention.

## Features
--------

-   **Index Page**: Displays a list of all artists. Each artist's name is a clickable link that navigates to their personal show page.
-   **Show Page**: Displays detailed information about an individual artist and their works.
-   **Add Feature**: Allows users to add a new artist to the showcase.
-   **Edit Feature**: Enables users to edit the details of an artist.
-   **Delete Feature**: Allows users to delete an artist from the showcase.
-   **Kara Walker's Honorable Mention Page**: Accessible via the navigation bar icon, this page is dedicated to Kara Walker's work.

Technologies Used
-----------------

### Frontend

#### Dependencies

-   **React**: `^18.2.0`
-   **React DOM**: `^18.2.0`
-   **React Icons**: `^5.2.1`
-   **@fortawesome/fontawesome-svg-core**: `^6.5.2`
-   **@fortawesome/free-brands-svg-icons**: `^6.5.2`
-   **@fortawesome/free-solid-svg-icons**: `^6.5.2`
-   **@fortawesome/react-fontawesome**: `^0.2.1`
-   **react-native-vector-icons**: `^10.1.0`
-   **React Router DOM**: `^6.14.2`

#### DevDependencies

-   **@types/react**: `^18.3.3`
-   **@types/react-dom**: `^18.3.0`
-   **@vitejs/plugin-react**: `^4.3.1`
-   **eslint**: `^8.57.0`
-   **eslint-plugin-react**: `^7.34.3`
-   **eslint-plugin-react-hooks**: `^4.6.2`
-   **eslint-plugin-react-refresh**: `^0.4.7`
-   **vite**: `^5.3.4`

### Backend

The backend repository provides the necessary API endpoints for the frontend to interact with the database.

#### Dependencies

-   **cors**: `^2.8.5`
-   **dotenv**: `^16.4.5`
-   **express**: `^4.19.2`
-   **pg-promise**: `^11.9.1`
-   **nodemon**: `^2.0.15`

#### Repository

The backend code is available at: [Here](https://github.com/KhylaRedd/prolif_backend)

Installation
------------

1.  Clone the repository:

    bash

    Copy code

    `git clone <repository-url>`

2.  Navigate to the project directory:

    bash

    Copy code

    `cd artist-showcase-app`

3.  Install dependencies:

    bash

    Copy code

    `npm install`

4.  Start the development server:

    bash

    Copy code

    `npm run dev`

Usage
-----

-   **Index Page**: Visit the `/artists` URL to see a list of artists. Click on any artist's name to go to their show page.
-   **Show Page**: Displays the artist's details and works. Options to add, edit, or delete the artist are available here.
-   **Add Feature**: Use the add button on the index page to create a new artist entry.
-   **Edit Feature**: Click the edit button on an artist's show page to update their details.
-   **Delete Feature**: Click the delete button on an artist's show page to remove them from the showcase.
-   **Kara Walker's Page**: Click the special icon in the navigation bar to access Kara Walker's personalized honorable mention page.

Contributing
------------

1.  Fork the repository.
2.  Create a new branch:

    bash

    Copy code

    `git checkout -b feature-branch`

3.  Make your changes.
4.  Commit your changes:

    bash

    Copy code

    `git commit -m 'Add some feature'`

5.  Push to the branch:

    bash

    Copy code

    `git push origin feature-branch`

6.  Open a pull request.

License
-------

This project is licensed under the MIT License, created by Khyla Redd