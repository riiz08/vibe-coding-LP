import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Welcome to vibe-coding-LP API",
  }))
  .get("/health", () => ({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  }))
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Server berjalan di http://${app.server?.hostname}:${app.server?.port}`
);
