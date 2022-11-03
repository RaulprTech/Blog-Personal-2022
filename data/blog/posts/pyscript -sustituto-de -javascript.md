---
title: 'PyScript, ¿El sustituto de JavaScript? 🤔'
date: '2022-05-08'
tags: ['Python', 'Js', 'Web-Development']
draft: false
summary: '
Por mucho tiempo, cualquier persona que deseara iniciarse en desarrollo web ya sea como Frontend o Backend requiere aprender los 3 lenguajes de siempre HTML para la estructura, CSS para los estilos y JavaScript como único lenguaje de programación.
'
layout: PostLayout
bibliography: references-data.bib
---

En la reciente PyCon US 2022 tuvimos la grata sorpresa de ver una implementación que permite utilizar Python directamente en el navegador. Por supuesto, no tardaron en aparecer las preguntas en los foros sobre si Python sería el reemplazo de JavaScript.

Así que en este artículo analizaremos esta nueva herramienta y su posible alcance.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l4jv4p257uk131jfrjpy.png)

## Desarrollo Web

Por mucho tiempo, cualquier persona que deseara iniciarse en desarrollo web ya sea como Frontend o Backend requiere aprender los 3 lenguajes de siempre HTML para la estructura, CSS para los estilos y JavaScript como único lenguaje de programación.

JavaScript era el único lenguaje de programación que se podía usar directamente en el navegador (lado del cliente). Esto causo que muchas personas lo aprendieran y su ecosistema creciera significativamente, pero a la vez se volvía una barrera de entrada para el desarrollo web.

Y si, frameworks como Django o Flask permitían usar Python para desarrollar sitios web, pero esto era desde el servidor.

Una forma común de aprovechar al lenguaje que se ejecuta en el navegador es a través de las famosas SPA (Single Page Application), las cuales cargan todo lo necesario para su visualización desde el principio, lo que reduce los tiempos de reacción ante las interacciones del usuario.

Las SPA solo podían hacerse con JavaScript hasta ahora.

## ¿Qué es PyScript?

[PyScript](https://www.anaconda.com/blog/pyscript-python-in-the-browser) es un framework que permite utilizar código Python en el navegador, en conjunto con las tecnologías habituales HTML, CSS y JavaScript.

En otras palabras es un html vitaminado con Python, con características como:

- Poder usar el ecosistema de Python en el navegador (numpy, pandas, scikit-learn, etc)
- Comunicación bidireccional entre Python y JavaScript
- Gestión de entornos para incluir paquetes y archivos que se ejecuten en la pagina
- Componentes de interfaz de usuario listos para su integración en nuestro HTML
- Flexibilidad para crear y compartir nuevos componentes conectables y extensibles

## ¿Cómo funciona?

PyScript esta construido por sobre otras conocidas tecnologías:

**Pyodide** ya era una forma de llevar a Python al navegador en donde el lenguaje es incrustado mediante el uso de herramientas como Emscripten

**Emscripten** compila todo el lenguaje hacia WebAssembly que es finalmente permite la ejecución de estos binarios a través de la web.

**WebAssembly** fue el primer acercamiento que tuvimos a utilizar otros lenguajes en el navegador. Es un formato de código binario que puede ser usado en la web y es capaz de compilar código en diversos lenguajes de programación para poder ser aprovechados desde JavaScript.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rqzfntk4rf41zp37h2tf.png)

Los creadores estaban especialmente interesados en crear una solución que reduzca la curva de aprendizaje del desarrollo web y así hacer la programación mas divertida y sencilla.

## Python se abre camino

No había una forma sencilla para crear interfaces de usuario con Python para empaquetar e implementar aplicaciones fácilmente. Pero con PyScript Python puede aprovechar las convenciones ya existentes de HTML y CSS para poder crear, implementar, distribuir y desplegar mejores interfaces.

Me llena de emoción ver como esté potente y popular lenguaje ahora suma a su lista una nueva forma de uso. Una que sin duda animara a los desarrolladores y empresas de software a aventurarse en la construcción de implementaciones mas potentes en navegadores.

El horizonte de esta tecnología es muy amplio, pero es solo el inicio. Seguramente viene una ola de implementaciones con otros lenguajes, mejoras sustanciales al software web existente y nuevas aplicaciones que sacaran provecho de estas nuevas tecnologías.

PyScript no es el reemplazo de JavaScript e incluso por ahora está algo limitado, pero es una nueva forma para que los fans del lenguaje puedan incursionar en el desarrollo web.

Mira los [Ejemplos](https://pyscript.net/examples/) y comenta ¿Qué te ha parecido PyScript?
