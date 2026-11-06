/**
 * Archivo de configuración centralizada
 * Gestión de Catálogo de Ropa - 4to Semestre
 */

// Configuración de Firebase
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBWzz6D5-CCw1iFNY9Kj92gaYxdLsfcK3g",
  authDomain: "herencia-a1ca2.firebaseapp.com",
  projectId: "herencia-a1ca2",
  storageBucket: "herencia-a1ca2.firebasestorage.app",
  messagingSenderId: "885586235583",
  appId: "1:885586235583:web:e128fdccfd7a5d6922360a"
};

// Configuración del Chatbot (Claude API)
const CHATBOT_CONFIG = {
  apiKey: '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',
  model: 'claude-3-sonnet-20240229',
  maxTokens: 1024,
  systemPrompt: `Eres un asistente de IA para la tienda de ropa "Gestión de Catálogo de Ropa". Tu función es ayudar a los clientes exclusivamente con preguntas relacionadas con la tienda.

REGLAS ESTRICTAS:
1. Solo responde preguntas sobre: ropa, tallas, productos, estilos, combinaciones de prendas, envíos, devoluciones, pagos, políticas de la tienda.
2. Si alguien te pregunta algo que NO tiene relación con la tienda (ej: "hola", "¿cómo estás?", tiempo, política, noticias, etc.), responde EXACTAMENTE: "No puedo ayudarte con eso".
3. Sé conciso y directo en tus respuestas.
4. No hables de temas ajenos a la tienda de ropa.
5. No respondas saludos ni preguntas personales.
6. Mantén un tono profesional y útil para la tienda.

Información de la tienda:
- Nombre: Gestión de Catálogo de Ropa
- Productos: Ropa para hombre y mujer (buzos, camisetas)
- Estilo: Streetwear, oversize, denim amplio
- Tallas: Consultar tabla de medidas específica de cada prenda
- Envíos: Información disponible en la tienda
- Devoluciones: Política de cambios disponible en la tienda`
};

// Configuración de la aplicación
const APP_CONFIG = {
  nombreTienda: "Gestión de Catálogo de Ropa",
  moneda: "COP",
  simboloMoneda: "$",
  formatoMoneda: "es-CO",
  version: "1.0.0",
  modoDesarrollo: true
};

// Exportar configuraciones
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FIREBASE_CONFIG, CHATBOT_CONFIG, APP_CONFIG };
}
