# Knowledge Spot API Documentation

Welcome to the Book Spot API documentation. This API allows you to manage books in the Book Spot application.

## Base URL

The base URL for all API endpoints is: `https://localhost:5000`

## Authentication

Authentication is required for certain endpoints. You need to include a valid JWT token in the Authorization header for these endpoints.

## Endpoints

### Add a New Book

- **URL:** `/api/books`
- **Method:** POST
- **Description:** Add a new book to the database.
- **Request Body:**
  - title: string (required)
  - authors: array of strings (required)
  - description: string (required)
  - price: number (required)
  - category: string (required)
  - language: string (required)
  - coverImage: string (required)
  - ISBN: string (required)
  - publicationDate: string (required)
  - publisher: string (required)
  - pages: number (required)
- **Success Response:**
  - **Code:** 201 CREATED
  - **Content:** `{ bookObject }`
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ message: 'Internal server error' }`

### Update an Existing Book

- **URL:** `/api/books/:id`
- **Method:** PUT
- **Description:** Update an existing book in the database.
- **Request Parameters:** `id` (string) - ID of the book to be updated
- **Request Body:** Same as the request body for adding a new book
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ updatedBookObject }`
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** `{ message: 'Book not found' }`
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ message: 'Internal server error' }`

### Delete a Book

- **URL:** `/api/books/:id`
- **Method:** DELETE
- **Description:** Delete a book from the database.
- **Request Parameters:** `id` (string) - ID of the book to be deleted
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ message: 'Book deleted successfully' }`
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** `{ message: 'Book not found' }`
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ message: 'Internal server error' }`

### Get Book Details

- **URL:** `/api/books/:id`
- **Method:** GET
- **Description:** Retrieve details of a specific book by its ID.
- **Request Parameters:** `id` (string) - ID of the book
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ bookObject }`
- **Error Response:**
  - **Code:** 404 NOT FOUND
  - **Content:** `{ message: 'Book not found' }`
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ message: 'Internal server error' }`
