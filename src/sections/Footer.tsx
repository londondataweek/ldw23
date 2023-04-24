import AtiSvg from '../assets/logos/AtiSvg';
import LotiSvg from '../assets/logos/LotiSvg';
import GldSvg from '../assets/icons/GldSvg';
import HorizontalDivider from '../assets/icons/HorizontalDivider';
import ExternalLink from './header/ExternalLink';

export default function Footer() {
  return (
    <footer id="footer" className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 py-4 text-sm">
      <div
        className=" relative grid gap-10 w-body-sm min-w-body  max-w-body items-center
                sm:w-body "
      >
        <h2 className="w-fit mx-auto mt-24 text-center text-base md:text-lg font-bold decoration text-txt-mid dark:text-txt-mid-dk">
          London Data Week is made possible by:
        </h2>
        <div className=" relative flex flex-row mx-auto h-[20vw] items-center max-h-[5rem] w-fit max-w-[27rem] gap-6">
          <a
            className="w-fit h-full max-h-[5rem] basis-0 grow"
            aria-label="Go to the LOTI website"
            href="https://loti.london/"
            target="_blank"
            rel="noreferrer"
          >
            <LotiSvg />
          </a>

          <HorizontalDivider />
          <a
            className="w-fit  h-full max-h-[5rem] basis-0 grow"
            aria-label="Go to the Alan Turing Institute website"
            href="https://www.turing.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <AtiSvg />
          </a>
        </div>
        <div className=" relative flex flex-row flex-wrap mx-auto justify-center max-w-[45rem] h-fit w-fit gap-4">
          <a
            className="w-fit h-16  mx-auto p-1 relative bg-darkblue rounded"
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
            className="w-fit h-16 mx-auto p-1 relative bg-white rounded"
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
            className="w-fit h-16  mx-auto p-1 relative bg-white rounded"
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
            className="w-fit h-16  mx-auto p-1 relative bg-white rounded"
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

        <div className="relative grid gap-4 mb-6">
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
