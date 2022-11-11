---
title: '¿Por qué usar React? ⚛️'
date: '2022-11-14'
tags: ['React', 'JavaScript', 'Web-Development']
draft: true
summary: '
No son pocas las razones por las que React domina las interfaces visuales para web e incluso gran parte de las interfaces para móviles. Fácil de aprender e integrar y con un gran ecosistema son algunas de las ventajas que hacen de React una librería tan popular y en este artículo las conocerás.
'
layout: PostLayout
bibliography: references-data.bib
canonicalUrl: 
---

No son pocas las razones por las que React domina las interfaces visuales para web e incluso gran parte de las interfaces para móviles. Fácil de aprender e integrar y con un gran ecosistema son algunas de las ventajas que hacen de React una librería tan popular y en este artículo las conocerás.

## ¿Qué es React?

React es una librería de JavaScript creada por Facebook que sirve para crear interfaces de usuario. Liberada en 2013, React es de código abierto y mantenida por Facebook en conjunto con la comunidad.

Esta librería se basa en el empaquetado de pequeñas partes independientes de una interfaz gráfica con su propia lógica llamados componentes, que al unirse pueden formar interfaces mucho más complejas.

### DOM virtual

El Document Object Model (DOM) es un registro basado en el código HTML, CSS Y JavaScript que escribimos y sirve para indicarle al navegador que dibujar en pantalla. Este proceso es el renderizado del DOM.

El renderizado es un proceso que consume muchos recursos, aunque normalmente esto no es un problema en páginas estáticas porque solo se realiza una vez.

Sin embargo, cuando quieres que tu página pueda ser capaz de cambiar conforme el usuario necesite, el renderizado convencional termina siendo ineficiente. Por ello, lo que React propone es el uso del Virtual DOM.

El Virtual DOM es una copia del DOM real que se almacena en memoria. Así, cuando se debe hacer algún cambio en la interfaz, se compara esta copia con las nuevas instrucciones y solo se agregan los nuevos cambios en la pantalla sin tener que volver a pintar toda la interfaz.

### Manejo del Estado

El estado nos permite adaptar un componente a diferentes situaciones que dependen de la interacción del usuario. Así, esas interacciones pueden persistir en la interfaz.

Un ejemplo es el carrito de compras de un sitio web. Cada vez que añadimos un artículo nuevo al carrito, la vista de este componente se modifica, agregando ese nuevo artículo.

## Hooks

Son funciones útiles encapsuladas para poder reutilizarse las veces que sean necesarias en diferentes componentes, evitando así la reescritura de código innecesaria.

Algunos de los más utilizados son useState, que ayuda con el manejo del estado, y useEffect, que permite realizar cambios ligados al ciclo de vida de un componente.

## ¿Por qué usar React?

Aunque podrían haber sido más, he resumido en una lista de 5 puntos clave que considero que son las que hacen a React tan popular.

### Curva de Aprendizaje

Es muy fácil empezar con React. La adopción de esta librería es muy amigable porque no tienes que aprender demasiadas cosas nuevas, basta con los conocimientos habituales básicos de HTML, CSS, y JavaScript.

### Flexibilidad

React es una librería y no un Framework. Esto quiere decir que está dedicada a una sola función, crear interfaces. Esta característica, junto con el gran ecosistema de librerías de [JavaScript](https://raulpacheco.dev/blog/posts/javascript-en-el-desarrollo-web) y a los diversos lenguajes de Backend le permite a los desarrolladores poder elegir con qué herramientas acompañarla y obtener un mayor grado de personalización en su proyecto.

### Rendimiento

El uso del Virtual DOM le permite a React tener un muy buen aprovechamiento de recursos, pues solo renderiza los nuevos cambios y no la interfaz entera.

### Aceptación en la industria

Además de Facebook, muchas otras grandes empresas usan React. Por ejemplo, Twitch, Netflix o Airbnb. Lo que demuestra su solidez como solución y explica la gran cantidad de demanda por desarrolladores que lo dominen.

### Trascendencia en otras áreas

React no solo se ha quedado en el Desarrollo Web. Su popularidad y características hicieron que se buscara su uso en otras áreas.

React Native es un Framework que lleva a React al Desarrollo Móvil y es una de las soluciones más utilizadas para crear aplicaciones móviles multiplataforma.

Por otra parte, no solo el Desarrollo Móvil ha sido invadido por React, otro ejemplo a destacar es React 360-VR, una implementación realizada por Facebook para sus dispositivos de Realidad Virtual.

## Conclusión

Como ya has visto usar React tiene muchas ventajas y si ya sabes las bases de JavaScript, puedes estar seguro de que React es una gran opción para continuar tu camino en el Desarrollo Frontend.

Si te ha gustado este artículo no olvides compartirlo y seguirme en mis redes sociales.

**Continúa tu aprendizaje con [JavaScript en el Desarrollo Web](https://raulpacheco.dev/blog/posts/javascript-en-el-desarrollo-web).**
