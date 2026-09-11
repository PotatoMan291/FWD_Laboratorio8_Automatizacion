# FWD_Laboratorio8_Automatizacion

Laboratorio 8 del curso de Programación Web / React.

El proyecto consiste en una aplicación desarrollada con **Vite + React** que implementa un proceso de automatización utilizando **n8n** como herramienta de workflow y **JSON Server** mediante un archivo `db.json` como base de datos local.

La automatización tiene como objetivo revisar periódicamente una lista de tareas y detectar aquellas que se encuentran pendientes y cuya fecha límite ya ha vencido.

## Descripción del proyecto

La aplicación permite visualizar tareas almacenadas en una base de datos local mediante `db.json`.

Cada tarea contiene información como:

- Título
- Descripción
- Fecha límite
- Estado

La aplicación se comunica con JSON Server para consultar la información de las tareas.

Posteriormente, mediante un workflow desarrollado en n8n, se implementará una automatización que revisará periódicamente las tareas pendientes.

Cuando se detecte una tarea cuya fecha límite ya haya pasado, el workflow actualizará automáticamente su estado a `vencida`.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- JSON Server
- n8n
- HTML5
- CSS3
- Git
- GitHub

## Estructura del proyecto

```text
FWD_Laboratorio8_Automatizacion/
│
├── db.json
├── index.html
├── package.json
│
└── src/
    │
    ├── components/
    │   ├── AutomationStatus.jsx
    │   ├── Navbar.jsx
    │   └── TaskCard.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Tasks.jsx
    │   └── Workflow.jsx
    │
    ├── routes/
    │   └── AppRoutes.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css
