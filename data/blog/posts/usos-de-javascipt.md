---
title: 'El modelo que transformo a la Inteligencia Artificial'
date: '2022-08-24'
tags: ['IA', 'Transformers', 'NLP']
draft: true
summary: 'Las redes neuronales recurrentes (RNN) fueron por mucho tiempo la red mas usada en el modelado de secuencias y problemas de transducción. Mientras mas esfuerzos se realizaban para empujar los límites de estos modelos, mas evidentes se volvían los problemas que implicaban su uso.
'
layout: PostLayout
---

## Introducción

Las redes neuronales recurrentes (RNN) fueron por mucho tiempo la red mas usada en el modelado de secuencias y problemas de transducción. Mientras mas esfuerzos se realizaban para empujar los límites de estos modelos, mas evidentes se volvían los problemas que implicaban su uso. Fue entonces cuando la propuesta de una nueva arquitectura, los Transformers trajeron consigo cambios significativos que expandieron los limites de la Inteligencia Artificial.

## Redes Neuronales Recurrentes

Los modelos recurrentes toman en cuenta el cálculo a lo largo de las posiciones de los símbolos de la entrada y la salida. Es decir, el valor de cada símbolo ingresado afecta al siguiente y así sucesivamente.

La naturaleza de este tipo de estructura impide la paralelización de su entrenamiento, lo que se vuelve crítico en longitudes de secuencia más largas, ya que las restricciones de memoria limitan el procesamiento.

## Mecanismos de Atención
