import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import config files Here
import connectToDB from './config/connect.js';
import {MONGO_URI_LOCAL, MONGO_URI_REMOTE, PORT} from './config/config.js'
import bookRoutes from './routes/book.routes.js'
import { errorHandler } from './middleware/errorHandler.js';
const app = express();
// Use
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes); // Mount the books routes on /api/books


// Error Handler Middleware
app.use(errorHandler);
// Check if there is internet connection or not
fetch('https://www.google.com/')
 .then(response => {
    if (response.ok) {
      console.log('Internet connection available');
      connectToDB(MONGO_URI_REMOTE).then(() => console.log('Connected to Remote MongoDB'))
    } else {
      console.log('No internet connection');
      connectToDB(MONGO_URI_LOCAL).then(() => console.log('Connected to Local MongoDB'))
    }
  })
 .catch(error => {
    console.error('Error checking for internet connection:');
    connectToDB(MONGO_URI_LOCAL).then(() => console.log('Connected to Local MongoDB'))
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

