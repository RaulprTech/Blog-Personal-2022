---
title: 'La Inteligencia Artificial 🧠 solo necesitaba atención 👀'
date: '2022-10-17'
tags: ['AI', 'Natural Language Processing']
draft: false
summary: '
Las redes neuronales recurrentes (RNN) fueron por mucho tiempo la red mas usada en el modelado de secuencias y problemas de transducción. Mientras mas esfuerzos se realizaban para empujar los límites de estos modelos, mas evidentes se volvían los problemas que implicaban su uso.
'
layout: PostLayout
bibliography: references-data.bib
---

## Introducción

Las redes neuronales recurrentes (RNN) fueron por mucho tiempo la red mas usada en el modelado de secuencias y problemas de transducción. Mientras mas esfuerzos se realizaban para empujar los límites de estos modelos, mas evidentes se volvían los problemas que implicaban su uso. Fue entonces cuando la propuesta de una nueva arquitectura, los Transformers trajeron consigo cambios significativos que expandieron los limites de la Inteligencia Artificial.

## Redes Neuronales Recurrentes

Los modelos recurrentes toman en cuenta el cálculo a lo largo de las posiciones de los símbolos de la entrada y la salida. Es decir, el valor de cada símbolo ingresado afecta al siguiente y así sucesivamente.

La naturaleza de este tipo de estructura impide la paralelización de su entrenamiento, lo que se vuelve crítico en longitudes de secuencia más largas, ya que las restricciones de memoria limitan el procesamiento.

## Mecanismos de Atención

Ante los problemas de las RNN, se propusieron diversas alternativas de solución, entre las cuales se encontraban novedosas arquitecturas y el uso de ciertas funciones de activación. Sin embargo, dichas soluciones solo reducían los problemas pero no lograban dar una solución completamente satisfactoria.

Los mecanismos de atención son operaciones matemáticas que reciben como entrada un conjunto de vectores y les agregan un valor que cuantifica la relación que existe entre cada uno de ellos. Su surgimiento significo un gran cambio para el modelado de secuencias, hasta el punto de terminar haciendo prescindible el uso de RNN's en el modelado de secuencias.

## El Transformer

Propuesto en 2017 en el icónico documento **Atenttion is all you need**, el Transformer[@Vaswani-2017] es una arquitectura de red simple basada únicamente en mecanismos de atención, prescindiendo por completo de la recurrencia y las circunvoluciones.

La principal ventaja de esta nueva arquitectura es que la información no ingresa un símbolo a la vez como en las RNN, si no que ingresan varios al mismo tiempo. Su forma de ingresar los datos permite una gran capacidad de paralelizar su entrenamiento.

Esta arquitectura termino por volverse el nuevo estándar para aplicaciones de modelado de secuencias, poco a poco incorporándose en otros campos, por ejemplo en la visión con los Vision Transformer [@Dosovitskiy-2020] y Swin Transformer [@Liu-2021].

En años recientes, han surgido grandes modelos de Inteligencia Artificial que aprovechan las ventajas de esta arquitectura con sorprendentes aplicaciones, tales como GPT3 que convierte frases en artículos completos, Dalle-2 que crea imágenes al recibir solo una breve descripción o el nuevo Autopilot de Tesla.

## Conclusión

A solo 5 años de su primera aparición, las variaciones del [Transformer](https://raulpacheco.dev/tags/transformers) ya dominan en diferentes campos de la Inteligencia Artificial por las ventajas que ofrece. Lo mas interesante de esto, es que una sola arquitectura base esta siendo estudiada por múltiples equipos de investigación en diversos campos de aplicación.

## Referencias
