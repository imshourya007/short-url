# URL Shortener

This is a URL shortener project built using Node.js, Express, and MongoDB. The project is set up and run entirely on Replit.

## Features

- Shorten long URLs
- Redirect short URLs to their original URLs
- Store URL data in MongoDB

## Getting Started

### Prerequisites

- A Replit account

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/imshourya007/short-url.git
    cd short-url
    ```

2. **Open the project in Replit**:
    - Go to [Replit](https://replit.com/).
    - Create a new Repl.
    - Import the cloned repository.

3. **Install dependencies**:
    Replit should automatically detect the `package.json` file and install the necessary dependencies. If not, you can manually install them:
    ```bash
    npm install
    ```

4. **Install MongoDB**:
    MongoDB is installed directly in the Replit project. Follow these steps to set it up:

    - Open the Shell in Replit.
    - Run the following commands to set up MongoDB:
        ```bash
        curl -fsSL https://pgp.mongodb.com/server-5.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-5.0.gpg --dearmor
        echo "deb [signed-by=/usr/share/keyrings/mongodb-server-5.0.gpg] http://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
        sudo apt-get update
        sudo apt-get install -y mongodb-org
        ```

5. **Run MongoDB**:
    Start the MongoDB server in Replit:
    ```bash
    mongod --dbpath ./data --bind_ip 127.0.0.1 --port 27017
    ```

6. **Run the application**:
    Open a new shell tab in Replit and start the Node.js application:
    ```bash
    npm start
    ```

7. **Access the application**:
    - The server should be running on port `8001`.
    - You can access it through the URL provided by Replit.

## Endpoints

- `GET /`: Home page.
- `POST /shorten`: Shorten a new URL.
- `GET /:shortId`: Redirect to the original URL.

## Project Structure

- `index.js`: Entry point of the application.
- `controllers/`: Contains the logic for handling requests.
- `models/`: Mongoose models for MongoDB.
- `routes/`: Express routes for different endpoints.

## Contributing

Feel free to fork the repository and make changes. Pull requests are welcome!

## License

This project is licensed under the MIT License.
