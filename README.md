# SKELETON

- express
- PostgreSQL
- sequelize ORM
- Autentificacion con Tokens
- Brcrypt para hashear contraseñas
- Uso de Json web Token

---

- Rutas de Login y creasion de usuarios (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autentificacion y manejo de permisos
- /users/:id DELETE, PUT
- /users/me

---

# npm

npm i express uuid dotenv sequelize pg pg-hstore bcrypt
- express -> para que funcione la aplicacion.
- uuid -> generador de codigos UUID.
- dotenv -> habilitar variables de entorno.
- sequelize -> crear modelos y tablas.
- pg pg-hstore -> depedencia que necesita sequelize para integrar postgres
- bcrypt -> encriptar contraseñas

npm i -D nodemon
- -D nodemon -> para generar un servidor repetitivo.

npm i passport passport-jwt jsonwebtoken

# Orden

1. app.js
2. .env
3. config.js
4. database.js
5. models
6. controladores
7. services
8. routes

