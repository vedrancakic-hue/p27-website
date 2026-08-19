import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page may have moved — or never existed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Go home</Button>
          <Button href="/docs" variant="secondary">
            Documentation
          </Button>
        </div>
      </Container>
    </section>
  );
}
