# Gestión de Catálogo de Ropa

Proyecto desarrollado para la clase de Arquitectura de Software - 4to Semestre

## 📋 Descripción del Proyecto

Gestión de Catálogo de Ropa es una aplicación web que presenta un catálogo visual de ropa con estilo streetwear. El proyecto incluye un sistema de autenticación de usuarios, un chatbot con inteligencia artificial para atención al cliente, y funcionalidades de carrito de compras y checkout.

## 🎯 Alcance Funcional

### Funcionalidades Implementadas (Catálogo Demostrativo)
- ✅ Visualización de catálogo de ropa para hombre y mujer
- ✅ Navegación entre colecciones (Hombre, Mujer)
- ✅ Ficha de producto con fotos, descripción y tallas
- ✅ Filtros por categoría (Buzos, Camisetas, Crop)
- ✅ Lookbook interactivo (carrusel de imágenes)
- ✅ Autenticación de usuarios con Google (Firebase Auth)
- ✅ Carrito de compras funcional (agregar/eliminar productos)
- ✅ Modal de checkout con formulario de tarjeta
- ✅ Chatbot con IA para atención al cliente (Claude API)
- ✅ Política de privacidad

### Funcionalidades Simuladas (Prototipo)
- ⚠️ Procesamiento de pagos (el formulario es visual, no procesa transacciones reales)
- ⚠️ Gestión de pedidos (no hay backend de pedidos)
- ⚠️ Envíos físicos (solo información descriptiva)
- ⚠️ Sistema de inventario en tiempo real

> **Nota:** Este es un prototipo funcional para fines académicos. No procesa pagos reales ni gestiona envíos físicos.

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos

```
Herencia ARQUI/
├── index.html              # Página principal con lookbook
├── hombre.html             # Catálogo de ropa para hombre
├── mujer.html              # Catálogo de ropa para mujer
├── privacidad.html         # Política de privacidad
├── css/
│   └── estilos.css         # Estilos globales del proyecto
├── js/
│   ├── config.js           # Configuración centralizada (FIREBASE_CONFIG, CHATBOT_CONFIG, APP_CONFIG)
│   ├── utils.js            # Funciones reutilizables (formatearPrecio, localStorage, validaciones)
│   ├── app.js              # Lógica principal de la aplicación
│   ├── firebase.js         # Módulo de autenticación Firebase
│   ├── datos.js            # Catálogo unificado de productos
│   ├── datos/
│   │   ├── datosHombre.js  # Productos específicos de hombre
│   │   └── datosMujer.js   # Productos específicos de mujer
│   └── chatbot.js          # Chatbot con IA (Claude API)
├── img/                    # Imágenes de iconos y logos
├── lookbook/               # Fotos del lookbook
└── svg/                    # Iconos SVG
```

### Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Autenticación:** Firebase Authentication (Google Sign-In)
- **IA Chatbot:** Anthropic Claude API
- **Base de Datos (Futura):** Supabase (configurado pero no implementado)
- **Hosting:** Desarrollo local (puede desplegarse en GitHub Pages, Netlify, Vercel)

## 🚀 Instrucciones de Ejecución

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor local (opcional pero recomendado)

### Opción 1: Abrir directamente
1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. Listo ✅

### Opción 2: Servidor local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (requiere http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🔧 Configuración de Servicios Externos

### Firebase Authentication
Configurado en `js/firebase.js`:
- Proyecto: `herencia-a1ca2`
- Método de autenticación: Google Sign-In
- Estado: ✅ Funcional

### Anthropic Claude API (Chatbot)
Configurado en `js/chatbot.js`:
- Modelo: Claude 3 Sonnet
- Sistema de respaldo local activado
- Estado: ✅ Funcional (con sistema de respaldo por si falla la API)

### Supabase
Configurado en `js/supabase.js`:
- URL: `https://ozdhmcdnaipnvynakhbd.supabase.co`
- Estado: ⚠️ Configurado pero no implementado (código muerto)

## 🧪 Pruebas Realizadas

### Funcionalidades Probadas
- ✅ Navegación entre páginas
- ✅ Filtros de categorías
- ✅ Apertura de ficha de producto
- ✅ Autenticación con Google
- ✅ Agregar productos al carrito
- ✅ Eliminar productos del carrito
- ✅ Modal de checkout
- ✅ Chatbot con respuestas de productos
- ✅ Chatbot detecta saludos, agradecimientos y despedidas
- ✅ Chatbot responde sobre envíos, devoluciones, pagos

### Limitaciones Conocidas
- ⚠️ La API de Claude puede fallar ocasionalmente (sistema de respaldo activado)
- ⚠️ No hay validación real de tarjetas de crédito
- ⚠️ No hay persistencia de datos local (se pierde al recargar)
- ⚠️ Supabase no se utiliza (puede eliminarse)

## 📊 Evidencias de Funcionamiento

### Screenshot de Funcionalidades
(Los estudiantes deberían agregar capturas de pantalla aquí)

### Test de Chatbot
Preguntas probadas:
- "hola" → Respuesta cordial de bienvenida
- "que articulos tienes para hombre" → Lista de productos de hombre
- "que articulos tienes para mujer" → Lista de productos de mujer
- "como funciona el proceso de compra" → Explicación del proceso
- "puedo devolver mi producto?" → Información sobre devoluciones
- "gracias" → Respuesta de agradecimiento
- "chao" → Respuesta de despedida

## 🔄 Identidad de Marca

### Consistencia Actual
- Nombre: Gestión de Catálogo de Ropa
- Estilo: Streetwear, oversize, denim amplio
- Colores: Negro, crema, blanco
- Tipografía: Bebas Neue (títulos), Poppins (texto)

### Recomendaciones de Mejora
- [ ] Estandarizar nomenclatura de archivos
- [ ] Agregar favicon en todas las páginas
- [ ] Unificar mensajes de la marca en todo el sitio
- [ ] Revisar consistencia en textos de productos

## 🛠️ Modularización del Código

### Estado Actual
- ✅ Archivos separados por funcionalidad (app.js, firebase.js, chatbot.js)
- ✅ Datos de productos en archivos separados
- ⚠️ Falta separación de lógica de UI y lógica de negocio
- ⚠️ Falta módulo de utilidades reutilizables

### Mejoras Pendientes
- [ ] Crear módulo `utils.js` para funciones reutilizables
- [ ] Separar lógica de autenticación en módulo propio
- [ ] Crear módulo `cart.js` para lógica del carrito
- [ ] Implementar patrón MVC para mejor organización

## 📝 Notas para el Profesor

Este proyecto fue desarrollado como prototipo educativo. Las funcionalidades de pagos y envíos son simulaciones visuales para demostrar el flujo de usuario, pero no procesan transacciones reales.

**Aspectos por fortalecer (según retroalimentación):**
- ✅ Alcance funcional documentado
- ✅ Diferenciación entre catálogo demostrativo y funcionalidades reales
- ⚠️ Consistencia de identidad de marca (en proceso)
- ⚠️ Modularización de código (en proceso)
- ✅ Documentación de configuración de servicios externos
- ✅ Instrucciones de ejecución
- ✅ Evidencias de funcionamiento

## 👥 Autores

Estudiante de 4to Semestre - Ingeniería de Software
Universidad [Nombre de la Universidad]

## 📄 Licencia

Proyecto educativo - Uso académico
