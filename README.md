# 🍵 Zenqa Life - Tienda de Matcha Premium

Tienda de ecommerce de té matcha con diseño disruptivo y moderno.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para desplegar:

1. **Crea un nuevo repositorio en GitHub** (si aún no lo has hecho)

2. **Sube el código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Zenqa Life"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
   git push -u origin main
   ```

3. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Haz clic en **Settings** (Configuración)
   - En el menú lateral, busca **Pages**
   - En **Source**, selecciona **GitHub Actions**
   - El workflow se ejecutará automáticamente en cada push a la rama `main`

4. **Accede a tu web:**
   - La URL será: `https://TU_USUARIO.github.io/NOMBRE_REPO/`
   - El primer despliegue tarda 2-3 minutos

### Características:

- ✅ Router configurado con HashRouter para GitHub Pages
- ✅ Workflow de GitHub Actions para despliegue automático
- ✅ Archivo 404.html para manejo de rutas
- ✅ Diseño responsive
- ✅ Optimizado para producción

## 🛠️ Desarrollo local

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 🎨 Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM

---

Hecho con 🍵 por Zenqa Life
