# Introduction

This project is a full-stack MERN application, combining a React frontend with an Express backend, MongoDB for data persistence, and Node.js for the server environment. It's designed to offer a quick start template for developing scalable web applications. This README provides instructions on setting up the project, including environment configuration and operational guidance.

## Project Structure

The project is divided into two main parts:

frontend: Contains the React application, configured with Vite for fast development and builds, and styled using TailwindCSS.
api: The backend part of the project, built with Express and connected to MongoDB through Mongoose. It includes a testing setup with Jest.
Prerequisites

Node.js (version 18.x or higher recommended)

MongoDB (local installation or cloud-based service like MongoDB Atlas)

npm (comes with Node.js)

## Installation

### Clone the Repository

```
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

### Setup Backend (API)

Navigate to the api directory:

```
cd api
```

### Install dependencies:

```
npm install
```

Create a .env file in the api directory with the following content, adjusted to your MongoDB setup:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myDatabase
JWT_SECRET=your_jwt_secret_here
```

Create a .env.test file in the api directory with the following content, adjusted to your MongoDB setup:

```
MONGODB_URI=mongodb://localhost:27017/test-db
```

### Setup Frontend

Navigate to the frontend directory:

```
cd ../frontend
```

Install dependencies:

```
npm install
```

(Optional) Configure environment variables by creating a .env file in the frontend directory if your project requires it.

## Running the Project

### Backend

Start the backend server:

```
npm start
```

Run tests:

```
npm test
```

### Frontend

Start the development server:

```
npm run dev
```

Run tests:

```
npm test
```

### Build the project for production:

```
npm run build
```

## Continuous Integration

The project includes a GitHub Actions workflow for continuous integration, which installs dependencies & runs backend and frontend tests on every push and pull request.

### Contributing

Contributors are welcome to enhance the project's features, fix bugs, or improve documentation. Please fork the repository, make your changes, and submit a pull request.
