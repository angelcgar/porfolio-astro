export async function GET() {
  return new Response(
    JSON.stringify({ message: "Hola, este es tu JSON desde Astro!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
