import { useEffect, useRef, type RefObject } from 'react';
import CloseSvg from '../../assets/icons/CloseSvg';

export default function EventModal({
  refPassed,
  event,
  colourIndex,
}: {
  refPassed: RefObject<HTMLDialogElement>;
  event: Record<string, string>;
  colourIndex: number;
}) {
  const {
    dayName,
    title,
    subtitle,
    Description,
    Location,
    Organiser,
    MoreInfo,
    Time,
    EventType,
    dayNumber,
    yearNumber,
    monthName,
  } = event;
  const initialFocus = useRef<HTMLButtonElement>(null);

  function handleClose() {
    setTimeout(() => {
      refPassed.current?.close();
    }, 200);
  }

  useEffect(() => {
    let run = true;
    if (run && initialFocus.current != null) initialFocus.current.focus();
    return () => {
      run = false;
    };
  }, [initialFocus]);

  return (
    <dialog
      ref={refPassed}
      id="event-modal"
      className="relative sm:w-fit w-screen max-w-[54rem] h-fit rounded-3xl sm:border-2 sm:border-darkblue bg-white text-darkblue m-auto py-12 px-6 sm:p-12"
    >
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
          <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
            <p className="w-fit text-center text-3xl font-bold">{title}</p>
            {subtitle.length > 0 ? <p className="w-fit text-center font-bold text-2xl">{subtitle}</p> : null}
          </div>
        </div>
        <p className="text-center xs:text-justify p-2 sm:p-6">{Description}</p>
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
          {MoreInfo.length > 5 ? (
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
          ) : (
            <p className="w-fit h-fit mx-auto p-8 font-bold my-auto self-center text-lg sm:text-xl">
              More Information Coming Soon...
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
