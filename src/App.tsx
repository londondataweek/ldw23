import { useState } from 'react';
import Header from './sections/Header';
import Body from './sections/Body';
import Footer from './sections/Footer';
import MainContentLink from './sections/header/MainContentLink';
import IntersectionProvider from './utilities/contexts/IntersectionProvider';

function setThemeToLocalStorage(themeBoolean: boolean) {
  localStorage.setItem('theme', themeBoolean.toString());
}

function App() {
  const [colourTheme, setColourTheme] = useState(localStorage.getItem('theme') !== 'false');
  function toggleColourTheme() {
    setColourTheme((currentTheme: boolean) => !currentTheme);
    setThemeToLocalStorage(!colourTheme);
  }

  return (
    <div id="theme-wrapper" className={colourTheme ? 'dark' : undefined}>
      <div className=" font-body relative flex h-screen flex-col overflow-x-hidden overflow-y-scroll snap-y snap-normal snap-proximity scroll-smooth border-border bg-bg text-txt-main dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk ">
        <MainContentLink />
        <IntersectionProvider>
          <Header toggleColourTheme={toggleColourTheme} colourTheme={colourTheme} />
          <Body />
          <Footer />
        </IntersectionProvider>
      </div>
    </div>
  );
}

export default App;
