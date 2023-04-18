import { useEffect, useRef } from 'react';
import CloseSvg from '../../icons/CloseSvg';

function lookupMonthName(number: number) {
  const lookupArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return lookupArray[number + 1];
}

export default function EventModal({ close, event }: { close: () => void; event: Record<string, string> }) {
  const { Day, Date, Name, Location, DeliveryPartner, MoreInfo, Time } = event;
  const [monthNumber, dayOfMonth, year] = Date.split('/');
  const monthName = lookupMonthName(Number(monthNumber));
  const initialFocus = useRef<HTMLButtonElement>(null);
  const moreInfoNoHttp = MoreInfo.replace(/http[s]?:\/+/, '');
  const moreInfoSlice = moreInfoNoHttp.length > 20 ? `${moreInfoNoHttp.slice(0, 20)}...` : moreInfoNoHttp;

  useEffect(() => {
    let run = true;
    if (run && initialFocus.current != null) initialFocus.current.focus();
    return () => {
      run = false;
    };
  }, [initialFocus]);

  return (
    <div
      //   onClick={close}
      //   onKeyDown={close}
      id="modal-background"
      className="fixed top-0 left-0 m-auto bg-semiBlue h-screen w-screen z-[999] flex"
    >
      <div
        className="relative sm:w-fit w-screen h-screen sm:h-fit sm:rounded rounded-none bg-white text-darkblue m-auto p-12"
        // onClick={(e) => {
        //   e.stopPropagation();
        //   console.log('modal');
        // }}
      >
        <button
          ref={initialFocus}
          id="close-btn"
          aria-label="close-information-box"
          type="button"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key !== 'Tab') close();
          }}
          className="w-8 h-8 bg-palegrey hover:transition text-darkblue focus:text-palegrey focus:transition focus:bg-darkblue hover:bg-darkblue hover:text-white rounded-full p-1 absolute top-2 right-2"
        >
          <CloseSvg />
        </button>
        <div>
          <div className="my-4 rounded bg-lightgreen py-2 px-4">
            <p className="w-fit mx-auto text-3xl font-bold">{Name.split(':')[0]}</p>
            {Name.split(':')[1] !== undefined ? (
              <p className="w-fit mx-auto mt-2 font-bold text-xl">{Name.split(':')[1]}</p>
            ) : null}
          </div>
          <div className="w-fit mx-auto py-2 px-4">
            <p className=" my-2 text-xl">
              <span className="font-bold">Organiser: </span>
              {DeliveryPartner}
            </p>
            <p className=" my-2 text-xl">
              <span className="font-bold">Location: </span>
              {Location}
            </p>
            <p className=" my-2 text-xl">
              <span className="font-bold">Date: </span>
              {`${Day} ${dayOfMonth} ${monthName} ${year}`}
            </p>
            <p className=" my-2 text-xl">
              <span className="font-bold">Time: </span>
              {Time}
            </p>
            {/* <p className=" mt-8 mb-2 text-xl">
            <span className="font-bold">Registration: </span>
            <a
              onBlur={() => {
                console.log('blur');
                if (initialFocus.current != null) initialFocus.current.focus();
              }}
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
            >
              www.google.com
            </a>
          </p> */}
            <p className=" text-xl mt-2">
              <span className="font-bold m-0">More Info: </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={MoreInfo}
                onBlur={() => {
                  console.log('blur');
                  if (initialFocus.current != null) initialFocus.current.focus();
                }}
              >
                {moreInfoSlice}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
