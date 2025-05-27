import { memo, useEffect, useRef, useState } from "react";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed bg-Gray-50 z-200 shadow w-full py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <a href="#">
          <img
            src="/logo.svg"
            alt="INSURE Company logo"
            aria-label="INSURE"
            className="w-24 lg:w-full"
          />
        </a>
        <ul className="hidden sm:flex lg:flex items-center gap-8">
          <li className="uppercase text-sm/6 text-Gray-700 font-medium hover:text-Gray-950 transition duration-500">
            <a href="#">how we work</a>
          </li>
          <li className="uppercase text-sm/6 text-Gray-700 font-medium hover:text-Gray-950 transition duration-500">
            <a href="#">blog</a>
          </li>
          <li className="uppercase text-sm/6 text-Gray-700 font-medium hover:text-Gray-950 transition duration-500">
            <a href="#">account</a>
          </li>
          <li>
            <Button
              text="view plans"
              className="hover:bg-Gray-950 hover:text-Gray-50 transition duration-300 py-1 text-sm/6"
            />
          </li>
        </ul>
        <button
          className="flex sm:hidden lg:hidden relative"
          aria-label={menuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
          onClick={toggleMenu}
          ref={buttonRef}
        >
          {menuOpen ? (
            <img src="/icon-close.svg" alt="" />
          ) : (
            <img src="/icon-hamburger.svg" alt="" />
          )}
        </button>
        {menuOpen && (
          <div
            ref={menuRef}
            className="bg-[url('/bg-pattern-mobile-nav.svg')] bg-bottom bg-no-repeat absolute z-100 top-16 left-0 bottom-0 w-full h-screen bg-Gray-950 text-center py-10 px-8 text-lg overflow-hidden"
          >
            <ul className="flex flex-col justify-center gap-8 items-center">
              <li className="uppercase text-Gray-50 font-medium hover:text-Gray-700">
                <a href="#" onClick={() => setMenuOpen(false)}>
                  how we work
                </a>
              </li>
              <li className="uppercase text-Gray-50 font-medium hover:text-Gray-700">
                <a href="#" onClick={() => setMenuOpen(false)}>
                  blog
                </a>
              </li>
              <li className="uppercase text-Gray-50 font-medium hover:text-Gray-700">
                <a href="#" onClick={() => setMenuOpen(false)}>
                  account
                </a>
              </li>
              <li>
                <Button
                  onClick={() => setMenuOpen(false)}
                  text="view plans"
                  className="shrink-0 border-Gray-50 py-2 text-lg font-medium text-Gray-50"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar);
