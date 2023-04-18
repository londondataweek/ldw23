import GroupLogoWhite from '../assets/GroupLogoWhite';
import ExternalLink from './header/ExternalLink';

export default function Footer() {
  return (
    <footer id="footer" className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 py-4 text-sm">
      <div
        className=" grid gap-2 w-body-sm min-w-body  max-w-body flex-wrap items-center
                sm:w-body "
      >
        <h2 className="w-fit mx-auto text-xl md:text-4xl font-bold decoration text-txt-mid dark:text-txt-mid-dk">
          London Data Week is made possible by:
        </h2>
        <div className=" mx-auto w-3/5">
          <GroupLogoWhite />
          <img
            className="bg-darkblue dark:bg-transparent rounded-2xl"
            role="presentation"
            src="./CorporateLogos.png"
            alt="corporate-logos"
          />
        </div>
        <p key="text" className="m-0 w-fit mx-auto text-txt-mid dark:text-txt-mid-dk ">
          Design: London Data Week Team
        </p>
        <ExternalLink
          layoutClasses="w-fit mx-auto"
          link="https://github.com/GLD5000"
          content={
            <p key="text" className="m-0 ">
              Web Development: Gareth L Devlin
            </p>
          }
        />
      </div>
    </footer>
  );
}
