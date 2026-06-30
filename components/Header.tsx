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
  "Manufacturers invest in regional supply networks across three continents",
];

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

  return (
    <header className="site-header">
      <div className="header-sticky">
        <div className="header-utility">
          <div className="content-container header-utility-inner">
            <time className="header-date" dateTime="2026-06-30">
              Tuesday, June 30, 2026
            </time>
            <p className="header-weather">
              <strong>72°F</strong> · Partly Cloudy · New York
            </p>
          </div>
        </div>

        <div className="header-breaking">
          <div className="content-container header-breaking-inner">
            <span className="header-breaking-label">Breaking</span>
            <div className="header-ticker-wrap">
              <div className="header-ticker-track">
                {[...breakingItems, ...breakingItems].map((item, index) => (
                  <a href="#" className="header-ticker-item" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="header-masthead">
          <div className="content-container header-masthead-inner">
            <button
              type="button"
              className="header-icon-btn header-menu-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <HamburgerIcon open={menuOpen} />
            </button>

            <a href="/" className="header-logo">
              <span className="header-logo-kicker">Est. 2026</span>
              <span className="header-logo-title">Global Intel Times</span>
              <span className="header-logo-tagline">
                Original Journalism · Global Perspective
              </span>
            </a>

            <button
              type="button"
              className="header-icon-btn header-search-btn"
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="header-search-panel header-search-panel--open">
            <div className="content-container">
              <form className="header-search-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="header-search-input"
                  type="search"
                  placeholder="Search Global Intel Times..."
                />
                <button className="header-search-submit" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        <nav className="header-nav">
          <div className="content-container header-nav-inner">
            <ul className="header-nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="header-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="header-nav-search"
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <SearchIcon />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="header-mobile-panel header-mobile-panel--open">
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
          </div>
        )}
      </div>
    </header>
  );
}