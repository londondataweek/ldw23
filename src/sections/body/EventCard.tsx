import { useState } from 'react';
import EventModal from './EventModal';
import EllipsisSvg from '../../assets/icons/EllipsisSvg';

export default function EventCard({
  eventObject,
  bottom,
  indexNumber,
}: {
  eventObject: Record<string, string>;
  bottom: boolean;
  indexNumber: number;
}) {
  const [clicked, setClicked] = useState(false);
  const { Name, Location, Time } = eventObject;
  function handleClick() {
    setClicked((currentState) => !currentState);
  }
  function closeFunction() {
    setClicked(false);
  }
  return (
    <>
      {clicked ? <EventModal close={closeFunction} event={eventObject} colourIndex={indexNumber} /> : null}
      <button
        type="button"
        onClick={handleClick}
        className={` relative grid items-center gap-2 min-h-[5rem] rounded-none ${
          bottom ? 'rounded-b-xl' : ''
        }  mx-2 justify-center p-2 px-8 bg-semiWhite hover:transition hover:bg-white focus:transition focus:outline-none focus:bg-white text-darkblue text-base clip-corner`}
      >
        <h2 className="w-fit h-fit m-auto font-bold text-xl text-center">{Name.split(':')[0]}</h2>
        <div>
          <p className="w-fit h-fit m-auto text-sm font-semibold">{Time}</p>
          <p className="w-fit h-fit m-auto">{Location.split(',')[0]}</p>
        </div>
        <div className="absolute right-0 top-0 h-full flex w-10 my-auto ">
          <div className="h-2 w-6 mx-auto mb-1 mt-auto text-darkblue">
            <EllipsisSvg />
          </div>
        </div>
      </button>
    </>
  );
}
