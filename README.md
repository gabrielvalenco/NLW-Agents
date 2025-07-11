# NLW Agents

This project was developed during Rocketseat's Next Level Week (NLW) event. NLW Agents is a real-time communication platform that enables users to create rooms and interact with other participants.

## � Tech Stack

### Backend
- **Fastify**: High-performance web framework for Node.js
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **PostgreSQL** with **pgvector**: Database with vector extension support
- **Zod**: TypeScript-first schema validation
- **Docker**: Containerization for development environment
- **TypeScript**: Type safety and developer experience

### Frontend
- **React 19**: Modern UI library with latest features
- **Vite**: Next-generation frontend tooling
- **TanStack Query** (React Query): Data fetching and state management
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety throughout the application

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v20+)
- Docker and Docker Compose
- Git

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following content:
   ```
   DATABASE_URL=postgres://docker:docker@localhost:5432/agents
   ```

4. Start the database with Docker:
   ```bash
   docker-compose up -d
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Architecture

- **Server**: RESTful API built with Fastify and TypeScript
  - Structured with clear separation between routes, controllers, and data models
  - Uses Drizzle ORM for type-safe database operations
  - Environment configuration with dotenv

- **Web**: React application built with Vite and TypeScript
  - Component-based architecture with React Hooks
  - Data fetching and state management with TanStack Query
  - Routing with React Router DOM
  - Styling with Tailwind CSS

## 📝 License

This project is part of the Rocketseat Next Level Week educational content.
