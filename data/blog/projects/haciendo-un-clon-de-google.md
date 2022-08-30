---
title: 'Haciendo un clon de Google'
date: '2022-06-16'
tags: ['HTML', 'CSS']
draft: true
summary: '
Una forma común de practicar tus habilidades de desarrollo web es clonando webs famosas, por eso en este articulo se lleva un registro de como fue desarrollado un clon de uno de los motores de búsqueda mas conocidos y usados
'
layout: ProjectLayout
---

## Introducción

Una forma común de practicar tus habilidades de desarrollo web es clonando webs famosas, por eso en este articulo se lleva un registro de como fue desarrollado un clon de uno de los motores de búsqueda mas usados con solo HTML y CSS.

## PreWork

Para realizar el proyecto se usaron las siguientes herramientas:

### Editor

- Visual Studio Code

### Extensiones

- Live Server
- Auto Rename Tag

## Componentes

Después de analizar la la pagina original podemos dividir la estructura de nuestro sitio en 3 partes: header, main y footer.

### Estructura

Con la información que tenemos partimos creando la estructura base y enlazando el archivo style.css con la etiqueta `link`.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Google</title>
  </head>

  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
</html>
```

### Estilos

Agregamos nuestros primeros estilos. Quitamos el margen y el padding, asignamos un tamaño y tipo de fuente.

```css
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
```

A todas las etiquetas `a` les quitamos la decoración y elegimos el tipo de cursor que aparecerá sobre ellas.

```css
a {
  text-decoration: none;
  cursor: pointer;
}
```

## Header

En el header pondremos una barra con diferentes opciones de selección, tal y como se ve en la pagina original.

### Estructura

Le colocamos a la etiqueta `<header>` una clase que nombraremos con el mismo nombre. Dentro colocaremos una etiqueta `<nav>` que contendrá una lista desordenada con la clase "nav-right-section".

```html
<header class="header">
  <nav>
    <ul class="nav-right-section"></ul>
  </nav>
</header>
```

La lista desordenada `<ul>` es usada en conjunto con la etiqueta `<li>` la cual actúa como separador para distinguir a cada elemento que se encuentre en su interior, de igual forma dentro de cada elemento habrá una etiqueta `<a>` que llevara dentro el nombre del sitio hacia el que redirecciona.

```html
<header class="header">
  <nav>
    <ul class="nav-right-section">
      <li>
        <a>Gmail</a>
      </li>
      <li>
        <a>Imagenes</a>
      </li>
    </ul>
  </nav>
</header>
```

Solo nos faltan 2 elementos, los cuales son imágenes y las podemos obtener de internet. La primera es el icono de menú y la segunda es una foto de perfil. Los agregamos con la misma estructura y queda de la siguiente manera.

```html
<header class="header">
  <nav>
    <ul class="nav-right-section">
      <li>
        <a>Gmail</a>
      </li>
      <li>
        <a>Imagenes</a>
      </li>
      <li>
        <a>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/circled-menu.png"
            alt="six points forming a square"
          />
        </a>
      </li>
      <li>
        <a>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADGmqu_isgunM8luDoSu3oJP1tdZEMtuEujRssX2Noz_=s32-c-mo"
            alt="profile image of one person"
          />
        </a>
      </li>
    </ul>
  </nav>
