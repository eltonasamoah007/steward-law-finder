import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-24 text-center md:px-8">
      <p className="text-sm font-bold uppercase tracking-wider text-brand">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-navy md:text-[40px] md:leading-[48px]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for does not exist yet, or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
      >
        Back to homepage
      </Link>
    </main>
  );
}