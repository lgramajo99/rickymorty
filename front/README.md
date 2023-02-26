# HW 06: React-Intro | Integración

## **Duración estimada** 🕒

90 minutos

---

## **Rick & Morty App**

### **INTRO**

En esta homework, vamos a crear una serie de Componentes de React, que luego van a formar parte de nuestro primer desarrollo front-end.

> **Nota**: Todos los Componentes que hagamos en este homework son `Puros`, por lo tanto, ninguno tiene estado, simplemente reciben datos por props. No te preocupes por el estilo de los componentes. En la siguiente homework vamos a dárselos.

---

### **ESTRUCTURA**

🔹 Dentro de la carpeta `02 - Integration`, vas a encontrar la siguiente estructura:

- Una carpeta llamada **img**
- Una carpeta llamada **public**
- Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
- Un archivo **package.json**
- Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` vas a encontrar ya el esqueleto del proyecto React, estructurado de la siguiente manera, donde deberás codear cada Componente:

- Una carpeta llamada **components**
- Un archivo llamado **App.css**
- Un archivo llamado **App.js**
- Un archivo llamado **data.js**
- Un archivo **index.css**
- Un archivo **index.js**

> **Nota**: Sabemos que los Componentes de React tienen que cumplir el principio de una única responsabilidad, es decir que cada Componente debe cumplir una única tarea bien definida.

<img src="./img/ramas.jpg" alt="" />

---

## **PARTE 1**

---

### **COMENCEMOS**

Tu primer paso será ejecutar el comando `npm install` para instalar todas las dependencias.

En el archivo `App.js` ya tenemos importados y estamos renderizando los 3 componentes que vamos a codear. Revisa el código, verás que le estamos pasando props a estos componentes.

<br />

### **👩‍💻 01 - Haz el componente Character Card**

(`components/Card.js`)

<img src="./img/characterCard.png" height="250px">

Esta tarjeta va a mostrar el **nombre** de un personaje, su **especie**, **género** e **imagen**.

Además cuando el usuario haga click en la X de "cerrar", se invocará una función que también viene como props.

Este componente `Card` va a recibir las siguientes props:

- **name**: Nombre
- **species**: Especie
- **gender**: Género
- **image**: Imagen
- **onClose**: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

> Más adelante todos estos datos van a venir de una API externa, pero por ahora no nos interesa esa parte. Por el momento nosotros te los vamos a brindar desde un archivo local **(src/data.js)**, para que ya puedas ver tu componente funcionando.

---

<br />

### **👩‍💻 02 - Haz el componente Cards**

(`components/Cards.js`)

<img src="./img/Cards.png" height="250px">

Este Componente nos va a servir para renderizar **varios** componentes `Card`.

Básicamente, va a recibir un arreglo de `personajes` (con todos sus datos), y va a utilizar un componente `Card` (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

> Tip: Usar el método `map` y devolver un componente `Card` por cada elemento del arreglo. [Acá](https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) un ejemplo de la documentación de React.

---

<br />

### **👩‍💻 03 - Haz el componente de la de Barra de búsqueda**

(`components/SearchBar.js`)

<img src="./img/SearchBar.png" height="50px">

Vamos a crear este componente para luego poder agregar más personajes que deseemos ver.

Este Componente recibe por props una función `onSearch`, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input; pero de momento le pasamos uno cualquiera, ya que aún no estamos utilizando estados dentro del componente).

La función `onSearch` se debe ejecutar cuando se haga click en el botón `Agregar`.

<br />

---

## **PARTE 2**

---

### **¡Listo! Ahora creamos una app desde cero...**

¿Ya completaste los puntos anteriores y funciona todo? ¡Perfecto! Ya podemos comenzar a crear nuestra propia app:

1. En tu terminal, dirígete a un nuevo directorio (por ejemplo, tu escritorio). Allí es dónde crearemos nuestra app.

2. Ahora utiliza _CRA_ (create-react-app) mediante **npx** para crear una nueva app de React:

```bash
npx create-react-app rick_and_morty
```

> Hint: para el nombre de tu app no puedes usar mayúsculas ni el signo "&"

Al término del proceso, podrás ver que en tu directorio se creó una nueva carpeta llamada "rick_and_morty". Abre esta carpeta con tu Visual Studio Code. Allí encontrarás algo como esto:

<img src="./img/cra_01.png" height="200px">

3. Dentro de esta nueva carpeta tipeamos:

```bash
npm start
```

> Hint: Si aún tenemos corriendo el server local de la homework Integration Parte 1, vamos a obtener un error debido a que el puerto predeterminado (3000) está ocupado. Podemos elegir utilizar otro puerto, o terminar el proceso anterior y luego reintentarlo.

Esperamos que se "levante" el servidor local y luego veremos algo así:

<img src="./img/cra_02.gif" height="360px">

- Ahora simplemente tendrás que reemplazar la carpeta `/src` de este nuevo proyecto que acabas de crear, por la misma carpeta en la que estuviste trabajando dentro de esta homework.

En el navegador ya deberías ver los cambios. Lo que hicimos en la homework Integration Parte 1 está corriendo como una app independiente.

Listo! Ya tienes tu primer app hecha con React 👏🏼🚀

<br />
<br />
<br />

# HW 08: React-Estado-LifeCycle | Integración

## **Duración estimada 🕒**

1 hora y media

<br />

---

## **Rick & Morty App**

### **INTRO**

Hasta el momento, en nuestra Rick & Morty App tenemos estos 3 Componentes:

- Card.jsx
- Cards.jsx
- SearchBar.jsx

Adicionalmente, vamos a crear otro componente denominado `Nav` que será nuestra barra superior de navegación, en la cual incluiremos el componente `SearchBar`.

También vamos a reestructurar nuestra vista **_"Home"_**, que no es más que nuestro archivo `App.js` para darle una forma más ordenada.

<br />

---

### **COMENCEMOS**

En el archivo `App.js` ya tenemos importados y estamos renderizando los 3 componentes que vamos a codear. Revisa el código, verás que le estamos pasando props a estos componentes.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Crear Nav**

1. Crear el componente `Nav`.
2. Escribir el código correspondiente en `components/Nav.jsx`.

> **Hint**: Este componente debe incluir el componente `SearchBar`.

<br />

---

### **👩‍💻 EJERCICIO 2**

### **Reestructurar Home**

1. Veamos primero una imagen del resultado final y pensemos la estructura general:

<img src="./img/layout.png" width='800px'/>

> - **Recuadro rojo**: Nav
> - **Recuadro amarillo**: SearchBar
> - **Recuadro verde**: Cards
> - **Recuadro azul**: Card

2. Ahora vamos a modificar el contenido del archivo `App.js`:

   - En `App` sólo vamos a renderizar los componentes `Cards` y `Nav`.
   - Ya no vamos a renderizar la primera `Card` "suelta" que pusimos en la primera clase. Ahora el componente `Cards` será quien contenga todas las `Card` individualmente.
   - Lo mismo sucede con `SearchBar`. No lo vamos a seguir renderizando de forma directa en App, debido a que ya se encuentra dentro de `Nav`.

3. Importar y renderizar los componentes que vamos a utilizar.
4. Aplicar estilos básicos al componente **_Nav_**.

🔹 Resultado esperado:

<img src="./img/home1.png" width='800px'/>

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Implementar un estado**

Necesitamos mantener actualizado el listado de personajes a mostrar. Para ello debemos crear un estado en el componente `App.js` donde tengamos el array de personajes.

1. Borra el import que traes de data.js (ya no vamos a usar más los datos de este archivo).
2. Importa el hook useState.
3. Crea un estado `characters` donde guardaremos el array de personajes.

<br />

---

### **👩‍💻 EJERCICIO 4**

### **Función para agregar personajes**

Ahora debemos crear una función llamada `onSearch` para agregar nuevos personajes a nuestro estado `characters` y se la pasaremos al `SearchBar` mediante el `Nav`.

> **Hint**: Como aún no hemos hecho el llamado a la API para obtener los datos del personaje, agregamos uno por default para ver que esté funcionando:

```jsx
const example = {
   name: 'Morty Smith',
   species: 'Human',
   gender: 'Male',
   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};
