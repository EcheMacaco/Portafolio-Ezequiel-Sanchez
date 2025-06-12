#!/bin/bash
# Script de instalación para entorno Node.js/React
# Uso: bash setup.sh

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "Node.js no está instalado. Por favor, instálalo antes de continuar."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "npm no está instalado. Por favor, instálalo antes de continuar."
    exit 1
fi

# Instalar npm-check-updates globalmente si no está instalado
if ! npm list -g npm-check-updates &> /dev/null
then
    echo "Instalando npm-check-updates globalmente..."
    npm install -g npm-check-updates
fi

# Verificar si hay dependencias desactualizadas y preguntar si se actualizan
ncu -u --jsonUpgraded > .ncu-updates.json
if [ -s .ncu-updates.json ]; then
    echo "Se encontraron dependencias desactualizadas:"
    cat .ncu-updates.json
    read -p "¿Deseas actualizar package.json con estas versiones? (s/n): " actualizar
    if [ "$actualizar" = "s" ]; then
        ncu -u
        echo "package.json actualizado. Instalando nuevas dependencias..."
        npm install
    else
        echo "No se actualizaron las dependencias. Instalando las actuales..."
        npm install
    fi
    rm .ncu-updates.json
else
    echo "Todas las dependencias están actualizadas."
    # Instalar dependencias solo si node_modules no existe
    if [ ! -d "node_modules" ]; then
        echo "Instalando dependencias de Node.js..."
        npm install
    else
        echo "Las dependencias ya están instaladas."
    fi
fi

# Mensaje final
if [ $? -eq 0 ]; then
    echo "Listo. Usa 'npm start' para iniciar el proyecto."
else
    echo "Hubo un error durante la instalación. Revisa los mensajes anteriores."
fi
