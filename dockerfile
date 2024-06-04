# Usa una imagen base oficial de Node.js
FROM node:22
 
# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app
 
# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./
 
# Instala las dependencias del proyecto
RUN npm install
 
# Si estás construyendo para producción, usa:
# RUN npm ci --only=production
 
# Copia el resto del código de la aplicación
COPY . .
 
# Expone el puerto en el que corre la aplicación
EXPOSE 7070
 
# Define el comando para correr la aplicación
CMD ["node", "app.js"]