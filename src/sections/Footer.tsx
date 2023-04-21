import GldSvg from '../assets/icons/GldSvg';
import HorizontalDivider from '../assets/icons/HorizontalDivider';
import AtiSvg from '../assets/logos/AtiSvg';
import LotiSvg from '../assets/logos/LotiSvg';
import ExternalLink from './header/ExternalLink';

export default function Footer() {
  return (
    <footer id="footer" className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 py-4 text-sm">
      <div
        className=" relative grid gap-10 w-body-sm min-w-body  max-w-body items-center
                sm:w-body "
      >
        <h2 className="w-fit mx-auto mt-24 text-center text-lg md:text-2xl font-bold decoration text-txt-mid dark:text-txt-mid-dk">
          London Data Week is made possible by:
        </h2>
        <div className=" relative flex flex-row mx-auto h-[20vw] items-center max-h-[5rem] w-fit max-w-[27rem] gap-6">
          <a
            className="w-fit h-full max-h-[5rem] basis-0 grow"
            href="https://loti.london/"
            target="_blank"
            rel="noreferrer"
          >
            <LotiSvg />
          </a>

          <HorizontalDivider />
          <a
            className="w-fit  h-full max-h-[5rem] basis-0 grow"
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
            href="https://thegeomob.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" h-full w-fit  object-scale-down object-center "
              role="presentation"
              src="./geomob-logo.png"
              alt="GeoMob Logo"
            />
          </a>
          <a
            className="w-fit h-16 mx-auto p-1 relative bg-white rounded"
            href="https://www.cabaretofdangerousideas.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" w-fit h-full object-scale-down object-center  "
              role="presentation"
              src="./codi-logo.png"
              alt="Cabaret of Dangerous Ideas Logo"
            />
          </a>
          <a
            className="w-fit h-16  mx-auto p-1 relative bg-white rounded"
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
            link="https://gld-portfolio.vercel.app/"
            content={
              <p key="text" className="m-0 ">
                Web Development: Gareth L Devlin
              </p>
            }
          />
          <ExternalLink
            layoutClasses="w-fit mx-auto my-2"
            link="https://gld-portfolio.vercel.app/"
            content={<GldSvg key="svg" />}
          />
        </div>
      </div>
    </footer>
  );
}
