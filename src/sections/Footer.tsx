import AtiSvg from '../assets/logos/AtiSvg';
import LotiSvg from '../assets/logos/LotiSvg';
import GldSvg from '../assets/icons/GldSvg';
import HorizontalDivider from '../assets/icons/HorizontalDivider';
import ExternalLink from './header/ExternalLink';

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
        </div>
        <div className="  flex flex-row flex-wrap mx-auto justify-center max-w-[45rem] h-fit w-fit gap-4">
          <a
            className="w-fit h-16  mx-auto p-1  bg-darkblue rounded"
            aria-label="Go to the GeoMob website"
            href="https://thegeomob.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" h-full w-fit  object-scale-down object-center "
              role="presentation"
              src="./geomob-logo-small.png"
              alt="GeoMob Logo"
            />
          </a>
          <a
            className="w-fit h-16 mx-auto p-1  bg-white rounded"
            aria-label="Go to the cabaret of dangerous ideas website"
            href="https://www.cabaretofdangerousideas.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" w-fit h-full object-scale-down object-center  "
              role="presentation"
              src="./codi-logo-small.png"
              alt="Cabaret of Dangerous Ideas Logo"
            />
          </a>
          <a
            className="w-fit h-16  mx-auto p-1  bg-white rounded"
            aria-label="Go to the Newham Council website"
            href="https://www.newham.gov.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" w-fit h-full object-scale-down object-center  "
              role="presentation"
              src="./Newham.svg"
              alt="Newham London Logo"
            />
          </a>
          <a
            className="w-fit h-16  mx-auto p-1  bg-white rounded"
            aria-label="Go to the Royal Statistical Society website"
            href="https://rss.org.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" w-fit h-full object-scale-down object-center  "
              role="presentation"
              src="./RSS.svg"
              alt="Royal Statistical Society Logo"
            />
          </a>
        </div>

        <div className=" grid gap-4 mb-6">
          <p key="text" className="m-0 w-fit mx-auto text-txt-mid dark:text-txt-mid-dk ">
            Design: London Data Week Team
          </p>
          <ExternalLink
            layoutClasses="w-fit mx-auto"
            aria-label="Visit the GLD Porfolio"
            link="https://gld-portfolio.vercel.app/"
            content={
              <div className="grid gap-4 mb-12">
                <p key="text" className="m-0 mx-auto ">
                  Web Development: Gareth L Devlin
                </p>
                <GldSvg />
              </div>
            }
          />
        </div>
      </div>
    </footer>
  );
}
