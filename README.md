# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js route handlers:  failure to handle invalid input parameters gracefully.  Specifically, the `/users/:id` route lacks error handling when an invalid `userId` is supplied.

## Bug

The `bug.js` file contains an Express.js route that fetches user data based on an ID passed as a route parameter.  It fails to validate the `userId` and handle cases where the ID is invalid or not found. This can lead to crashes or unexpected behavior.

## Solution

The `bugSolution.js` file shows how to improve the route handler by adding error handling.  This includes validation of the `userId` and appropriate responses (e.g., 400 Bad Request or 404 Not Found) for invalid or missing users.  Always anticipate and handle potential errors to create robust applications.
