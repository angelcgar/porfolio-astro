import { proyectos } from "./proyectos-json";

export async function GET() {
  return new Response(JSON.stringify(proyectos), {
    headers: { "Content-Type": "application/json" },
  });
}
