# Medicine E-Commerce Frontend

## Overview

The frontend of the Medicine E-Commerce Platform is developed using TypeScript and Next.js, with Tailwind CSS for styling. It includes user authentication, product management, a dynamic category system, and a responsive design. The platform integrates with a backend API for data handling and supports JWT-based authentication.

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Next.js
- **Styling:** Tailwind CSS
- **State Management:** Redux, RTK Query, Axios
- **Notification:** React Hot Toast
- **Modal:** React Portal

## Features

1. User Authentication (Registration, Login, JWT)
2. Product Pages with dynamic categories
3. Shopping Cart with Add-to-Cart functionality
4. Product Variant Selection and Price Update
5. Checkout Process with state management
6. Admin Dashboard for managing users, products, and orders
7. Responsive Design for seamless user experience
8. SEO optimization using Next.js features
9. Error handling and performance optimization
10. Integration with backend services for CRUD operations

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone github repo link
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup Environment Variables:**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```plaintext
    VITE_API_URL = https://eco-pharmacy-server.vercel.app/api/v1
    VITE_IMGBB_API_KEY = your_api_key
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Running Tests

To run tests for the frontend, use:

```bash
npm test
```

### Deployment

For deployment, you can use platforms like Vercel. Ensure that your environment variables are configured properly in the deployment platform.
