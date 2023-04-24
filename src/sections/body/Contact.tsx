import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import LightBulb from '../../assets/icons/LightBulbSvg';
import MailSvg from '../../assets/icons/MailSvg';
import WritingSvg from '../../assets/icons/WritingSvg';

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
      className="flex flex-col gap-12 min-h-screen pt-40 sm:pt-36 snap-none lg:px-20 w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h2>
      <div className="grid sm:grid-cols-2 max-w-[50rem] w-full mx-auto gap-6 ">
        <div className=" dark:border-lightgreen border-2 border-darkgreen grid grid-rows-[auto_auto_1fr_auto] w-full max-w-[24rem] mx-auto md:mx-0 basis-0 grow sm:min-w-[18rem] rounded-xl text-current text-center px-2 py-4 md:p-4 gap-4 overflow-x-auto ">
          <div className="h-24 w-24 mx-auto text-darkgreen dark:text-lightgreen">
            <LightBulb />
          </div>
          <h3 className="text-2xl mb-2 font-bold">Get Involved</h3>
          <p className=" text-base sm:text-lg mx-auto w-fit">Suggest an event before 15 May</p>
          <a
            className="hover:transiton hover:bg-darkblue dark:bg-lightgreen bg-darkgreen text-darkblue dark:hover:bg-white hover:text-white dark:hover:text-darkblue rounded-full w-44 xs:w-60 max-w-[20rem] mx-auto my-2 h-12 flex justify-center align-middle"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTl1_ENeriBXLD_aeU9uQdsNZ8O46ErvvXJsVKNLAXNJ3YDw/viewform"
          >
            <p className="w-fit h-fit mx-auto font-bold my-auto self-center text-lg sm:text-xl">Submit Idea</p>
          </a>
        </div>
        <div className=" dark:border-pink border-2 border-darkpink grid grid-rows-[auto_auto_1fr_auto] w-full max-w-[24rem] mx-auto md:mx-0 basis-0 grow sm:min-w-[18rem] rounded-xl text-current text-center px-1 py-4 md:p-4 gap-4 overflow-x-auto  ">
          <div className="h-24 w-24 mx-auto text-darkpink dark:text-pink">
            <MailSvg />
          </div>
          <h3 className="text-2xl mb-2 font-bold">Ask a Question</h3>

          <p className=" text-base sm:text-lg mx-auto w-fit">Email us or fill out the form below</p>
          <a
            className="hover:transiton hover:bg-darkblue dark:bg-pink bg-darkpink text-darkblue dark:hover:bg-white hover:text-white dark:hover:text-darkblue rounded-full w-44 xs:w-60 max-w-[20rem] mx-auto my-2 h-12 flex justify-center align-middle"
            href="mailto:londondataweek@gmail.com"
          >
            <p className="w-fit h-fit mx-auto font-bold my-auto self-center text-lg sm:text-xl">Email Us</p>
          </a>
        </div>
      </div>

      <form
        className="flex flex-col max-w-[50rem] sm:min-w-[18rem] mx-auto w-full  border-2 dark:border-palegrey border-darkblue rounded-xl text-current py-4 px-2 sm:p-4 gap-4"
        action="https://formsubmit.co/londondataweek@gmail.com"
        method="POST"
      >
        <div className="h-24 w-32 mx-auto text-darkblue dark:text-palegrey">
          <WritingSvg />
        </div>
        <h3 className="text-2xl mb-2 font-bold w-fit mx-auto">Send a Message</h3>

        <input
          id="name-input"
          name="name"
          aria-label="name"
          className=" h-16 w-full border-transparent border border-b-darkblue dark:border-b-palegrey p-2 bg-transparent text-base sm:text-lg placeholder:text-current "
          type="text"
          placeholder="Name"
          required
        />
        <input
          id="email-input"
          name="email"
          aria-label="email"
          className=" h-16 w-full border-transparent border border-b-darkblue dark:border-b-palegrey p-2 bg-transparent text-base sm:text-lg placeholder:text-current "
          type="email"
          placeholder="Email"
          required
        />
        <input type="hidden" name="_subject" value="London Data Week Contact Form" />
        <textarea
          id="message-input"
          name="message"
          aria-label="message"
          className=" w-full border-transparent border border-b-darkblue dark:border-b-palegrey p-2 bg-transparent text-base sm:text-lg placeholder:text-current  resize-y"
          placeholder="Message"
          rows={5}
          wrap="hard"
          required
        />
        <button
          className="mt-8 mb-2 rounded-full w-44 xs:w-60 max-w-[20rem] h-12 text-lg sm:text-xl mx-auto px-4 py-2 font-bold text-white dark:text-darkblue bg-darkblue dark:bg-palegrey hover:transition focus:transition hover:text-darkblue hover:bg-darkpink  focus:text-darkblue focus:bg-darkpink  dark:hover:bg-pink  dark:focus:bg-pink"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
