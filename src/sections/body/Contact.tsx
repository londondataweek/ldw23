import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';

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
      className="flex flex-col gap-10 min-h-[80vh] scroll-m-32 snap-none lg:px-20 w-body-sm min-w-body max-w-body sm:w-body mx-auto"
    >
      <h2 className="text-4xl font-bold w-fit mx-auto">Get in Touch</h2>
      <div className=" dark:bg-lightgreen bg-darkgreen flex rounded-3xl text-black text-center w-full p-4 min-h-[8rem] overflow-x-auto mr-auto font-bold">
        <p className=" text-lg sm:text-xl m-auto w-fit">
          To propose an event,{' '}
          <a
            className="hover:transiton hover:decoration-current hover:decoration hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTl1_ENeriBXLD_aeU9uQdsNZ8O46ErvvXJsVKNLAXNJ3YDw/viewform"
          >
            submit your idea
          </a>{' '}
          by 15 May 2023
        </p>
      </div>
      <div className=" dark:bg-pink bg-darkpink flex rounded-3xl text-black text-center w-full p-4 min-h-[8rem] overflow-x-auto  mr-auto font-bold">
        <p className=" text-lg sm:text-xl m-auto w-fit">
          For any other questions, email us at{' '}
          <a
            className="hover:transiton hover:decoration-current hover:decoration hover:underline"
            href="mailto:londondataweek@gmail.com"
          >
            londondataweek@gmail.com
          </a>{' '}
          or fill out the form below!
        </p>
      </div>

      <form
        className="flex flex-col  bg-palegrey dark:bg-white rounded-3xl text-darkblue p-4 gap-2"
        action="https://formsubmit.co/londondataweek@gmail.com"
        method="POST"
      >
        <input
          id="name-input"
          name="name"
          aria-label="name"
          className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid"
          type="text"
          placeholder="Name"
          required
        />
        <input
          id="email-input"
          name="email"
          aria-label="email"
          className=" h-16 w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid"
          type="email"
          placeholder="Email"
          required
        />

        <input type="hidden" name="_subject" value="London Data Week Contact Form" />
        <textarea
          id="message-input"
          name="message"
          aria-label="message"
          className=" w-full border-transparent border border-b-border p-2 bg-transparent text-base sm:text-xl placeholder:text-txt-mid dark:placeholder:text-txt-mid resize-y"
          placeholder="Message"
          rows={4}
          wrap="hard"
          required
        />

        <button
          className="mt-8 border-border border rounded-lg w-fit h-fit text-base sm:text-xl mx-auto px-4 py-2 font-bold text-white bg-darkblue hover:transition hover:text-darkblue hover:bg-white focus:transition focus:text-darkblue focus:bg-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
