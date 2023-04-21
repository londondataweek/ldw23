import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import eventData from '../../eventData';
import DayCard from './DayCard';
import LeftArrowSvg from '../../assets/icons/LeftArrowSvg';
import RightArrowSvg from '../../assets/icons/RightArrowSvg';

const dataArray = eventData();

const DayCards = dataArray.map((event, index) => (
  <DayCard key={`${event.Date}-${event.Name}`} colourIndex={index} eventsArray={[event]} />
));

export default function Schedule() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    const windowWidth = window.innerWidth;
    const increment = windowWidth > 755 ? 500 : 250;
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft -= increment;
    }
  }
  function scrollRight() {
    const windowWidth = window.innerWidth;
    const increment = windowWidth > 755 ? 500 : 250;

    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += increment;
    }
  }

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
      id="schedule-section"
      ref={elementRef}
      className="min-h-screen scroll-m-32 mt-20 lg:snap-start  w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto text-center">LDW 2023 Schedule</h2>
      <div className="flex flex-row rounded-3xl  py-4 border mt-20 border-current bg-palegrey dark:bg-darkblue text-darkblue dark:text-white">
        <button
          aria-label="scroll-left"
          id="scroll-left"
          type="button"
          className="sm:p-1 m-1"
          onClick={() => {
            scrollLeft();
          }}
        >
          <div className="h-6 w-6 sm:h-12 sm:w-12 hover:transition focus:transition rotate-180 hover:bg-white hover:text-black focus:bg-white focus:text-black rounded-full">
            <LeftArrowSvg />
          </div>
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row snap-x snap-always snap-mandatory scroll-smooth overflow-x-scroll w-full  bg-darkblue  gap-4 p-2 dark:scrollbar-thumb-palegrey scrollbar-thumb-darkblue scrollbar-track-palegrey dark:scrollbar-track-transparent scrollbar-thin"
        >
          {DayCards}
          <div className="w-full h-full shrink-0 snap-none" />
        </div>
        <button
          aria-label="scroll-right"
          id="scroll-right"
          type="button"
          className="sm:p-2 p-1"
          onClick={() => {
            scrollRight();
          }}
        >
          <div className="h-6 w-6 sm:h-12 sm:w-12 hover:transition  focus:transition  hover:bg-white hover:text-black focus:bg-white focus:text-black rounded-full">
            <RightArrowSvg />
          </div>
        </button>
      </div>
    </section>
  );
}
