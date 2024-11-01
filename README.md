# Inventario de Productos - Backend API

Este es un proyecto de backend básico y escalable utilizando Node.js, Express y MongoDB con Mongoose. La API permite manejar un inventario de productos con los campos: nombre, fecha de vencimiento, cantidad, y peso por unidad. Además, proporciona endpoints para crear, leer, actualizar y eliminar productos, así como para ordenar productos por fecha de vencimiento y cantidad.

##Tabla de Contenidos
Requisitos
Instalación
Uso
Endpoints
Estructura del Proyecto
Dependencias

##Requisitos
Node.js (v14 o superior)
MongoDB (local o remoto)

##Instalación
1. Clona el repositorio o descarga los archivos del proyecto.

git clone https://github.com/usuario/proyecto-inventario.git
cd proyecto-inventario

2. Instala las dependencias:
```
npm install
```
3. Configura la conexión a MongoDB en el archivo app.js. Asegúrate de que el connectionString esté apuntando a tu base de datos MongoDB.

mongoose.connect('mongodb://localhost:27017/nombre_base_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

4. Iniciar el servidor:
```
npm start
```
El servidor correrá en http://localhost:5000.

##Uso

##Crear Producto

Para crear un producto, envía una solicitud POST a:

POST /api/products

Con el siguiente cuerpo en formato JSON:

{
  "nombre": "Producto X",
  "fechaVencimiento": "2024-12-31",
  "cantidad": 100,
  "pesoUnidad": 0.5
}

##Obtener Productos por Fecha de Vencimiento

Para obtener productos ordenados por fecha de vencimiento (de menor a mayor), envía una solicitud GET a:

GET /api/products/expirations

##Obtener Productos por Cantidad

Para obtener productos ordenados por cantidad (de menor a mayor), envía una solicitud GET a:

GET /api/products/quantities


##Eliminar Producto

Para eliminar un producto, usa:

DELETE /api/products/:id

##Endpoints


| Método | Endpoint	| Descripción|
|--------|----------|------------|
| POST	 | /api/products |	Crea un nuevo producto |
| GET	 | /api/products |	Obtiene todos los productos |
| GET	 | /api/products/|  Obtiene un producto por su ID |
| DELETE | /api/products/|  Elimina un producto por su ID |
| GET	 | /api/products/expirations | Obtiene productos ordenados por fecha de vencimiento |
| GET	 | /api/products/quantities |	Obtiene productos ordenados por cantidad |

##Estructura del Proyecto

/controllers
    productController.js     # Lógica de negocio para productos
/models
    Product.js               # Definición del modelo Producto
/routes
    productRoutes.js         # Definición de las rutas de productos
app.js                       # Configuración principal de la aplicación

##Dependencias

*Express: Framework de servidor para Node.js.
*Mongoose: ODM para MongoDB que facilita las consultas y validaciones de datos.
*dotenv: Para cargar variables de entorno (opcional, si se quiere configurar de forma segura el acceso a MongoDB).

##Dependencias instaladas

"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^6.7.2"
}

##Licencia

Este proyecto está licenciado bajo la MIT License. Puedes ver más detalles en el archivo LICENSE.
