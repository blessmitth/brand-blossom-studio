import { Outlet, createRootRouteWithContext, HeadContent, Scripts, Link, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center bg-navy-deep text-white px-6">
      <div className="text-center max-w-md">
        <div className="font-serif text-8xl text-gold">404</div>
        <h1 className="font-serif text-2xl mt-4">Page not found</h1>
        <p className="mt-3 text-platinum/70">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-8 px-6 py-3 bg-gold text-navy-deep text-xs uppercase tracking-[0.25em] font-bold">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="min-h-screen grid place-items-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">Please try again.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 px-6 py-3 bg-navy-deep text-white text-xs uppercase tracking-[0.25em] font-bold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prymesphere Recruitment | Global Executive Search" },
      { name: "description", content: "Retained executive search firm placing visionary C-suite and board-level leaders at the world's most ambitious enterprises." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </QueryClientProvider>
  );
}
