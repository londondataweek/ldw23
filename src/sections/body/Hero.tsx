import { useEffect } from 'react';
import DownArrowSvg from '../../assets/icons/DownArrowSvg';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
// import AnimatedLogo from '../../assets/logos/AnimatedLogo';
import AnimatedLogo from '../../assets/logos/FullLogoWhiteColour2024';
import FullLogoWhiteColour from '../../assets/logos/FullLogoWhiteColour2024';

export default function Hero() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection, hasScrolled } = useIntersectionProviderContext();
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
      id="hero"
      ref={elementRef}
      className=" absolute z-[997] bg-gradient-to-b from-bg to-bg-var dark:bg-gradient-to-b dark:from-bg-dk dark:via-bg-dk dark:to-bg-var-dk top-0 grid min-h-screen w-screen "
    >
      <div className=" grid items-center grid-rows-[1fr_auto_auto_2fr_auto_1.2fr] sm:grid-rows-[1fr_auto_auto_2fr_auto] gap-4  w-body-sm min-w-body max-w-body sm:w-body mx-auto ">
        <div className=" relative pr-[6.5%] row-start-2 bg-darkblue dark:bg-transparent rounded-3xl overflow-clip mx-auto w-full max-w-[56rem] py-8">
          {!hasScrolled ? <AnimatedLogo /> : <FullLogoWhiteColour />}
        </div>

        <div className=" row-start-3 m-auto grid gap-4 md:gap-16 text-center w-full fade-in">
          <p className=" text-2xl xs:text-3xl md:text-5xl mx-auto w-fit font-bold ">1-7 July 2024</p>
          <div className="text-2xl xs:text-3xl mx-auto text-center w-fit justify-center md:text-5xl flex flex-row flex-wrap gap-2">
            <p className="w-fit text-center ">
              <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold ">Data</span> in the
              <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold "> public</span>,{' '}
            </p>
            <p className="w-fit text-center ">
              for the<span className=" dark:text-lightgreen text-darkgreentxt font-bold "> public</span>.
            </p>
          </div>
        </div>
        <div className=" row-start-5 mb-auto h-fit sm:pb-8">
          <a
            className="h-fit w-fit r mx-auto text-darkblue dark:text-white hover:transition hover:text-darkgreen dark:hover:text-pink focus-within:transition focus-within:text-darkgreen dark:focus-within:text-pink"
            href="#about"
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
