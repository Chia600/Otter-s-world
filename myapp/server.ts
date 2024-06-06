import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Notre api écoute sur le port ${port}`);
});

app.get('/inscription', (req, res) => {
  const test = { id: 5, titre: 'Mon titre' }; // => stockage
  res.send(test);
});

app.post('/inscription', (req, res) => {
  console.log(req.body);
  const user = req.body;
  // stockage BDD [traitement de l'object]
  req.body.message = 'Votre user a bien été créé';
  res.send(req.body);
});








// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;
// const usersFilePath = path.join(__dirname, 'users.json');

// app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:4200', // Remplacez par l'origine de votre application Angular
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type']
// }));

// interface User {
//   email: string;
//   password: string;
// }

// // Helper function to read users from the file
// const readUsersFromFile = (callback: (err: NodeJS.ErrnoException | null, users: User[] | null) => void) => {
//   fs.readFile(usersFilePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
//     if (err) {
//       return callback(err, null);
//     }
//     try {
//       const users = JSON.parse(data) as User[];
//       return callback(null, users);
//     } catch (parseError) {
//       return callback(parseError as NodeJS.ErrnoException, null);
//     }
//   });
// };

// // Helper function to write users to the file
// const writeUsersToFile = (users: User[], callback: (err: NodeJS.ErrnoException | null) => void) => {
//   fs.writeFile(usersFilePath, JSON.stringify(users), callback);
// };

// // Route for registration
// app.post('/register', (req: { body: User; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): void; new(): any; }; }; json: (arg0: { success: boolean; }) => void; }): void => {
//   const { email, password } = req.body as User;

//   readUsersFromFile((err, users) => {
//     if (err) {
//       res.status(500).json({ success: false, message: 'Error reading file' });
//       return;
//     }

//     if (users === null) {
//       res.status(500).json({ success: false, message: 'Error parsing file' });
//       return;
//     }

//     const userExists = users.some(user => user.email === email);
//     if (userExists) {
//       res.status(400).json({ success: false, message: 'User already exists' });
//       return;
//     }

//     users.push({ email, password });

//     writeUsersToFile(users, (err) => {
//       if (err) {
//         res.status(500).json({ success: false, message: 'Error writing file' });
//         return;
//       }

//       res.json({ success: true });
//     });
//   });
// });

// // Route for login
// app.post('/login', (req: { body: User; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): void; new(): any; }; }; json: (arg0: { success: boolean; }) => void; }): void => {
//   const { email, password } = req.body as User;

//   readUsersFromFile((err, users) => {
//     if (err) {
//       res.status(500).json({ success: false, message: 'Error reading file' });
//       return;
//     }

//     if (users === null) {
//       res.status(500).json({ success: false, message: 'Error parsing file' });
//       return;
//     }

//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//       res.json({ success: true });
//     } else {
//       res.status(400).json({ success: false, message: 'Incorrect email or password' });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
