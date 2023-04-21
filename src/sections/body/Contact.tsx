import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import LightBulb from '../../assets/icons/LightBulbSvg';
import MailSvg from '../../assets/icons/MailSvg';

export default function Contact() {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();
  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection]);

  return (
    <section
      id="contact-section"
      ref={elementRef}
      className="flex flex-col gap-12 min-h-screen scroll-m-32 snap-none lg:px-20 w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h2>
      <div className="flex flex-wrap w-full gap-12 sm:px-8">
        <div className=" dark:border-lightgreen border-4 border-darkgreen grid grid-rows-[auto_auto_1fr_auto] basis-0 grow min-w-[18rem] rounded-3xl text-current text-center p-4 gap-4 overflow-x-auto mr-auto">
          <div className="h-40 w-40 mx-auto">
            <LightBulb />
          </div>
          <h3 className="text-3xl font-bold">Get Involved</h3>
          <p className=" text-lg sm:text-xl m-auto w-fit">Suggest an event before the 15 May</p>
          <a
            className="hover:transiton hover:bg-darkblue dark:bg-lightgreen bg-darkgreen text-darkblue dark:hover:bg-white hover:text-white dark:hover:text-darkblue rounded-full w-full h-12 flex justify-center align-middle"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTl1_ENeriBXLD_aeU9uQdsNZ8O46ErvvXJsVKNLAXNJ3YDw/viewform"
          >
            <p className="w-fit h-fit mx-auto font-bold my-auto self-center text-lg sm:text-xl">Submit Idea</p>
          </a>
        </div>
        <div className=" dark:border-pink border-4 border-darkpink grid grid-rows-[auto_auto_1fr_auto] basis-0 grow min-w-[18rem] rounded-3xl text-current text-center p-4 gap-4 overflow-x-auto  mr-auto">
          <div className="h-40 w-40 mx-auto">
            <MailSvg />
          </div>
          <h3 className="text-3xl font-bold">Ask a Question</h3>

          <p className=" text-lg sm:text-xl m-auto w-fit">Click the button to email or fill out the form below</p>
          <a
            className="hover:transiton hover:bg-darkblue dark:bg-pink bg-darkpink text-darkblue dark:hover:bg-white hover:text-white dark:hover:text-darkblue rounded-full w-full h-12 flex justify-center align-middle"
            href="mailto:londondataweek@gmail.com"
          >
            <p className="w-fit h-fit mx-auto font-bold my-auto self-center text-lg sm:text-xl">Email Us</p>
          </a>
        </div>
      </div>

      <div className="sm:px-8 ">
        <form
          className="flex flex-col border-4 border-current rounded-3xl text-current p-4 gap-2"
          action="https://formsubmit.co/londondataweek@gmail.com"
          method="POST"
        >
          <input
            id="name-input"
            name="name"
            aria-label="name"
            className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-current "
            type="text"
            placeholder="Name"
            required
          />
          <input
            id="email-input"
            name="email"
            aria-label="email"
            className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-current "
            type="email"
            placeholder="Email"
            required
          />
          <input type="hidden" name="_subject" value="London Data Week Contact Form" />
          <textarea
            id="message-input"
            name="message"
            aria-label="message"
            className=" w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-current  resize-y"
            placeholder="Message"
            rows={4}
            wrap="hard"
            required
          />
          <button
            className="mt-8 rounded-full w-full h-fit text-lg sm:text-xl mx-auto px-4 py-2 font-bold text-white dark:text-darkblue bg-darkblue dark:bg-white hover:transition focus:transition hover:text-darkblue hover:bg-darkpink  focus:text-darkblue focus:bg-darkpink  dark:hover:bg-pink  dark:focus:bg-pink"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
