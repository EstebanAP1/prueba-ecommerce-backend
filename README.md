# Ecommerce App Backend

## Prueba Junior Soluciones Americana

### Para desplegar el proyecto seguir los siguientes pasos:

#### 1. Instalación

Instala las dependencias necesarias usando npm:

```sh
npm install
```

#### 2. Inicializar Prisma

Genera los archivos necesarios para Prisma:

```sh
npx prisma generate
```

Aplica las migraciones de la base de datos:

```sh
npx prisma migrate dev --name init
```

Despliega las migraciones:

```sh
npx prisma migrate deploy
```

#### 3. Iniciar el Proyecto

Inicia el servidor en modo desarrollo:

```sh
npm run start:dev
```

#### 4. Testing

Ejecuta las pruebas:

```sh
npm test
```

---

### Endpoints

#### Autenticación con Google

1. **Endpoint para iniciar el login con Google**

   - **URL**: `/auth/google/login`
   - **Método**: `GET`
   - **Descripción**: Este endpoint inicia el proceso de autenticación con Google. Cuando un usuario accede a esta URL, se activa el `GoogleGuard`, que probablemente redirige al usuario a la página de inicio de sesión de Google.

2. **Endpoint para manejar la redirección de Google**

   - **URL**: `/auth/google/redirect`
   - **Método**: `GET`
   - **Descripción**: Este endpoint maneja la redirección después de que Google ha autenticado al usuario.
   - **Acción**: Redirige al usuario a `http://localhost:3000/login` con un token de autenticación (`req.user`).

#### Autenticación con Facebook

3. **Endpoint para iniciar el login con Facebook**

   - **URL**: `/auth/facebook/login`
   - **Método**: `GET`
   - **Descripción**: Este endpoint inicia el proceso de autenticación con Facebook. Similar al endpoint de Google, se activa el `FacebookGuard` que probablemente redirige al usuario a la página de inicio de sesión de Facebook.

4. **Endpoint para manejar la redirección de Facebook**

   - **URL**: `/auth/facebook/redirect`
   - **Método**: `GET`
   - **Descripción**: Este endpoint maneja la redirección después de que Facebook ha autenticado al usuario.
   - **Acción**: Redirige al usuario a `http://localhost:3000/login` con un token de autenticación (`req.user`).

#### Categorías

5. **Endpoint para recuperar categorías**

   - **URL**: `/categories`
   - **Método**: `GET`
   - **Descripción**: Este endopoint retorna todas las categorías disponibles.

#### Pagos

6. **Endpoint de simulación de pago**

   - **URL**: `/payments`
   - **Método**: `GET`
   - **Descripción**: Este endopoint siempre retorna true para simular la realización del pedido.

#### Productos

7. **Endpoint para recuperar productos**

   - **URL**: `/products`
   - **Método**: `GET`
   - **Descripción**: Este endopoint retorna todos los productos.

#### Usuarios

8. **Endpoint para recuperar productos**

   - **URL**: `/user/register`
   - **Método**: `POST`
   - **Descripción**: Este endopoint recibe los datos de un usuario y en caso de no exister lo crea en la base de datos.

---

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu máquina antes de empezar. Si tienes algún problema o duda, por favor revisa la documentación o contacta al equipo de soporte.

### Notas Adicionales:

**Notas**: La api se ejecuta en http://localhost:3000
