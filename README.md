# tomasa3D

**tomasa3D** is a 3D visualization project built with Angular and Three.js, featuring a 3D model of **Tomasa**, the author's cat. This project showcases how to integrate and deploy Angular applications with 3D models using GitHub Pages.

## Project Overview

This application demonstrates how to load and render a 3D model using Three.js in an Angular project. The showcased ```.gltf``` model represents Tomasa, adding a personal touch to the project. Users can interact with the model by rotating it along different axes.

## Features

- **3D Model Loading and Rendering**: Uses Three.js to load and render ```.gltf``` or ```.glb``` models.
- **Mouse / Touch Interaction**: Rotate the 3D model using ```OrbitControls```.
- **Optimized Model**: The Tomasa model is optimized for fast loading.
- **GitHub Pages Deployment**:  Easily accessible via GitHub Pages.

## Project Structure

- **src/app**: Main components of the Angular application.
  - **tomasa**: Component responsible for loading and rendering the 3D model.
- **src/assets/models**: Directory for the 3D model and its related files (textures, etc.).
- **src/environments**: nvironment configurations for development and production.
- **public**: (Optional) Additional static assets.

## Technologies Used

- **Angular**: Frontend framework used for building the application.
- **Three.js**: JavaScript library for 3D rendering and animation.
- **GLTFLoader**: For loading ```.gltf``` and ```.glb``` 3D models.
- **OrbitControls**: Enables mouse interaction with the 3D model.
- **GitHub Pages**: Hosting platform for the application.

## Requirements

To run the project locally, ensure you have:

   - Node.js and npm installed.
   - Angular CLI ```(npm install -g @angular/cli)```.

## Installation

1. Clone the repository:
```
git clone https://github.com/srodzav/tomasa3D.git
```

2. Navigate to the project directory:
```
cd tomasa3D
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
ng serve
```

Open your browser at http://localhost:4200/.

## Author

**Sebastián Rodríguez**
- [LinkedIn](https://www.linkedin.com/in/sebastian-rodriguez-zavala/)
- [Web](https://sebastianrdz.com)
- [Email](mailto:contact@sebastianrdz.com)

---

## License

This project is for personal use and is not licensed for commercial distribution.
