# Categories Diagramation

Este elemento va a mostrar los niveles inferiores de navegación dentro de una lista de categorías que contienen imágenes.

### Versión Desktop
![Preview](../assets/readme-image__categories-diagramation-desktop.png)

### Versión Mobile
![Preview](../assets/readme-image__categories-diagramation-mobile.png)
## Configuration 

### Paso 1 - Clonar

Para empezar, [clonar](https://github.com/cristhian-fernandez/itgloberspartnercl-categories-diagramation) este repositorio para iniciar ocn la configuración básica. 
### Paso 2 - Editar 'manifest.json'

Una vez abierto el repositorio de manera local, ingresar al archivo `manifest.json` y allí es donde realizará modificaciones en los siguientes elementos: `vendor`, `name`, `version`, `title` y `description`. Como en el siguiente ejemplo:

```
{
  "vendor": "itgloberspartnercl",
  "name": "categories-diagramation",
  "version": "0.0.1",
  "title": "Categories Diagramation",
  "description": "Context of elements that render the lower levels of navigation of a list of categories with images"
}
```

### Paso 3 - Revisar las dependencias y builders necesarios

Una vez modificada esa sección del `manifest.json`, se debe rectificar que el repositorio contenga las siguientes dependencias y las categories necesarios:

```
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  },
  "dependencies": {
    "vtex.native-types": "0.x",
    "vtex.list-context": "0.x",
    "vtex.device-detector": "0.x",
    "vtex.css-handles": "0.x"
  }
```

### Paso 4 - Instalar node-modules

Se debe ubicar en la carpeta `react`, por medio de cd.. en la terminal local o desde la carpeta del proyecto, abriendo una terminal. Una vez allí, ingresar el comando: `yarn install` y se llevará adelante una instalación de las dependencias necesarias.

### Paso 5 - Ejecute un preview 

Finalmente, después de seguir los pasos anteriores, podremos ver los cambios que se han realizado, de manera local, en el entorno o workspace que se está usando. 
Para esto, debe ingresar, en su terminal, el comando: `vtex link`, donde si todo corre bien, verá el mensaje: `App linked successfully` y su componente custom estará en orden para usar. 
Si por el contrario, en su consola sale un error, lo que deberá hacer, será rectificar los pasos anteriores.

### Paso 6 - Usar componente custom en la página

Para agregar este componente custom, deberá ingresar en su proyecto, ir al archivo `manifest.json` y en `dependencies`, importar el: vendor, name y versión de este repositorio. Por ejemplo:

```
  "dependencies": {
     "itgloberspartnercl.categories-diagramation": "0.x"
  }
```
## Contributors
1. Cristhian Javier Fernández Cumbia