```

<br />

---

### **👩‍💻 EJERCICIO 5**

### **Le pasamos la función a Nav**

Nuestra función recién creada (que modifica el estado `characters`) se la pasamos al componente `Nav`.

<br />

---

### **👩‍💻 EJERCICIO 6**

### **Seguimos pasando la función para que llegue a su destino**

Quien finalmente debe ejecutar la función `onSearch` no es el `Nav` sino el `SearchBar`, por lo que debemos hacerle llegar dicha función.

<br />

---

### **👩‍💻 EJERCICIO 7**

### **Analizando función onSearch**

En la homework anterior **06-React-Intro, 02 - Integration**, ya habíamos creado el componente `SearchBar` que recibía la función como parámetro y la ejecutaba cuando se hacía un `submit` del form.

En este punto la función ya debería ejecutarse. Cada vez que le demos click al botón `Agregar` un nuevo personaje se añade a nuestro estado `characters`, y por cada uno de ellos nuestro componente `Cards` renderiza una `Card`.

Si observamos el código anterior estamos llamando a la función `onSearch` sin pasarle ningún parámetro, pero quisiéramos que ese parámetro dependa del input ingresado por el usuario.

<br />

---

### **👩‍💻 EJERCICIO 8**

### **Pasándole parámetros a la función**

1. Modifica el componente `SearchBar` para que mantenga un **estado** interno del nombre del personaje (`character`) escrito por el usuario y que cuando haya un cambio en el input, lo detecte mediante el listener `onChange` y actualice dicho estado.

2. Adicionalmente, pasar dicho estado `character` como parámetro de la función `onSearch` cuando la llamamos en el `submit`; para que utilice el estado, que contiene lo que ingresó el usuario y éste valor llegue así a la función **_onSearch_** que tenemos en **App.js**.

<br />

---

### **👩‍💻 EJERCICIO 9**

### **Buscando datos reales**

1. Comenta el código que engloba la constante **example**

2. Ahora debemos modificar la función `onSearch` para que obtenga los datos necesarios desde la API de [Rick&Morty](https://rickandmortyapi.com). Para ello vamos a utilizar `fetch` para hacer la llamada y obtener el resultado. Por el momento sólo vamos a obtener los personajes por ID, ya que si los buscamos por nombre hay demasiados resultados debido a que los mismos se repiten bastante.

3. Mostrar un mensaje en caso de que el personaje no exista.

> **Hint**: Como aún no has visto promesas, tienes este snippet para que copies y pegues la función **_onSearch_**:

```js
function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
```

> **Nota**: si tienes conocimiento base en promesas y deseas hacerlo de otra manera, puedes hacer la llamada utilizando `axios` para traer los datos. En caso que no, te invitamos a que veas el código y analices qué puede estar pasando.💡

<br />

---

### **👩‍💻 EJERCICIO 10**

### **Cerrar cards**

Por último, recordemos que en la homework anterior **06-React-Intro, 02 - Integration** habíamos creado el componente `Card` para que reciba una función como parámetro. Ésta va a ser la encargada de eliminar esa card al momento de hacer click en el botón `X`.

Para ello es necesario definir dicha función `onClose` en **App.js**, para que a partir del id recibido, elimina dicho personaje del array de personajes del **_estado_**.

> **Hint**: Puedes utilizar el método `filter`.

---

🔹 Resultado esperado:

<img src="./img/final.gif" width='800px'/>

Listo! tu app es ahora dinámica e interactiva!! 👏🏼🚀

<br />

---

## **📌 EJERCICIO EXTRA**

- Controlar que no se puedan agregar personajes repetidos.
- Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).
