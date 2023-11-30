---
title: "Full markdown"
description: "Archivo Markdown de prueba con la mayoría de componentes Markdown"
date: 2023-10-11
draft: false
collection: Blog
published: false
---

# Titulos

```md
# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

Alternativamente, para H1 y H2, hay un estilo subrayado:

# Alt-H1

## Alt-H2
```

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

Alternativamente, para H1 y H2, hay un estilo subrayado:

# Alt-H1

## Alt-H2

---

# Énfasis

```md
Énfasis, o italica, con _1 asterisco_ o _1 underscore_.

Negrita, with **2 asteriscos** or **2 underscores**.

Énfasis combinada con **asteriscos y _underscores_**.

Tachado usa doble virgulilla. ~~Esto está tachado.~~

**Negrita**

_Italica_

~~Tachado~~
```

Énfasis, o italica, con _1 asterisco_ o _1 underscore_.

Negrita, with **2 asteriscos** or **2 underscores**.

Énfasis combinada con **asteriscos y _underscores_**.

Tachado usa doble virgulilla. ~~Esto está tachado.~~

**Negrita**

_Italica_

~~Tachado~~

---

# Lists

```md
1. Primer item de la lista
2. Otro item
3. Los números no importan, solo que sea un número
   1. Sub lista ordenada
4. Otro item más.
   - Es posible tener párrafos indentados con las listas

- Las listas no ordenadas pueden hacerse con guiones

* O arteriscos

- O con el símbolo más (+)
```

1. Primer item de la lista
2. Otro item
3. Los números no importan, solo que sea un número
   1. Sub lista ordenada
4. Otro item más.
   - Es posible tener párrafos indentados con las listas

- Las listas no ordenadas pueden hacerse con guiones

* O arteriscos

- O con el símbolo más (+)

---

# Lista de tareas

```md
- [x] Terminar cambios
- [ ] Subir cambios a GitHub
- [ ] Abrir una pull request

Personalmente prefiero utilizar emojis y crear una lista de tareas personalizada:

- ⬜ Pendiente
- 🟦 En proceso
- ✅ Completada
- ❌ Rechazada
```

- [x] Terminar cambios
- [ ] Subir cambios a GitHub
- [ ] Abrir una pull request

Personalmente prefiero utilizar emojis y crear una lista de tareas personalizada:

- ⬜ Pendiente
- 🟦 En proceso
- ✅ Completada
- ❌ Rechazada

---

# Ignorar formato Markdown

Podemos ignorar el formato del Markdown utilizando \ antes del símbolo de algún elemento Markdown.

```md
Let's rename \*our-new-project\* to \*our-old-project\*.
```

Let's rename \*our-new-project\* to \*our-old-project\*.

En este ejemplo debería haberse aplicado una letra _itálica_

---

# Links

```md
[Link inline](https://www.google.com)

[Link inline con título](https://www.google.com "Google's Homepage")

[Referencia a un link][Texto específico de la referencia]

[Link de refencia relativa a un archivo del proyecto](../todo)

[Podemos usar números para hacer referencia a un link][1]

O también podemos hacer una referencia simplemente con corchetes: [reddit].

Las URLs o las que estpen entre mayor y menor (< >) se transforman automáticamente en links:
http://www.example.com o <http://www.example.com>.

Las referencias no serán renderizadas:

[Texto específico de la referencia]: https://www.mozilla.org
[1]: http://slashdot.org
[reddit]: http://www.reddit.com
```

[Link inline](https://www.google.com)

[Link inline con título](https://www.google.com "Google's Homepage")

[Referencia a un link][Texto específico de la referencia]

[Link de refencia relativa a un archivo del proyecto](../todo)

[Podemos usar números para hacer referencia a un link][1]

O también podemos hacer una referencia simplemente con corchetes: [reddit].

Las URLs o las que estpen entre mayor y menor (< >) se transforman automáticamente en links:
http://www.example.com o <http://www.example.com>.

Las referencias no serán renderizadas:

[Texto específico de la referencia]: https://www.mozilla.org
[1]: http://slashdot.org
[reddit]: http://www.reddit.com

---

# Images

```md
Imagen de ejemplo:
![alt text](https://picsum.photos/id/237/300/200 "Título de la imágen")
```

Imagen de ejemplo:
![alt text](https://picsum.photos/id/237/300/200 "Título de la imágen")

---

# [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

```md
Footnote 1 link[^first].

Footnote 2 link[^second].

Footnote duplicada[^second].

[^first]: Footnote **pueden tener markdown**
[^second]: Footnote texto.
```

Footnote 1 link[^first].

Footnote 2 link[^second].

Footnote duplicada[^second].

[^first]: Footnote **pueden tener markdown**
[^second]: Footnote texto.

---

# Code and Syntax Highlighting

````md
Los códigos inline se hacen con comillas invertidas simples y los bloques de código con comillas invertidas triples.

Esto `es un código inline`

```md
Esto un blóque de código
```
````

Los códigos inline se hacen con comillas invertidas simples y los bloques de código con comillas invertidas triples.

Esto `es un código inline`

```md
Esto un blóque de código
```

---

# Tables

```md
Los dos puntos (:) pueden ser utilizados para alinear columnas.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

Debe haber al menos 3 guiones separando las celdas del encabezado.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |
```

Los dos puntos (:) pueden ser utilizados para alinear columnas.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

Debe haber al menos 3 guiones separando las celdas del encabezado.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

---

# Blockquotes (Frases o bloques de cita)

```md
> Los bloques de cita son muy útiles.
> Esta linea es parte de la misma frase.

> Las citas también pueden anidarse.
>
> > Esta es una cita dentro de otra.
```

> Los bloques de cita son muy útiles.
> Esta linea es parte de la misma frase.

> Las citas también pueden anidarse.
>
> > Esta es una cita dentro de otra.

---

# Inline HTML

Es posible embeber html directamente en markdown.

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

# Separadores o lineas horizontales

```md
Tres o más guiones:

---
```

Tres o más guiones:

---
