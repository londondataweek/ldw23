import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

export default function About() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection, hasScrolled, setHasScrolled } = useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);
      if (!hasScrolled) setHasScrolled(true);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection, hasScrolled, setHasScrolled]);

  return (
    <section
      id="about"
      ref={elementRef}
      className="bg-gradient-to-t from-bg to-bg-var dark:bg-gradient-to-t dark:from-bg-dk dark:to-bg-var-dk relative w-screen max-lg:landscape:min-h-[100vmax] min-h-screen pt-40 sm:pt-36"
    >
      <div className="relative h-fit bg-transparent w-body-sm min-w-body max-w-body sm:w-body mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold w-fit mx-auto text-center mb-12">About London Data Week</h2>
        <div className="grid text-base text-justify  md:text-xl lg:text-2xl w-full mx-auto gap-6 sm:gap-8">
          <div className="grid sm:grid-cols-2 w-full gap-6 sm:gap-8 ">
            <p className="w-fit my-auto sm:p-4 min-w-[15rem] md:min-w-[20rem]">
              Data is part of our everyday lives as Londoners, from choosing the
              <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> best Tube route</span> to finding
              your
              <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> next pair of trainers</span>.
            </p>
            <img
              className="dark:block hidden max-w-[20rem] w-full h-auto xs:h-48 xs:w-fit md:h-60 mx-auto "
              role="presentation"
              src="./illustrations/LDW-Data-Icons-Transparent_8Crop.svg"
              alt="Tube Sign Illustration"
            />
            <img
              className="dark:hidden block max-w-[20rem] w-full h-auto xs:h-48 xs:w-fit md:h-60 mx-auto  "
              role="presentation"
              src="./illustrations/LDW-Dark_8Crop.svg"
              alt="Tube Sign Illustration"
            />
          </div>

          <div className="grid sm:grid-cols-2  w-full gap-6 sm:gap-8 ">
            <p className="w-fit my-auto sm:p-4 sm:col-start-2 min-w-[15rem] md:min-w-[20rem] ">
              Join us at <b>London Data Week</b> for a citywide festival about data to
              <span className=" dark:text-yellow text-darkpink font-bold"> learn</span>,
              <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> create</span>,
              <span className=" dark:text-pink text-darkpink font-bold"> discuss</span>, and
              <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> explore</span> how to use data to
              shape our city for the better.
            </p>

            <img
              className="dark:block sm:col-start-1 sm:row-start-1 hidden max-w-[20rem] h-48 w-fit md:h-60 mx-auto  "
              role="presentation"
              src="./illustrations/LDW-Data-Icons-Transparent_3Crop.svg"
              alt="Lightbulb Illustration"
            />

            <img
              className="dark:hidden sm:col-start-1 sm:row-start-1 block max-w-[20rem] h-48 w-fit md:h-60 mx-auto  "
              role="presentation"
              src="./illustrations/LDW-Dark_3Crop.svg"
              alt="Lightbulb Illustration"
            />
          </div>

          <div className="grid sm:grid-cols-2 w-full gap-6 sm:gap-8 ">
            <p className="w-fit my-auto sm:p-4 min-w-[15rem] md:min-w-[20rem]">
              After an <a href="https://drive.google.com/file/d/1xa8UTExWKyrjJb-IPwVqbBAVa-tE1VBW/view?usp=sharing"> <u>incredible first year in 2023</u></a>,
              London Data Week is <a href="https://loti.london/blog/london-data-week-is-back-in-2024/"><u>back for 2024</u></a>!
            </p>
            <img
              className="dark:hidden block max-w-[20rem] h-48 w-fit md:h-60 mx-auto  "
              role="presentation"
              src="./illustrations/LDW-Dark_6Crop.svg"
              alt="Big Ben Illustration"
            />
            <img
              className="dark:block hidden max-w-[20rem] h-48 w-fit md:h-60 mx-auto  "
              role="presentation"
              src="./illustrations/LDW-Data-Icons-Transparent_6Crop.svg"
              alt="Big Ben Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
