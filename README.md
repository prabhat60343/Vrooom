# Uber Clone Backend

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Uber
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5001
    DB_CONNECT=mongodb://localhost:27017/uber_clone
    JWT_SECRET=supersecretkey
    ```

4. Start the server:
    ```sh
    npm start
    ```

## Endpoints

### User Registration
- **URL:** `/users/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

### User Login
- **URL:** `/users/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

### Get User Profile
- **URL:** `/users/profile`
- **Method:** `GET`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```

## License

This project is licensed under the MIT License.
