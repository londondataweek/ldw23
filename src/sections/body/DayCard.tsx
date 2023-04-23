import EventCard from './EventCard';

function getColourNumber(indexValue: number) {
  return indexValue % 3;
}

export default function DayCard({
  eventsArray,
  colourIndex,
}: {
  eventsArray: Array<Record<string, string>>;
  colourIndex: number;
}) {
  const { dayName, dayNumber, monthName } = eventsArray[0];
  const colourNumber = getColourNumber(colourIndex);
  const bottomIndex = eventsArray.length - 1;
  const eventCards = eventsArray.map((event, index) => {
    const key = `${index}`;
    const isBottom = index === bottomIndex;
    return <EventCard key={key} indexNumber={colourNumber} eventObject={event} bottom={isBottom} />;
  });
  return (
    <div
      className={`flex flex-col  mx-auto w-full rounded-xl overflow-clip border-2 border-darkblue  shrink-0 gap-2 ${
        colourNumber === 0 ? 'bg-yellow' : ''
      }${colourNumber === 1 ? 'bg-pink' : ''}${colourNumber === 2 ? 'bg-lightgreen' : ''} pb-2`}
    >
      <div className="grid h-fit m-auto w-full rounded rounded-b-none bg-semiWhite text-darkblue text-xl font-bold p-2">
        <p className="w-fit h-fit m-auto text-2xl">{dayName}</p>
        <h2 className="w-fit h-fit m-auto text-2xl">{`${dayNumber} ${monthName}`}</h2>{' '}
      </div>

      <div className="grid gap-2 grow">{eventCards}</div>
    </div>
  );
}
