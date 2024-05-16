const express = require('express');
const userController = require('./controller/userController');
// import express from 'express';
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

app.post('/api/users', userController.createUser);

app.get('/api/users', userController.getUser);

app.put('/api/users', userController.updateUser);

app.delete('/api/users/:id', userController.deleteUser);

app.listen(PORT, 
    ()=> {
        console.log(`Server is running Neyla`);
    }
)