const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//const MONGO_URI = 'mongodb+srv://cricketpandit:15U8HQIY1eRdbO7K@cricketpandit1-pl-0.xrtnj.mongodb.net';
//const MONGO_URI = 'mongodb+srv://cricketpandit:15U8HQIY1eRdbO7K@cricket-pandit-pl-0.xrtnj.mongodb.net';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err.message));

// Log Mongoose connection events
mongoose.connection.on('connected', () => console.log('Mongoose connected to MongoDB'));
mongoose.connection.on('error', err => console.error('Mongoose connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

app.get('/', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.json({ message: 'New26 MongoDB connected successfully!' });
    } else {
        res.status(200).json({
            message: 'New26 Failed to connect to MongoDB',
            error: { state:0 },
        });
    }
});
const PORT = 2200;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


// // Import required modules
// const express = require('express');
// const mongoose = require('mongoose');

// // Create an Express application
// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());

// // MongoDB connection string
// //const MONGO_URI = 'mongodb+srv://cricketpandit:15U8HQIY1eRdbO7K@cricket-pandit.xrtnj.mongodb.net/'; // Replace with your MongoDB connection string
// const MONGO_URI = 'mongodb+srv://cricketpandit:15U8HQIY1eRdbO7K@cricket-pandit.xrtnj.mongodb.net/local?retryWrites=true&w=majority';
// // const MONGO_URI = 'mongodb+srv://noc:SqEma609EuXjkmxz@cluster0.nwnxqg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// // Connect to MongoDB using Mongoose
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB successfully updated');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error.message);
//     });

// // Define a basic route
// app.get('/', (req, res) => {
//     if (mongoose.connection.readyState === 1) {
//         res.json({ message: 'New4 MongoDB connected successfully!' });
//     } else {
//         // res.status(200).json({
//         //     message: 'New4 Failed to connect to MongoDB',
//         //     error: JSON.stringify(mongoose.connection)
//         // });
//          res.status(500).json({
//             message: 'New4 Failed to connect to MongoDB',
//             error: {
//                 state: mongoose.connection.readyState,
//                 host: mongoose.connection.host,
//                 name: mongoose.connection.name,
//             },
//         });
//     }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });
