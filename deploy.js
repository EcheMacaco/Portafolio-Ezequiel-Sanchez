const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

// Ruta al directorio de construcción
const buildPath = path.join(__dirname, 'build');

// Asegúrate de que el directorio de construcción existe
if (!fs.existsSync(buildPath)) {
  console.error('El directorio de construcción no existe. Ejecuta "npm run build" primero.');
  process.exit(1);
}

// Comando para desplegar usando gh-pages
const deployCommand = 'npx gh-pages -d build';

try {
  // Ejecutar el comando de despliegue
  execSync(deployCommand, { stdio: 'inherit' });
  console.log('Despliegue exitoso.');
} catch (error) {
  console.error('Error durante el despliegue:', error.message);
  process.exit(1);
}