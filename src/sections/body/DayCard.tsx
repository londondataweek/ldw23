import EventCard from './EventCard';

function getColour(indexValue: number) {
  const colourKeys = ['pink', 'green', 'yellow'];
  const returnIndex = indexValue % colourKeys.length;
  return colourKeys[returnIndex];
}

export default function DayCard({
  eventsArray,
  colourIndex,
}: {
  eventsArray: Array<Record<string, string>>;
  colourIndex: number;
}) {
  const { Day, Date } = eventsArray[0];
  const [, dayOfMonth] = Date.split('/');
  const colour = getColour(colourIndex);
  const eventCards = eventsArray.map((event, index) => {
    const key = `${index}`;
    return <EventCard key={key} eventObject={event} />;
  });
  return (
    <div
      className={`flex flex-col w-64 h-[30rem] rounded shrink-0 gap-4 ${colour === 'yellow' ? 'bg-yellow' : ''}${
        colour === 'pink' ? 'bg-pink' : ''
      }${colour === 'green' ? 'bg-lightgreen' : ''} p-4 snap-start sm:scroll-m-4`}
    >
      <div className="grid h-fit w-full rounded bg-semiWhite text-black text-xl item font-bold p-4">
        <h2 className="w-fit h-fit m-auto text-4xl">{dayOfMonth}</h2>{' '}
        <p className="w-fit h-fit m-auto text-3xl">{Day}</p>
      </div>
      <div className="grid grid-rows-2 grow shrink-0 overflow-y-hidden gap-4">{eventCards}</div>
    </div>
  );
}
