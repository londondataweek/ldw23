import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

export default function About() {
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
      id="about-section"
      ref={elementRef}
      className="relative min-h-[80vh] scroll-m-32 lg:px-32 bg-transparent lg:snap-start w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <div className="grid text-2xl w-full mx-auto gap-8">
        <div className="flex flex-wrap w-full gap-8 ">
          <p className="w-fit my-auto basis-0 grow min-w-[20rem]">
            Data is part of our everyday lives as Londoners, from choosing the
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> best Tube route</span> to finding your
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> next pair of trainers</span>.
          </p>
          <img
            className="dark:block hidden max-w-[20rem] mx-auto aspect-custom basis-0 grow"
            role="presentation"
            src="./illustrations/LDW-Data-Icons-Transparent_8.svg"
            alt="corporate-logos"
          />
          <img
            className="dark:hidden block w-80 max-w-[20rem] mx-auto aspect-custom basis-0 grow "
            role="presentation"
            src="./illustrations/LDW-Dark_8.svg"
            alt="corporate-logos"
          />
        </div>

        <div className="flex flex-wrap w-full gap-8 ">
          <p className="w-fit my-auto basis-0 grow min-w-[20rem] lg:hidden">
            Join us at <b>London Data Week</b> for a citywide festival about data to
            <span className=" dark:text-yellow text-darkpink font-bold"> learn </span>,{' '}
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> create</span>,
            <span className=" dark:text-pink text-darkpink font-bold"> discuss</span>, and
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> explore</span> how to use data to shape
            our city for the better.
          </p>

          <img
            className="dark:block hidden max-w-[20rem] mx-auto aspect-custom basis-0 grow "
            role="presentation"
            src="./illustrations/LDW-Data-Icons-Transparent_3.svg"
            alt="corporate-logos"
          />

          <img
            className="dark:hidden block max-w-[20rem] mx-auto aspect-custom basis-0 grow "
            role="presentation"
            src="./illustrations/LDW-Dark_3.svg"
            alt="corporate-logos"
          />

          <p className="hidden lg:block w-fit my-auto basis-0 grow min-w-[20rem]">
            Join us at <b>London Data Week</b> for a citywide festival about data to
            <span className=" dark:text-yellow text-darkpink font-bold"> learn </span>,{' '}
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> create</span>,
            <span className=" dark:text-pink text-darkpink font-bold"> discuss</span>, and
            <span className=" dark:text-lightgreen text-darkgreentxt font-bold"> explore</span> how to use data to shape
            our city for the better.
          </p>
        </div>

        <div className="flex flex-wrap w-full gap-8 ">
          <p className="w-fit my-auto basis-0 grow min-w-[20rem]">
            Explore our schedule to discover workshops, comedy events, cycling challenges and more! More events to be
            announced in May 2023.
          </p>
          <img
            className="dark:hidden block max-w-[20rem] mx-auto aspect-custom basis-0 grow "
            role="presentation"
            src="./illustrations/LDW-Dark_6.svg"
            alt="corporate-logos"
          />
          <img
            className="dark:block hidden max-w-[20rem] mx-auto aspect-custom basis-0 grow "
            role="presentation"
            src="./illustrations/LDW-Data-Icons-Transparent_6.svg"
            alt="corporate-logos"
          />
        </div>
      </div>
    </section>
  );
}
