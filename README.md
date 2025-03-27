# Uber Clone

## Backend Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Uber/Backend
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

## Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../Frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend server:
    ```sh
    npm start
    ```

### Confirm Ride Component

The `ConfirmRide` component is responsible for displaying the ride confirmation panel in the frontend. It includes details such as pickup and drop-off locations, fare, and a confirmation button.

#### Props
- `setConfirmRidePanel` (function): A function to toggle the visibility of the confirmation panel.

#### Usage
The component can be used as follows:
```jsx
<ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />
```

#### Features
- Displays pickup and drop-off locations.
- Shows the fare and payment method.
- Includes a button to confirm the ride.

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

### Captain Registration
- **URL:** `/captains/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "password": "password123",
        "vehicle": {
            "color": "red",
            "plate": "ABC1234",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
    ```

### Captain Login
- **URL:** `/captains/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "email": "jane.doe@example.com",
        "password": "password123"
    }
    ```

### Get Captain Profile
- **URL:** `/captains/profile`
- **Method:** `GET`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```

### Captain Logout
- **URL:** `/captains/logout`
- **Method:** `GET`
- **Headers:**
    ```json
    {
        "Authorization": "Bearer <token>"
    }
    ```

## Blacklisting Tokens

Tokens are blacklisted upon logout to prevent reuse.

### Blacklist Token Model
- **Schema:**
    ```json
    {
        "token": "string",
        "createdAt": "date"
    }
    ```

## License

This project is licensed under the MIT License.
