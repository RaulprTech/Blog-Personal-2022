---
title: 'Haz tu propio Linktree 😃 (Tutorial)'
date: '2023-03-12'
tags: ['HTML', 'CSS', 'Web Development']
draft: false
summary: '
En este tutorial usamos HTML y CSS para crear nuestra propia versión de Linktree. Un gran primer proyecto para principiantes.
'
layout: ProjectLayout
repository: https://github.com/RaulprTech/linkme
demo: https://raulprtech.github.io/linkme/
---

Linktree es una herramienta muy útil para compartir varios enlaces importantes en un solo lugar. Además la interfaz es muy simple, por ello me ha parecido que clonar esta interfaz es un gran primer proyecto para principiantes en desarrollo web y así pueda servirles no solo como practica sino como un primer paso en la creación de su portafolio de proyectos.

Usaremos HTML y CSS para crear nuestra propia versión de Linktree.

## Prework

Antes de comenzar asegúrate de tener un editor de código que te permita manipular de forma mas fácil el código, yo estoy usando Visual Studio Code.

Además te recomiendo que uses alguna extensión o plugin que te permita visualizar los cambios en tu HTML, para ello si esta en VSCODE te recomiendo Live Server, la puedes encontrar en la tienda de extensiones.

> Te recomiendo tener a la mano una hoja de trucos de CSS, como la que te he dejado [aquí](https://6964453136575.gumroad.com/l/css-cheats) .

## Configuración base del Archivo HTML

Empezamos creando el archivo HTML y configurando la estructura básica del sitio web. Si usas Visual Studio Code puedes hacerlo con el comando `html:5`.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Linktree Clone</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body></body>
</html>
```

## Head

El `head` es la parte de la estructura del código HTML que nos sirve para colocar las configuraciones del sitio. Estas configuraciones en su mayoría no son visibles para el usuario normal, pero si para buscadores y otras herramientas.

Ahora para completar las configuraciones del `head`, agregamos las siguientes etiquetas:

- `title`: Contendrá el texto mostrado en la pestaña del navegador
- `meta`: Son etiquetas especiales para colocar la Metadata de nuestro sitio. Son muy importantes para que los buscadores sepan sobre que trata el contenido de nuestro sitio.
- `link`: Permite enlazar otros archivos, como el logo que aparecerá en la pestaña y el archivo CSS (hoja de estilos) que llenaremos mas adelante.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Linktree Clone</title>
    <meta name="description" content="Sitio web con enlaces al blog de raul pacheco" />
    <link href="favicon.png" rel="icon" type="image/png" />
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body></body>
</html>
```

## Body

Ahora que ya tenemos listo en head, pasemos al `body`. El `body` es la parte visible de nuestro sitio, es la información que será representada en la ventana.

Comenzando con la etiqueta `main`, que como su nombre indica contendrá el contenido principal del sitio. Además le agregaremos el atributo `class` con el valor container, esto hace referencia a una clase de CSS que escribiremos mas adelante en nuestro archivo.

```html
<body>
    <main class="container">
    </main>
</body>
</html>
```

A partir de aquí escribiremos 3 secciones dentro de la sección principal (`main`):

1. La primera sección contendrá una presentación con información breve que nos describa.
2. La segunda contendrá una pequeña fila de iconos enlazados a nuestras redes sociales.
3. La tercera contendrá los enlaces adicionales que queramos compartir.

### Primera sección: Intro

A esta sección la llamaremos intro y tiene como objetivo dar al visitante un primer vistazo sobre quien es la persona detrás de la página y contendrá las siguientes etiquetas:

- `section`: Esta etiqueta es un separador de secciones .
- `div`: Sirve como un separador universal, es decir, se puede usar en una gran variedad de situaciones, sin embargo hay que usarlo con moderación pues carece de significado semántico, lo cuál es muy importante para que los buscadores posicionen nuestro sitio.
- `img`: Esta etiqueta permite agregar una imagen a nuestro sitio, comúnmente se acompaña de los atributos `src`, que indica el directorio donde se encuentra la imagen y `alt`, que es una breve descripción de la imagen. Además es una etiqueta un poco diferente a otras, pues no necesita etiqueta de cierre.
- `p`: Esta etiqueta se usa para representar párrafos de información.
- `h#`: Las etiquetas `h1, h2, h3, h4, h5, h6` sirven para representar títulos, siendo `h1` el titulo principal y `h6` el de menor importancia.

```html
<section class="intro">
  <div>
    <img src="profile.png" alt="user photo" />
    <div>
      <h1 class="name">Raul Pacheco Rodriguez</h1>
      <h2 class="nickname">@RaulprTech</h2>
      <p class="description">
        🔥 Fanático de la Ciencia 🧪, la Tecnología ⚙️ y de la cultura Hacker, buscando nuevos
        retos, aprendizajes y compartir lo que aprendo. La tecnología no para de mejorar y quiero
        estar siempre en primera fila para verlo.
      </p>
      <hr />
    </div>
  </div>
</section>
```

- El primer `div` servirá para hacer mas fácil centrar el contenido en su interior.
- Con etiqueta `img` mostraremos nuestra foto de perfil.
- Con `h1` pondremos colocamos nuestro nombre y con `h2` nuestro nickname o nombre de usuario de la red social de nuestra preferencia.
- En la etiqueta `p` colocaremos una breve descripción que nos represente.
- No olvides colocar las clases correspondientes a cada etiqueta, como se ve en el código.

### Segunda sección: Iconos de redes sociales

Esta sección contendrá una fila de iconos enlazados a las redes sociales que prefieras. En este caso he colocado los iconos de Github, Instagram, Twitter y Linkedin. Se usan las siguientes etiquetas:

- `a`: es usada para colocar enlaces, se usa con el atributo `href`, contiene la dirección del enlace y target, que indica como se abrirá en vinculo (en la misma pagina o en una nueva)
- `svg`: es un tipo de imagen que podemos ver como código `html,` aunque por ahora no tienes que preocuparte por como esta estructurada, solo en colocarla.

```html
<section class="social-networks">
  <a href="https://github.com/RaulprTech/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Github</title>
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  </a>
  <a href="https://www.instagram.com/raulprtech/" target="_blank">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Instagram</title>
      <path
        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
      />
    </svg>
  </a>
  <a href="https://twitter.com/RaulprTech" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Twitter</title>
      <path
        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
      />
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/raulprtech/" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <title>Linkedin</title>
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
    </svg>
  </a>
</section>
```

En el código puedes ver que cada etiqueta `svg` (cada icono) esta envuelta con una etiqueta `a`, así que cuando pulsemos click sobre cualquier icono se activara el enlace de la etiqueta a correspondiente.

### Tercera sección: Enlaces

Ahora es momento de agregar los enlaces a nuestro clon de Linktree. Para ello, dentro del contenedor principal, creamos varios elementos `<a>` para cada enlace que deseamos agregar. Estos elementos se pueden agregar dentro de un contenedor adicional para asegurarnos de que los enlaces estén organizados correctamente.

La única etiqueta nueva que usaremos aquí, es la etiqueta `span`, la cuál es similar a la etiqueta `p`, pues sirve para representar texto, pero carece de semántica, por lo que puede ser usado para distintos propósitos.

```html
  <section>
      <a class="link" href="https://raulpacheco.dev" target="_blank">
        <img src='https://raulpacheco.dev/_next/image?url=%2Fstatic%2Fimages%2Ftwitter-card.png&w=640&q=75' />
        <h2 class="link-title">Mi Blog</h2>
        <span>✍️</span>
      </a>
    </section
```

Usaremos el separador `section` para crear una nueva sección por cada nuevo enlace que queramos agregar. Dentro colocaremos una etiqueta a, que a la vez contendrá una imagen un texto en formato de titulo `h2` y un icono contenido en una etiqueta `span`

## Footer

Por último, agregamos el pie de página. Esto se puede hacer mediante la creación de un elemento `footer` dentro del `body`. En este caso, agregaremos un texto simple por medio de la etiqueta p y dentro he colocado mi nombre con una etiqueta a que lo enlaza a mi blog, esta parte la puedes omitir.

```html
<footer class="footer">
  <p>© 2023 LinkMe - Desarrollado por <a href="https://raulpacheco.dev">Raul Pacheco</a></p>
</footer>
```

## Estilos

Ya tenemos la estructura básica , pero aún necesitamos agregar los estilos para que se vea bien. Podemos hacer esto mediante el archivo style.css que creamos anteriormente.

En el archivo style.css, podemos agregar los estilos para los diferentes elementos que hemos creado en el archivo HTML. Para asegurarnos de que los estilos se apliquen correctamente, debemos utilizar los selectores correspondientes.

### Estilo del Body

Empezamos por darle estilo al cuerpo de la página, comenzando por elegir la fuente, el color de fondo y quitar márgenes que no necesitamos.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}
```

Luego, creamos una clase `.container` para establecer el ancho máximo del contenido y centrarlo en la pantalla:

```css
.container {
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
```

Continuamos con la clase `.intro` que se encarga de la presentación del usuario:

```css
.intro {
  padding: auto;
  margin: auto;
  weight: 100%;
  display: flex;
  flex-direction: col;
  justify-content: center;
  items-align: center;
}
```

Ahora le damos estilos a las etiquetas `img` que están en su interior

```css
.intro img {
  border-radius: 300px;
  margin: auto;
  height: 150px;
  width: 150px;
}
```

Ahora solo ajustamos el texto del nickname

```css
.nickname {
  font-size: 16px;
  font-weight: normal;
}
```

Agregamos un estilo para las líneas separadoras de la etiqueta `hr`:

```css
hr {
  background-color: black;
}
```

Luego, creamos una clase `.social-networks` para alinear las redes sociales horizontalmente:

```css
.social-networks {
  display: flex;
  justify-content: center;
}
```

Le asignamos un tamaño y un margen de separación a los iconos dentro:

```css
.social-networks svg {
  height: 30px;
  width: 30px;
  margin: 5px 5px;
}
```

Ahora para los enlaces creamos la clase `.link`:

```css
.link {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px;
  margin: 10px 0px;
  text-decoration: none;
  color: #333;
  justify-content: space-between;
  align-items: center;
}
```

Estilizamos por separado cada uno de los elementos internos:

```css
.link img {
  width: 80px;
  height: 40px;
  border-radius: 5px;
}

.link h2 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.link i {
  font-size: 25px;
}
```

Y por ultimo para nuestro `footer` solo centramos el texto:

```css
.footer {
  text-align: center;
}
```

Con esto, hemos completado nuestro clon de Linktree.

![Linkme](https://raw.githubusercontent.com/RaulprTech/linkme/main/LinkMe-main.png)

Ahora puedes personalizar aún más nuestro perfil añadiendo más enlaces, iconos y tu información.

Te regalo una hoja de trucos de CSS, para que tengas a la mano cuando programes. Descárgala [aquí](https://6964453136575.gumroad.com/l/css-cheats) .

¿Te sientes listo para otro reto? Practica replicando a Google [aquí](https://raulpacheco.dev/blog/projects/haciendo-un-clon-de-google)

¿Listo para JavaScript? Conoce todo los que se puede hacer con el [aquí](https://raulpacheco.dev/blog/posts/que-se-puede-hacer-con-javascript)
