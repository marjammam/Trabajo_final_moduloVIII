# CV Personal con Docker Compose

Aplicación web de CV con React + Nginx (frontend), Node.js (backend) y MySQL 8.0.

## Imágenes en Docker Hub
- jamira2703/jamira-frontend:v1
- jamira2703/jamira-backend:v1

## Requisitos
Docker Desktop instalado y en ejecución. Los puertos 3000, 4000 y 3306 deben estar libres.

## Ejecución
```
git clone https://github.com/marjammam/Trabajo_final_moduloVIII.git
cd NOMBRE-DEL-REPO
docker compose up -d
```

Abrir http://localhost:3000

## Detener
```
docker compose down
```