</header>
```

### Estilos

En este componente tenemos solo dos clases pero igual asignaremos algo mas de css por medio de las etiquetas.

Comenzamos agregando un tamaño al `header`

```css
.header {
  width: 100%;
  height: 60px;
}
```

Llevamos a cualquier etiqueta `nav` dentro del `header` a la esquina derecha usando flexbox de la siguiente forma

```css
header nav {
  display: flex;
  justify-content: right;
}
```

Agregamos los estilos de la clase "nav-right-section" ubicada dentro de un `nav` y a vez este dentro del `header`.
Aquí definimos el espacio que ocupara y usamos flexbox para centrar los elementos que tenga dentro.

```css
header nav .nav-right-section {
  width: 250px;
  height: auto;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
```

A los `li` que se encuentren dentro se les asigna un pequeño margen derecho y el color negro.

```css
nav .nav-right-section li {
  margin-right: 10px;
  color: black;
}
```

Por ultimo agregamos unos detalles relacionados con la forma y el margen del `nav`.

```css
nav .nav-right-section img {
  border-radius: 50px;
  margin-left: 10px;
}
```

## Main

Aquí partimos colocando 3 secciones con las clases "main-logo", "main-input" y "main-buttons" respectivamente.

```html
<main>
  <section class="main-logo"></section>
  <section class="main-input"></section>
  <section class="main-buttons"></section>
</main>
```

En la primera sección agregaremos solamente una etiqueta `img` que contendrá al logo de google.

```html
<section class="main-logo">
  <img class="image" src="logo.png" />
</section>
```

En la segunda sección colocamos una etiqueta `div` con la clase "main-input-container".

```html
<section class="main-input">
  <div class="main-input-container"></div>
</section>
```

Dentro pondremos una etiqueta `span` con la clase "search-icon", una etiqueta `input` de tipo texto y una etiqueta `a` con la clase "micro-icon".

```html
<section class="main-input">
  <div class="main-input-container">
    <span class="search-icon"> </span>
    <input type="text" />
    <a class="micro-icon" href=""></a>
  </div>
</section>
```

Quedando de la siguiente forma:

```html
<main>
  <section class="main-logo">
    <img class="image" src="logo.png" />
  </section>
  <section class="main-input">
    <div class="main-input-container">
      <span class="search-icon"> </span>
      <input type="text" />
      <a class="micro-icon" href=""></a>
    </div>
  </section>
  <section class="main-buttons">
    <div><button>Buscar con Google</button></div>
    <div><button>Me siento con suerte</button></div>
  </section>
</main>
```

### Estilos

Agregamos estilos generales de la sección como tamaño del margen superior y alineación del texto.

```css
main {
  margin-top: 150px;
  text-align: center;
}
```

Configuramos las dimensiones del logo

```css
main .main-logo {
  width: 530px;
  margin: 0 auto;
  margin-bottom: 35px;
}

main .main-logo img {
  width: 272px;
  height: 92px;
}
```

Configuramos las dimensiones y características del input, además de las del contenedor que lo tiene dentro.

```css
main .main-input {
  width: 530px;
  margin: 0 auto;
  margin-bottom: 35px;
}

main .main-input-container {
  width: 525px;
  border-radius: 100px;
  border: 1px solid #dfe1e5;
  display: flex;
  justify-content: center;
  align-items: center;
}

main .main-input input {
  width: 450px;
  height: 40px;
  border: none;
  outline: none;
}
```

Agregamos un efecto de hover que cambia la sombra y el borde.

```css
main .main-input-container:hover {
  box-shadow: 0 1px 6px 0 #20212447;
  border-color: #dfe1e500;
}
```

Ahora colocamos los iconos de búsqueda y micrófono en sus respectivos espacios. En este caso estamos agregando las imágenes por medio de css y no con etiquetas html.

```css
main .main-input .search-icon {
  background-image: url('https://img.icons8.com/android/24/000000/search.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 18px;
  height: 18px;
}

main .main-input .micro-icon {
  background-image: url('https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
```

Y configuramos las características de los botones

```css
main .main-buttons {
  width: 530px;
  margin: 0 auto;
}

main .main-buttons div {
  display: inline-block;
}

main .main-buttons button {
  height: 36px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  font-size: 14px;
  color: #5f6368;
  border-radius: 5px;
  padding: 0 15px;
  margin-right: 15px;
  cursor: pointer;
}

main .main-buttons button:hover {
  border: 1px solid #c6c6c6c6;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: #222;
  background-color: #f8f8f8;
}
```

## Footer

### Estructura

Para el footer el colocamos una clase del mismo nombre. Posteriormente agregamos dos listas de la misma forma que usamos en el header y a cada una de ellas le asignamos un nombre de clase diferente.

```html
<footer class="footer">
  <ul class="footer-left">
    <li><a>Sobre Google</a></li>
    <li><a>Publicidad</a></li>
    <li><a>Negocios</a></li>
    <li><a>Como funciona la Búsqueda</a></li>
  </ul>
  <ul class="footer-right">
    <li><a>Privacidad</a></li>
    <li><a>Condiciones</a></li>
    <li><a>Preferencias</a></li>
  </ul>
</footer>
```

### Estilos

Usamos grid para ajustar la posición de los elementos dentro del footer, damos color al fondo y colocamos el borde.

```css
footer {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  font-size: 13px;
  background-color: #f2f2f2;
  border-top: 1px solid #e4e4e4;
}
```

Damos estilos a las listas contenidas en el footer

```css
footer ul {
  margin: 10px;
  list-style: none;
  display: flex;
  padding-left: 0;
}

footer ul li a {
  margin: 10px;
  color: #5f6368;
}
```

Usamos las clases personalizadas para ubicar adecuadamente ambas listas.

```css
footer .footer-left {
  justify-self: left;
}

footer .footer-right {
  justify-self: right;
}
```

Y así es como hacemos un clon del Frontend de Google usando solo HTML y CSS, sin ningún Framework o biblioteca adicional.
