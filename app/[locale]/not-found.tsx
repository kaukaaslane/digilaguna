import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-container section-xl">
      <div className="max-w-2xl">
        <p className="mb-4 eyebrow">404</p>
        <h1 className="text-4xl font-medium sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-text-muted">
          The link may be out of date, or the page may have moved.
        </p>
        <Link href="/" className="mt-8 btn btn-secondary">
          Home
          <span aria-hidden className="btn-arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
