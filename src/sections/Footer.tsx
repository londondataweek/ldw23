import AtiSvg from '../assets/logos/AtiSvg';
import LotiSvg from '../assets/logos/LotiSvg';
import GldSvg from '../assets/icons/GldSvg';
import HorizontalDivider from '../assets/icons/HorizontalDivider';
import ExternalLink from './header/ExternalLink';
import MolSvg from '../assets/logos/MolSvg';

export default function Footer() {
  return (
    <footer id="footer" className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 py-4 text-sm">
      <div
        className="  flex flex-col gap-10 w-body-sm min-w-body  max-w-body items-center
                sm:w-body "
      >
        <h2 className="w-fit mx-auto mt-24 text-center text-base md:text-lg font-bold decoration text-txt-mid dark:text-txt-mid-dk">
          London Data Week is made possible by:
        </h2>
        <div className="  flex flex-col lg:flex-row lg:h-28 mx-auto justify-around w-fit gap-6">

          <div className=" flex w-64">

            <a
              className="h-fit max-h-[5rem] mx-auto lg:mr-0 lg:ml-auto my-auto  w-[150px]"
              aria-label="Go to the LOTI website"
              href="https://loti.london/"
              target="_blank"
              rel="noreferrer"
            >
              <LotiSvg />
            </a>

          </div>

          <div className="hidden lg:block h-full w-fit py-2">
            <HorizontalDivider />
          </div>

          <a
            className=" h-fit w-64"
            aria-label="Go to the Alan Turing Institute website"
            href="https://www.turing.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <AtiSvg />
          </a>

          {/* <div className="hidden lg:block h-full w-fit py-2">
            <HorizontalDivider />
            </div>
            <a
              className=" h-fit w-64"
              aria-label="Go to the Mayor of London website"
              href="https://www.london.gov.uk/"
              target="_blank"
              rel="noreferrer"
            >
              <MolSvg />
            </a>*/}

        </div>

        {/* <div className='md:my-6 max-w-[30rem] min-w-[15rem] mx-auto h-auto w-full'>

        <MolSvg/>
        </div> */}

      </div>
    </footer>
  );
}
