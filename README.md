# BookStore

A comprehensive MERN Stack Online Book Store. Features authentication, admin panel for book management, inventory system, and intuitive user interface for browsing and purchasing books.

## Tech Stack

- *Frontend*: HTML, CSS, JavaScript, TailWindCSS
- *Backend*: Node.js
- *Database*: MongoDB

## Screenshots

![homepage](https://github.com/tanushree1810/MyBookHouse/assets/93597823/0ff81753-0ef9-4787-9ba3-5fe955a2517a)
Caption: Homepage

![homepage2](https://github.com/tanushree1810/MyBookHouse/assets/93597823/188bb74f-2006-4e9d-9dc8-8df9e14dd45d)
Caption: Homepage 2

![login](https://github.com/tanushree1810/MyBookHouse/assets/93597823/e7a49a70-967a-4aa6-bcc2-fce4020cbfd9)
Caption: Login page

![dashboard](https://github.com/tanushree1810/MyBookHouse/assets/93597823/a7be750d-e83a-460d-97c1-ec177693d615)
Caption: Dashboard

![uploadbooks](https://github.com/tanushree1810/MyBookHouse/assets/93597823/42f86356-cf24-4eb9-8452-a8c193f51051)
Caption: Upload Book page

![managebook](https://github.com/tanushree1810/MyBookHouse/assets/93597823/f74db1ca-afb4-4acd-b345-09ccbca57261)
Caption: Manage Books page

## Run Locally
### Clone the Repository:
```
git clone https://github.com/tanushree1810/MyBookHouse.git
cd MyBookHouse
```
### Install Dependencies:
Navigate to the server directory and install dependencies:
```
cd mern-server
npm install
```
Then, navigate to the client directory and install dependencies:
```
cd ../mern-client
npm install
```
### Configure Environment Variables:

#### Install `dotenv` Package
First, make sure you have 'dotenv' installed to the mern-server folder to manage environment variables securely.
```
npm install dotenv
```
#### Create a `.env` File
Create a '.env' file in your project directory(in mern-server folder) and add your MongoDB connection details. 
```
# .env file
MONGODB_URI=your mongodb uri
```
### Start the Server:
Navigate to the server directory and start the server:
```
cd mern-server
npm start
```
### Start the Client:
In a new terminal, navigate to the client directory and start the client:
```
cd mern-client
npm run dev
```
### This will start the client application on http://localhost:5713.
