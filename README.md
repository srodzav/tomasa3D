# tomasa3D

**tomasa3D** es un proyecto de visualización 3D creado con Angular y Three.js, que utiliza un modelo 3D de **Tomasa**, la gata del autor. Este proyecto demuestra cómo integrar y desplegar aplicaciones Angular con modelos 3D en GitHub Pages.

## Descripción del Proyecto

Este proyecto muestra cómo cargar y visualizar un modelo 3D utilizando Three.js en una aplicación Angular. El modelo utilizado en esta demostración es un `.gltf` de Tomasa, la gata del autor, lo que añade un toque personal al proyecto. La aplicación permite al usuario interactuar con el modelo, rotándolo en diferentes ejes.

## Características

- **Cargar y Renderizar Modelos 3D**: Utiliza Three.js para cargar y renderizar un modelo `.gltf` o `.glb` en la aplicación Angular.
- **Interactividad con el Mouse**: Permite rotar el modelo 3D utilizando el mouse mediante el uso de `OrbitControls`.
- **Optimización del Modelo**: El modelo de Tomasa ha sido optimizado para reducir los tiempos de carga.
- **Despliegue en GitHub Pages**: La aplicación está desplegada en GitHub Pages y accesible públicamente.

## Estructura del Proyecto

- **src/app**: Contiene los componentes principales de la aplicación.
  - **tomasa**: Componente que maneja la carga y renderizado del modelo 3D.
- **src/assets/models**: Contiene el modelo 3D de Tomasa junto con sus texturas y archivos relacionados.
- **src/environments**: Configuraciones de entorno para desarrollo y producción.
- **public**: (Si se utiliza) Contiene archivos estáticos adicionales.

## Tecnologías Utilizadas

- **Angular**: Framework de desarrollo frontend utilizado para construir la aplicación.
- **Three.js**: Biblioteca utilizada para manejar gráficos 3D en la web.
- **GLTFLoader**: Utilizado para cargar el modelo 3D en formato `.gltf` o `.glb`.
- **OrbitControls**: Permite la interacción con el modelo 3D utilizando el mouse.
- **GitHub Pages**: Plataforma utilizada para desplegar y hospedar la aplicación.

## Requisitos

Para ejecutar este proyecto localmente, necesitarás:

- Node.js y npm instalados.
- Angular CLI (`npm install -g @angular/cli`).

## Instalación

1. Clona el repositorio en tu máquina local:
```
   git clone https://github.com/srodzav/tomasa3D.git
```
2. Navega al directorio del proyecto:
```
   cd tomasa3D
```
3. Instala las dependencias:
```
npm install
```
4. Inicia la aplicación en modo desarrollo:
```
ng serve
```

Luego, abre tu navegador y ve a http://localhost:4200/.

# Créditos

Este proyecto fue desarrollado por Sebastián Rodríguez. El modelo 3D utilizado en la aplicación es de Tomasa, la gata del autor.

## License

[MIT](https://choosealicense.com/licenses/mit/)

