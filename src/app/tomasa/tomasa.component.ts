import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tomasa',
  standalone: true,
  imports: [],
  templateUrl: './tomasa.component.html',
  styleUrls: ['./tomasa.component.css'] // Corrección: debe ser 'styleUrls' en plural
})
export class TomasaComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model!: THREE.Group;
  private controls!: OrbitControls;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScene();
      this.animate();
      window.addEventListener('resize', this.onWindowResize.bind(this));
    }
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private initScene(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Establecer el fondo de la escena a blanco
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xE3DAC9);
    // this.scene.background = new THREE.Color(0xFFFFFF); // Fondo blanco
     // Fondo blanco

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    this.camera.position.z = 1300; // Ajusta la distancia de la cámara

    // Añadir luz a la escena
    const ambientLight = new THREE.AmbientLight(0xffffff, 10); // Luz ambiental blanca
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);

    // Cargar el modelo
    const loader = new GLTFLoader();
    loader.load(
      'assets/models/Subject.gltf', 
      (gltf) => {
        this.model = gltf.scene;

        // Asegúrate de que el modelo esté en el centro
        this.model.position.set(0, -350, 0); // Centrar el modelo en la escena
        this.model.rotation.set(0, 100, 0);
        this.scene.add(this.model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Habilita la inercia en la rotación
    this.controls.dampingFactor = 0.05; // Ajusta la suavidad de la inercia
    this.controls.enableZoom = false; // Deshabilita el zoom si solo quieres permitir la rotación
    this.controls.enablePan = false; // Deshabilita el paneo
    // this.controls.maxPolarAngle = Math.PI / 2; // Limita el ángulo de rotación vertical
    // this.controls.minPolarAngle = Math.PI / 2;

  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    this.controls.update();
    if (this.model) {
      // this.model.rotation.x += 0.01; // Rotación simple del modelo
      this.model.rotation.y += 0.01; // Rotación simple del modelo
    }

    this.renderer.render(this.scene, this.camera);
  }
}
