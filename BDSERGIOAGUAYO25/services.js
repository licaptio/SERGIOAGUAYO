// services.js (modo clásico - funciona en GitHub Pages sin módulos)

// =========================
// 🔥 FIREBASE AUTH (compat)
// =========================
const firebaseConfig = {
  apiKey: "AIzaSyCK5nb6u2CGRJ8AB1aPlRn54b97bdeAFeM",
  authDomain: "inventariopv-643f1.firebaseapp.com",
  projectId: "inventariopv-643f1",
  storageBucket: "inventariopv-643f1.firebasestorage.app",
  messagingSenderId: "96242533231",
  appId: "1:96242533231:web:aae75a18fbaf9840529e9a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// auth global
window.auth = firebase.auth();

// =========================
// 🧠 SUPABASE (UMD global)
// =========================
// NOTA: este archivo asume que YA cargaste antes:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// Eso crea window.supabase con createClient()

window.sb = window.supabase.createClient(
  "https://cvpbtjlupswbyxenugpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cGJ0amx1cHN3Ynl4ZW51Z3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MDIxOTQsImV4cCI6MjA2MzI3ODE5NH0.iiJsYM3TtaGPdeCtPcEXwAz3LfFc1uJGECEvOErvrqY"
);
