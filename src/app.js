const express = require('express');
const userController = require('./controller/userController');
// import express from 'express';
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

app.post('/api/users', userController.createUser)
// recuperar todos los usuarios
app.get('/api/users', userController.getUsers)
// actulizar un user
app.put('/api/users', userController.updateUser)
// eliminar user
app.delete('/api/users/:id', userController.deleteUser)
// recuperar usuario por id
app.get('/api/users/:id', userController.findUserById)

app.listen(PORT, 
    ()=> {
        console.log(`Server is running Neyla`);
    }
)