/**
 * Filename: server.js
 * Student's Name: Nandini Patel
 * StudentID: 200596236
 * Date: 13 oct 2024
 * 
 * Description:
 * This file is the entry point of the application. It initializes the Express server,
 * connects to the MongoDB database, and starts listening for HTTP requests on the defined port.
 */
const app = require('./app'); // Import the app from app.js

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
