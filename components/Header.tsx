"use client";

import { useState } from "react";

const navItems = [
  { label: "Top Stories", href: "#top-stories" },
  { label: "Latest", href: "#latest" },
  { label: "World", href: "#world" },
  { label: "Business", href: "#business" },
  { label: "Technology", href: "#technology" },
  { label: "Finance", href: "#finance" },
  { label: "Opinion", href: "#opinion" },
];

const breakingItems = [
  "Global summit delegates reach preliminary accord on maritime security framework",
  "Central banks signal measured approach as inflation readings show mixed trends",
  "Major manufacturers announce regional supply network investments across three continents",
];

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16 16" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className={`header-hamburger ${open ? "header-hamburger--open" : ""}`}>
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const today = "Tuesday, June 30, 2026";

  return (
    <header className="site-header">
      <div className="header-sticky">
        {/* Utility bar */}
        <div className="header-utility">
          <div className="content-container header-utility-inner">
            <time className="header-date" dateTime="2026-06-30">
              {today}
            </time>
            <p className="header-weather" aria-label="Weather placeholder">
              <span className="header-weather-temp">72°F</span>
              <span className="header-weather-sep" aria-hidden="true">
                ·
              </span>
              <span>Partly Cloudy</span>
              <span className="header-weather-sep" aria-hidden="true">
                ·
              </span>
              <span>New York</span>
            </p>
          </div>
        </div>

        {/* Breaking news ticker */}
        <div className="header-breaking" role="region" aria-label="Breaking news">
          <div className="content-container header-breaking-inner">
            <span className="header-breaking-label">Breaking</span>
            <div className="header-ticker-wrap">
              <div className="header-ticker-track">
                {[...breakingItems, ...breakingItems].map((item, i) => (
                  <a key={i} href="#" className="header-ticker-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Masthead */}
        <div className="header-masthead">
          <div className="content-container header-masthead-inner">
            <button
              type="button"
              className="header-icon-btn header-menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <HamburgerIcon open={menuOpen} />
            </button>

            <a href="/" className="header-logo">
              <span className="header-logo-kicker">Est. 2026</span>
              <span className="header-logo-title">Global Intel Times</span>
              <span className="header-logo-tagline">
                All the News That&apos;s Fit to Publish — Originally
              </span>
            </a>

            <button
              type="button"
              className="header-icon-btn header-search-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Search panel */}
        <div
          className={`header-search-panel ${searchOpen ? "header-search-panel--open" : ""}`}
          hidden={!searchOpen}
        >
          <div className="content-container">
            <form className="header-search-form" role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="site-search" className="sr-only">
                Search Global Intel Times
              </label>
              <input
                id="site-search"
                type="search"
                placeholder="Search articles, topics, and authors…"
                className="header-search-input"
                autoComplete="off"
              />
              <button type="submit" className="header-search-submit">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Primary navigation */}
        <nav className="header-nav" aria-label="Primary">
          <div className="content-container">
            <ul className="header-nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="header-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`header-mobile-panel ${menuOpen ? "header-mobile-panel--open" : ""}`}
          hidden={!menuOpen}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Mobile">
            <ul className="header-mobile-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="header-mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
