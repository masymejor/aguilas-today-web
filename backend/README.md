# Installation Instructions

To set up the backend of the project, follow these steps:

1. **Clone the repository:**  
   `git clone https://github.com/masymejor/aguilas-today-web.git`

2. **Navigate to the backend directory:**  
   `cd aguilas-today-web/backend`

3. **Install dependencies:**  
   Run `npm install` to install all required packages.

4. **Set up the environment variables:**  
   Create a `.env` file in the root of the backend directory and add the following variables:
   - `DATABASE_URL` - Your database connection string
   - `PORT` - Port number for the server (default is 3000)
   
5. **Run the application:**  
   Use `npm start` to run the application.


# Environment Variables Documentation

- `DATABASE_URL`: This variable is used to connect to your database. Make sure to replace the placeholder with your actual database URL.
- `PORT`: This variable sets the port on which the backend server will listen. If not specified, it defaults to 3000.


# API Endpoints List

## Auth Endpoints
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

## User Endpoints
- `GET /api/users`: Fetch a list of users.
- `GET /api/users/:id`: Fetch details of a specific user.

## Post Endpoints
- `GET /api/posts`: Get a list of posts.
- `POST /api/posts`: Create a new post.
- `GET /api/posts/:id`: Get a specific post by ID.
- `PUT /api/posts/:id`: Update a specific post by ID.
- `DELETE /api/posts/:id`: Delete a specific post by ID.
