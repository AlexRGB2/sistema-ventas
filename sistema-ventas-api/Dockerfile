FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Instalar Prisma CLI
RUN npm install prisma --save-dev

# Copiar el código fuente
COPY . .

# Generar el cliente de Prisma
RUN npx prisma generate

# Exponer el puerto en el que escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]