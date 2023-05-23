import SvgButtonNew from '../../elements/SvgButtonNew';
import MoonSvg from '../../assets/icons/MoonSvg';
import SunSvg from '../../assets/icons/SunSvg';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import InternalLink from './InternalLink';

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = <div className=" aspect-square my-auto h-5">{isDark ? <SunSvg /> : <MoonSvg />} </div>;
  return wrapper;
}

export default function HamburgerMenu({
  toggleColourTheme,
  colourTheme,
  show,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
  show: boolean;
}) {
  const { currentSection } = useIntersectionProviderContext();

  return (
    <nav
      className={`relative ${show ? '' : 'hidden'} sm:hidden ${
        show ? 'flex' : ''
      } h-8 flex-wrap items-center min-w-[300px] justify-center gap-2 text-sm border-y bg-bg dark:bg-bg-dk`}
    >
      <InternalLink
        layoutClasses="text-center flex flex-col w-20"
        link="#about-section"
        content={[
          <p
            key="text"
            className={`m-0  ${currentSection === 'about-section' ? 'dark:text-lightgreen text-darkgreentxt' : ''}`}
          >
            ABOUT
          </p>,
        ]}
      />
      <InternalLink
        layoutClasses="text-center flex flex-col w-20"
        link="#schedule-section"
        content={[
          <p
            key="text"
            className={`m-0  ${currentSection === 'schedule-section' ? 'dark:text-lightgreen text-darkgreentxt' : ''}`}
          >
            SCHEDULE
          </p>,
        ]}
      />
      <InternalLink
        layoutClasses="text-center flex flex-col w-20"
        link="#contact-section"
        content={[
          <p
            key="text"
            className={`m-0  ${currentSection === 'contact-section' ? 'dark:text-lightgreen text-darkgreentxt' : ''}`}
          >
            CONTACT
          </p>,
        ]}
      />

      <SvgButtonNew
        showTextIn={false}
        clickFunction={toggleColourTheme}
        reverse={false}
        id="colour-theme-button-secondary"
        name="Dark Mode Button"
        className="rounded text-xs"
        buttonClasses="flex flex-col content-center w-8 h-8 text-base xs:hidden text-txt-mid hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-mid-dk dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk self-start"
        textElement={<div className="text-base">{colourTheme ? 'Light' : 'Dark'}</div>}
        svg={getDarkToggleIcon(colourTheme)}
      />
    </nav>
  );
}
