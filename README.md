# Feedback-Collector-App
# 📝 Feedback App (Node.js + MongoDB)

This is a basic full-stack feedback app using **HTML/CSS/JavaScript** on the frontend, **Node.js/Express** on the backend, and **MongoDB** as the database.

---

## 📦 Features

- Submit feedback with name and message
- Save and load feedbacks from MongoDB
- Display all feedbacks dynamically on the webpage

---

## 🚀 Setup Instructions

### 1. 📁 Clone the Repository

```bash
git clone https://github.com/your-username/feedback-app.git
cd feedback-app

2. 📦 Install Dependencies

npm install


3. ⚙️ Configure MongoDB

Make sure MongoDB is installed and running on your system.

Start MongoDB server:

mongod

The app connects to this local MongoDB instance:

mongodb://localhost:27017/feedbackdb

    You can update this in server.js if needed.

4. ▶️ Start the Server

node server.js

The app will run on:

http://localhost:3000

5. 🧪 Test the App

    Open your browser and go to http://localhost:3000

    Enter a name and feedback message

    Click Submit

    Your feedback will be saved in MongoDB and displayed on the page

📂 Project Structure

feedback-app/
├── public/
│   ├── index.html
│   └── script.js
├── server.js
├── package.json
└── README.md

🛠️ Technologies Used

    HTML, CSS, JavaScript (Frontend)

    Node.js, Express (Backend)

    MongoDB, Mongoose (Database)

📋 License

This project is open-source and free to use for educational or personal use.


---
