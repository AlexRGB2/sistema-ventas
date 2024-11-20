FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto en el que escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]