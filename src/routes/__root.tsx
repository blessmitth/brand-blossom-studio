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
      { property: "og:title", content: "Prymesphere Recruitment | Global Executive Search" },
      { name: "twitter:title", content: "Prymesphere Recruitment | Global Executive Search" },
      { property: "og:description", content: "Retained executive search firm placing visionary C-suite and board-level leaders at the world's most ambitious enterprises." },
      { name: "twitter:description", content: "Retained executive search firm placing visionary C-suite and board-level leaders at the world's most ambitious enterprises." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/65e5956b-5d43-448e-a363-4efbcf3bcbc7/id-preview-04c4fe93--017945a3-94fe-49f7-abbe-57f9e61f9274.lovable.app-1779927915198.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/65e5956b-5d43-448e-a363-4efbcf3bcbc7/id-preview-04c4fe93--017945a3-94fe-49f7-abbe-57f9e61f9274.lovable.app-1779927915198.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
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
