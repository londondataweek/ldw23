import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import eventData, { getHardData } from '../../eventDataProcessor';
import DayCard from './DayCard';

let DayCards: JSX.Element[];
function init() {
  eventData()
    .then((dataArray) => {
      DayCards = dataArray.map((event, index) => {
        const key = `${index}`;
        return <DayCard key={key} colourIndex={index} eventsArray={event} />;
      });
    })
    .catch(() => {
      const dataArray = getHardData();
      DayCards = dataArray.map((event, index) => {
        const key = `${index}`;
        return <DayCard key={key} colourIndex={index} eventsArray={event} />;
      });
    });
}

init();

export default function Schedule() {
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
      id="schedule"
      ref={elementRef}
      className="min-h-screen w-screen bg-gradient-to-b from-bg to-bg-var dark:bg-gradient-to-b dark:from-bg-dk dark:to-bg-var-dk"
    >
      <div className="h-fit pt-40 sm:pt-36 md:px-8 lg:px-12 xl:px-16 w-body-sm min-w-body max-w-body sm:w-body mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold w-fit mx-auto text-center mb-12">LDW 2023 Schedule</h2>
        <div className="grid w-full  rounded  gap-2 overflow-clip ">{DayCards}</div>
      </div>
    </section>
  );
}
