import { useEffect, useRef } from 'react';
import CloseSvg from '../../assets/icons/CloseSvg';

export default function EventModal({
  close,
  event,
  colourIndex,
}: {
  close: () => void;
  event: Record<string, string>;
  colourIndex: number;
}) {
  const { dayName, Name, Location, Organiser, MoreInfo, Time, EventType, dayNumber, yearNumber, monthName } = event;
  const initialFocus = useRef<HTMLButtonElement>(null);

  function handleClose() {
    setTimeout(() => {
      close();
    }, 300);
  }

  useEffect(() => {
    let run = true;
    if (run && initialFocus.current != null) initialFocus.current.focus();
    return () => {
      run = false;
    };
  }, [initialFocus]);

  return (
    <div
      id="modal-background"
      className="fixed top-0 left-0 m-auto opacity-0 fade-in-fast bg-darkblue sm:bg-semiBlue h-screen w-screen z-[999] flex"
    >
      <div className="relative sm:w-fit w-screen h-screen sm:h-fit sm:rounded-3xl sm:border-2 sm:border-darkblue rounded-none bg-white text-darkblue m-auto py-12 px-6 sm:p-12">
        <button
          ref={initialFocus}
          id="close-btn"
          aria-label="close-information-box"
          type="button"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key !== 'Tab') handleClose();
          }}
          className="w-8 h-8 bg-palegrey hover:transition text-darkblue focus:text-palegrey focus:transition focus:bg-darkblue hover:bg-darkblue hover:text-white rounded-full p-1 absolute top-2 right-2"
        >
          <CloseSvg />
        </button>
        <div>
          <div
            className={`my-4 rounded-xl p-2 sm:p-6 text-center ${colourIndex === 0 ? 'bg-yellow' : ''}${
              colourIndex === 1 ? 'bg-pink' : ''
            }${colourIndex === 2 ? 'bg-lightgreen' : ''}`}
          >
            <p className="w-fit mx-auto text-3xl font-bold">{Name.split(':')[0]}</p>
            {Name.split(':')[1] !== undefined ? (
              <p className="w-fit mx-auto mt-2 font-bold text-xl">{Name.split(':')[1]}</p>
            ) : null}
          </div>
          <div className="w-fit sm:w-full mx-auto py-2 sm:px-8">
            <p className=" flex flex-row  flex-wrap gap-3 sm:grid sm:grid-cols-2 sm:mx-6 my-2 text-xl">
              <span className="font-bold">Organiser: </span>
              {Organiser}
            </p>
            <p className="flex flex-row  flex-wrap gap-3 sm:grid sm:grid-cols-2 sm:mx-6 my-2 text-xl">
              <span className="font-bold">Type: </span>
              {EventType}
            </p>
            <p className="flex flex-row  flex-wrap gap-3 sm:grid sm:grid-cols-2 sm:mx-6 my-2 text-xl">
              <span className="font-bold">Location: </span>
              {Location}
            </p>
            <p className="flex flex-row  flex-wrap gap-3 sm:grid sm:grid-cols-2 sm:mx-6 my-2 text-xl">
              <span className="font-bold">Date: </span>
              {`${dayName} ${dayNumber} ${monthName} ${yearNumber}`}
            </p>
            <p className="flex flex-row  flex-wrap gap-3 sm:grid sm:grid-cols-2 sm:mx-6 my-2 text-xl">
              <span className="font-bold">Time: </span>
              {Time}
            </p>
            <a
              className={`hover:transiton hover:bg-darkblue mt-10 text-darkblue  hover:text-white  rounded-full w-44 sm:w-60 mx-auto h-12 flex justify-center align-middle ${
                colourIndex === 0 ? 'bg-yellow' : ''
              }${colourIndex === 1 ? 'bg-pink' : ''}${colourIndex === 2 ? 'bg-lightgreen' : ''}`}
              target="_blank"
              rel="noreferrer"
              href={MoreInfo}
              onBlur={() => {
                console.log('blur');
                if (initialFocus.current != null) initialFocus.current.focus();
              }}
            >
              <p className="w-fit h-fit mx-auto font-bold my-auto self-center text-lg sm:text-xl">Find Out More</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
