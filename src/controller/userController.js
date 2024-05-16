const userController = {};

userController.createUser = (request, response)=>{
    response.status(200).send('Create user');
};

userController.getUser = (request, response)=>{
    response.status(200).send('Get user');
};

userController.updateUser = (request, response)=>{
    console.log(request.body);
    response.status(200).send('Update user');
};

userController.deleteUser = (request, response)=>{
    response.status(400).send(`Delete user ${request.params.id}`);
};


module.exports = userController;