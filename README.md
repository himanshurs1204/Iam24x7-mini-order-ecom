# Mini Orders API

## Overview
Mini Orders API is a backend application built with Node.js, Express, and MongoDB. It provides a RESTful API for managing user authentication, products, and orders with role-based access control.

## Features
- User authentication (register, login, refresh tokens, profile)
- Role-based access (admin, customer)
- Products CRUD with pagination and search
- Orders creation with stock checks and status updates
- Input validation and consistent error handling
- JWT Authentication (access + refresh)

## Technologies Used
- Node.js 18+
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)

## Project Structure
```
mini-orders-api
├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── app.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mini-orders-api
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DATABASE_URL=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The API will be running on `http://localhost:3000`.

## API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login a user
  - `POST /api/auth/refresh` - Refresh JWT tokens
  - `GET /api/auth/profile` - Get user profile

- **Products**
  - `GET /api/products` - Get all products (with pagination and search)
  - `POST /api/products` - Create a new product
  - `GET /api/products/:id` - Get a product by ID
  - `PUT /api/products/:id` - Update a product
  - `DELETE /api/products/:id` - Delete a product

- **Orders**
  - `POST /api/orders` - Create a new order
  - `GET /api/orders/:id` - Get an order by ID
  - `PUT /api/orders/:id` - Update order status

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.