# Pagar Cervezas Simplificado

_Proyecto en Next.js v14 bajo Typescript, que contiene el desarrollo de un front para la gestión pagos de cervezas._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo, pruebas o despliegue en producción._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

1. [Docker](https://docs.docker.com/)

_Es importante tener instaladas las herramientas anteriormente mencionadas para iniciar los siguientes pasos._

## Instalación 🔧

_*** Preparando nuestras variables de entorno ***_

_Nos situamos en la raíz y hacemos una copia del archivo .env.example de esta manera tendriamos nuestro archivo de variables global_

```
 cp .env.example .env
```

_En nuestro nuevo archivo .env modificamos y adaptamos las variables de entorno de la App (Para fines de prueba de integración con la [Api-Pay-Beers-Simplified](https://github.com/JesusD2405/api-pay-beers-simplified) no hace falta adaptar ninguna variable de entorno basta con solo copiar)_

_Finalmente, en la raíz del proyecto ejecutamos_

```
 docker compose up --build
```

_De esta manera tendríamos nuestro contenedor levantado._

## Probando Rutas 🧪

_Por Definir..._

## Despliegue 📦

_Nos situamos en el directorio raiz y hacemos una copia del archivo docker-env.dist reemplazando la extensión del archivo por el nombre del ambiente a desplegar:_

1. dev (Desarrollo).
2. prod (Producción).

```
 cp docker-env.dist docker-env.ambiente
```

_En nuestro nuevo archivo docker-env.ambiente modificamos y adaptamos las variables de entorno del Docker_

_Finalmente, en la raíz del proyecto ejecutamos_

```
 docker compose --env-file=./docker-env.ambiente up --build
```

## Construido con 🛠️

_Herramientas utilizadas en el proyecto:_

- [Docker](https://docs.docker.com/compose/install/) - Es una tecnología de contenedorización de código abierto para crear y contener sus aplicaciones.
- [Next.js v15](https://nextjs.org/docs) - Utilizado por algunas de las empresas más grandes del mundo, Next.js le permite crear aplicaciones web de alta calidad con el poder de los componentes React.
- [Typescript](https://www.typescriptlang.org/docs/) - TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, lo que le brinda mejores herramientas a cualquier escala.
- [Talwind.css](https://tailwindcss.com/docs/) - Tailwind CSS funciona escaneando todos sus archivos HTML, componentes JavaScript y cualquier otra plantilla en busca de nombres de clase, generando los estilos correspondientes y luego escribiéndolos en un archivo CSS estático. Es rápido, flexible y confiable, con tiempo de ejecución cero.
- [Axios](https://axios-http.com/es/docs/intro) - Cliente HTTP simple basado en promesas para el navegador y node.js.

---

Desarrollado por [Jesús David Pérez](https://github.com/JesusD2405/) ❤️🚀
