import { useState } from 'react';
import HamburgerMenu from './header/HamburgerMenu';
import NavBar from './header/NavBar';
import FullLogoMonochrome from '../assets/logos/FullLogoWhiteColour2024';
import { useIntersectionProviderContext } from '../utilities/contexts/IntersectionProvider';

export default function Header({
  toggleColourTheme,
  colourTheme,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
}) {
  const [showMenu, setShowMenu] = useState(true);
  const originURL = document.location.origin;
  const { hasScrolled } = useIntersectionProviderContext();

  if (!hasScrolled) return <div className="sticky grid top-0 left-0 right-0 z-[996] w-screen min-h-[88px]"> </div>;

  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }
  return (
    <header
      id="top"
      className="sticky top-0 left-0 right-0 z-[996] grid py-3 w-screen  h-[88px] content-center  bg-bg dark:bg-bg-dk"
    >
      <div className=" ">
        <div
          className=" flex justify-between mx-auto w-body-sm min-w-body max-w-body flex-wrap
sm:w-body "
        >
          <a
            className="flex h-12 mr-auto my-auto ml-0 max-w-[7rem] flex-wrap items-center "
            href={originURL}
            aria-label="Go To London Data Week Website"
          >
            <div className="flex flex-row overflow-clip rounded-none border-none h-12 my-0 mr-auto w-fit">
              <FullLogoMonochrome />
            </div>
          </a>
          <NavBar
            toggleColourTheme={toggleColourTheme}
            colourTheme={colourTheme}
            toggleMenu={toggleShowMenu}
            showHamburger={showMenu}
          />
        </div>
        <HamburgerMenu toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} show={showMenu} />
      </div>
    </header>
  );
}
