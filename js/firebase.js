/**
 * Módulo de Autenticación con Firebase
 * Gestión de Catálogo de Ropa - 4to Semestre
 */

// Cargar configuración
if (typeof FIREBASE_CONFIG !== 'undefined') {
  window.firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
  window.firebaseAuth = firebase.auth();
  console.log('Firebase inicializado correctamente');
} else {
  console.error('Error: FIREBASE_CONFIG no está definido. Asegúrate de cargar config.js antes de firebase.js');
}
