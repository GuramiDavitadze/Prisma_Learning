# 📝 Todo API

A clean, production-ready REST API for managing todos — built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, **Prisma**, and **Docker**.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Documentation:** Swagger UI
- **Containerization:** Docker & Docker Compose

---

## ✨ Features

- ✅ Full CRUD for todos
- ✅ Unique todo name validation
- ✅ API Key authentication
- ✅ Swagger UI documentation
- ✅ Dockerized with PostgreSQL
- ✅ Hot reload in development

---

## 📁 Project Structure

```
├── config/
│   ├── prisma.ts         # Prisma client instance
│   └── swagger.ts        # Swagger configuration
├── controllers/
│   └── todosController.ts
├── middlewares/
│   └── todosMiddlewares.ts
├── models/
│   └── todoModel.ts
├── routes/
│   └── todoRoutes.ts
├── prisma/
│   └── schema.prisma
├── swagger.yml
├── Dockerfile
├── docker-compose.yml
├── index.ts
└── .env
```

---

## ⚙️ Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed
- [Docker Compose](https://docs.docker.com/compose/) installed

### 1. Clone the repository

```bash
git clone https://github.com/GuramiDavitadze/Prisma_Learning_With_Todo.git
cd Prisma_Learning_With_Todo
```

### 2. Create `.env` file

```env
DATABASE_URL=postgresql://postgres:postgres@db:5432/todo_database
API_KEY=your-secret-key-here
```

### 3. Start with Docker

```bash
docker compose up --build
```

### 4. Run database migrations

```bash
docker compose exec app npx prisma migrate deploy
```

### 5. Open Swagger UI

```
http://localhost:3008/api-docs
```

---

## 🔐 Authentication

All endpoints require an API Key passed in the request header:

```
x-api-key: your-secret-key-here
```

In Swagger UI, click the **Authorize 🔓** button and enter your API key.

---

## 📡 API Endpoints

| Method  | Endpoint | Description       |
|---------|----------|-------------------|
| `GET`   |`/api`    | Get all todos     |
| `GET`   |`/api/:id`| Get todo by ID    |
| `POST`  |`/api`    | Create a new todo |
| `PUT`   |`/api/:id`| Update a todo     |
| `DELETE`|`/api/:id`| Delete a todo     |

---

## Request & Response Examples

### Create a Todo

**Request:**
```json
POST /api
{
  "name": "Learn Docker",
  "description": "Learn how to containerize Node.js apps"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Learn Docker",
  "description": "Learn how to containerize Node.js apps",
}
```

### Error Responses

| Status | Meaning |
|--------|---------|
| `401` | Unauthorized - Invalid or missing API key |
| `404` | Todo not found |
| `409` | Todo name already exists |
| `500` | Internal server error |

---

## 🐳 Docker Commands

```bash
# Start containers
docker compose up

# Start and rebuild
docker compose up --build

# Stop containers
docker compose down

# Run migrations
docker compose exec app npx prisma migrate deploy

# View logs
docker compose logs
```

---

## 👤 Author

**Gurami Davitadze**
- GitHub: [@GuramiDavitadze](https://github.com/GuramiDavitadze)