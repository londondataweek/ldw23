import { useState } from 'react';
import HamburgerMenu from './header/HamburgerMenu';
import NavBar from './header/NavBar';
import FullLogoMonochrome from '../assets/FullLogoMonochrome';

export default function Header({
  toggleColourTheme,
  colourTheme,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
}) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }
  return (
    <header
      id="top"
      className="sticky top-0 left-0 right-0 z-[998] grid py-3 w-screen h-fit grid-cols-frAutoFr content-center border-none border-border dark:border-border-dk bg-bg dark:bg-bg-dk"
    >
      <div className=" col-start-2 ">
        <div
          className=" flex justify-between w-body-sm min-w-body max-w-body flex-wrap
sm:w-body "
        >
          <a
            className="flex h-12 mr-auto my-auto ml-0 w-[7rem] flex-wrap items-center "
            href="https://ldw-gld.vercel.app/"
            aria-label="Go To London Data Week Website"
          >
            <div className="flex flex-row overflow-clip rounded-lg border-none h-12 my-0 mr-auto w-fit p-1">
              <FullLogoMonochrome />
            </div>
          </a>
          <NavBar toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} toggleMenu={toggleShowMenu} />
        </div>
        <HamburgerMenu toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} show={showMenu} />
      </div>
    </header>
  );
}
