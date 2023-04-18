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
      className=" relative min-h-[85vh] lg:min-h-screen items-center lg:snap-start pt-20 w-body-sm min-w-body max-w-body sm:w-body mx-auto "
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="h-fit grid md:gap-20 ">
          <div className="pr-[6.5%] bg-darkblue rounded-3xl overflow-clip py-6">
            <AnimatedLogo />
          </div>
          {/* <FullLogoWhiteColour /> */}
          {/* <div className=" ml-auto md:w-3/5 fade-in">
            <GroupLogoWhite />
          </div> */}
          <div className=" m-auto grid gap-8 md:gap-16 text-center w-full fade-in bg-white dark:bg-darkblue">
            <p className=" text-3xl md:text-[3.5rem] mx-auto w-fit font-bold ">July 3-9</p>
            <div className="text-3xl mx-auto text-center w-fit justify-center md:text-[3.5rem] flex flex-row flex-wrap gap-2">
              <p className="w-fit text-center my-2">
                <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold my-2">Data</span> in the{' '}
                <span className="dark:text-lightgreen text-center text-darkgreentxt font-bold my-2">public</span>,
              </p>
              <p className="w-fit text-center my-2">
                for the <span className=" dark:text-lightgreen text-darkgreentxt font-bold my-2">public</span>.
              </p>
            </div>{' '}
          </div>
        </div>
        <a
          className="h-10 w-10 mx-auto mt-auto mb-24 md:mb-16 text-darkblue dark:text-white hover:transition hover:text-darkgreen dark:hover:text-pink focus-within:transition focus-within:text-darkgreen dark:focus-within:text-pink"
          href="#about-section"
          aria-label="scroll down"
          id="scroll-down"
        >
          <DownArrowSvg />
        </a>
      </div>
    </section>
  );
}
