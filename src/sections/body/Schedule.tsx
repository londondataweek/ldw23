import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import eventData from '../../eventData';
import DayCard from './DayCard';

const dataArray = eventData();

const DayCards = dataArray.map((event, index) => {
  const key = `${index}`;
  return <DayCard key={key} colourIndex={index} eventsArray={event} />;
});

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
      id="schedule-section"
      ref={elementRef}
      className="min-h-screen  pt-40 sm:pt-36 snap-none lg:snap-start  w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto text-center mb-12">LDW 2023 Schedule</h2>
      <div className="grid w-full  rounded  gap-2 overflow-clip ">{DayCards}</div>
    </section>
  );
}
