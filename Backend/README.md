# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password. The password must be at least 6 characters long.

## Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

## Response
### Success
- **Status Code:** 201 Created
- **Body:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

### Error
- **Status Code:** 400 Bad Request
- **Body:**
  ```json
  {
    "error": "All fields are required"
  }
  ```
  or
  ```json
  {
    "error": "Email is already registered"
  }
  ```
  or
  ```json
  {
    "error": "Invalid Email"
  }
  ```
  or
  ```json
  {
    "error": "First name must be at least 3 characters"
  }
  ```
  or
  ```json
  {
    "error": "Last name must be at least 3 characters"
  }
  ```
  or
  ```json
  {
    "error": "Password must be at least 6 characters"
  }
  ```

## Notes
- Ensure to replace `"yourpassword"` with a secure password.
- The email must be unique and not already registered in the system.
