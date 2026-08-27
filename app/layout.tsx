import React from "react";
import "./globals.css";

// The real <html>/<body> live in app/[locale]/layout.tsx, where the locale is
// known. Next requires a root layout to exist, so this one is a pass-through.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
