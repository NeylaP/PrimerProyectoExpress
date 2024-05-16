// const db = require("../database/db");

const User = require("../database/models/User");

const userController = {};

userController.createUser = (request, response) => {
	// recuperar la info a guardar en bd
	const name = request.body.name;
	const email = request.body.email;
	const password = request.body.password;
	const isActive = 1;
	const roleId = 1;

	// Validaciones
	if (!name || !email || !password) {
		return response.status(400).json("Name, email and password are required");
	}

	// tratar la informacion como por ejemplo encriptar la contraseña

	// guardar en bd
	User.create({
		name: name,
		email: email,
		password: password,
		isActive: isActive,
		roleId: roleId,
	});

	// finalmente siempre mi api debe devolver una respuesta
	response.status(201).json("CREATE USER");
};

userController.getUsers = (request, response) => {
	// consultar en la base de datos
	const users = User.find();

	response.status(200).json(users);
};

userController.updateUser = (request, response) => {
	console.log("-------------------");
	console.log(request.body);
	console.log("-------------------");

	response.status(200).send("UPDATE USER");
};

userController.deleteUser = (request, response) => {
	// recuperar el id del usuario a eliminar
	const userIdToDelete = request.params.id;

	// eliminar de la db el usuario por id
	const userDeleted = User.delete(userIdToDelete);

	if (userDeleted) {
		response.status(200).json("DELETE USER " + request.params.id);
	} else {
		response.status(404).json("User doesnt exist: " + request.params.id);
	}
};

userController.findUserById = (request, response) => {
	// recuperar el id del usuario que quieto recupear
	const userId = request.params.id;

	// recuperar el usuario de la base de datos a traves del modelo
	const user = User.findById(userId);

	// finalmante devolvemos una respuesta
	if (!user) {
		response.status(404).json("User doesnt exists");
	} else {
		response.status(200).json(user);
	}
};

module.exports = userController;