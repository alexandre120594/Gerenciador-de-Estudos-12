import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
          Button component example
        </h1>
        <p className="max-w-md text-base leading-7 text-zinc-600">
          This page now uses a reusable button component from the `components`
          folder.
        </p>
        <Button>
          <div>Teste</div>
        </Button>
          <Button>
          <div>Teste</div>
        </Button>
          <Button>
          <div>Teste</div>
        </Button>
          <Button>
          <div>Teste</div>
        </Button>
      </main>
    </div>
  );
}
