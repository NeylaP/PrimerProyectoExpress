1. Inicializar proyecto
```sh
$ npm init
```

2. Instsalar express (framework)
```sh
$ npm i express
```

3. Inicializar git
```sh
$ git init
```

4. creamos fichero .gitignore y añadimo la carpeta /node_modules

5. Añadir "type": "module" en el package.json (import/export)

6. instalar nodemon
```sh
$ npm in nodemon
```
script "dev": "nodemon ./src/app.js"

7. Crear rutas
```js
app.get('/api/users', (req, res) => {
  res.status(200).send('GET USERS')
})
```