//const express = require('express')
import express from 'express';
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

app.post('/api/users', (request, response)=>{
    response.status(200).send('Create user');
});

app.get('/api/users', (request, response)=>{
    response.status(200).send('Get user');
});
app.put('/api/users', (request, response)=>{
    console.log(request.body);
    response.status(500).send(`Update user`);
});
app.delete('/api/users/:id', (request, response)=>{
    response.status(400).send(`Delete user ${request.params.id}`);
});

app.listen(PORT, 
    ()=> {
        console.log(`Server is running Neyla`);
    }
)