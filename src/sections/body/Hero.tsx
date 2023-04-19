import { useEffect } from 'react';
// import FullLogoWhiteColour from '../../assets/FullLogoWhiteColour';
// import GroupLogoWhite from '../../assets/GroupLogoWhite';
import DownArrowSvg from '../../icons/DownArrowSvg';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import AnimatedLogo from '../../assets/AnimatedLogo';

export default function Hero() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();
  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection]);

  return (
    <section
      id="hero-section"
      ref={elementRef}
      className=" absolute z-[997] bg-white dark:bg-darkblue top-0 grid min-h-screen w-screen "
    >
      <div className=" grid items-center grid-rows-[1fr_auto_auto_2fr_auto_1.2fr] sm:grid-rows-[1fr_auto_auto_2fr_auto] gap-4  w-body-sm min-w-body max-w-body sm:w-body mx-auto ">
        <div className="pr-[6.5%] row-start-2 bg-darkblue rounded-3xl overflow-clip mx-auto max-w-[60rem] py-8">
          <AnimatedLogo />
        </div>
        {/* <FullLogoWhiteColour /> */}
        {/* <div className=" ml-auto md:w-3/5 fade-in">
            <GroupLogoWhite />
          </div> */}
        <div className=" row-start-3 m-auto grid gap-4 md:gap-16 text-center w-full fade-in bg-white dark:bg-darkblue">
          <p className=" text-2xl xs:text-3xl md:text-5xl mx-auto w-fit font-bold ">July 3-9</p>
          <div className="text-2xl xs:text-3xl mx-auto text-center w-fit justify-center md:text-5xl flex flex-row flex-wrap gap-2">
            <p className="w-fit text-center ">
              <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold ">Data</span> in the{' '}
              <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold ">public</span>,
            </p>
            <p className="w-fit text-center ">
              for the <span className=" dark:text-lightgreen text-darkgreentxt font-bold ">public</span>.
            </p>
          </div>{' '}
        </div>
        <div className=" row-start-5 mb-auto h-fit sm:pb-8">
          <a
            className="h-fit w-fit r mx-auto text-darkblue dark:text-white hover:transition hover:text-darkgreen dark:hover:text-pink focus-within:transition focus-within:text-darkgreen dark:focus-within:text-pink"
            href="#about-section"
            aria-label="scroll down"
            id="scroll-down"
          >
            <div className="h-10 w-10 mx-auto">
              <DownArrowSvg />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
