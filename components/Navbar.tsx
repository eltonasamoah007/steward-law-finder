"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Scale, User, X } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-[1440px] items-center px-4 md:px-8"
      >
        {/* Logo */}
        <div className="flex flex-1">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
              <Scale size={20} strokeWidth={1.5} />
            </span>
            <span className="font-serif text-lg font-bold text-navy">
              Steward Law Finder
            </span>
            <span className="hidden rounded bg-blue-50 px-1.5 py-0.5 text-[11px] font-semibold text-brand sm:inline">
              GH
            </span>
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-ink hover:text-brand"
              >
                {link.label}
                {link.badge && (
                  <span className="rounded-full border border-yellow-300 bg-yellow-100 px-2 py-0.5 text-[11px] font-semibold text-yellow-800">
                    {link.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          <Link href="/login" className="text-sm font-semibold text-ink hover:text-brand">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
          >
            Get started
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white"
          >
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-navy hover:bg-canvas lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-line bg-white px-4 pb-4 lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-3 text-base font-medium text-ink"
                >
                  {link.label}
                  {link.badge && (
                    <span className="rounded-full border border-yellow-300 bg-yellow-100 px-2 py-0.5 text-[11px] font-semibold text-yellow-800">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Link
              href="/login"
              className="flex-1 rounded-lg border border-line bg-white px-5 py-2.5 text-center text-sm font-bold text-navy hover:bg-slate-50"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="flex-1 rounded-lg bg-brand px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-brand-dark"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}