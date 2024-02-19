import { useEffect } from 'react';
import useIntersectionObserver from '../../utilities/hooks/useIntersectionObserver';
import { useIntersectionProviderContext } from '../../utilities/contexts/IntersectionProvider';
import WritingSvg from '../../assets/icons/WritingSvg';
import PaperPlaneSvg from '../../assets/icons/PaperPlaneSvg';

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
      id="contact"
      ref={elementRef}
      className="w-screen bg-gradient-to-t from-bg to-bg-var dark:bg-gradient-to-t dark:from-bg-dk dark:to-bg-var-dk"
    >
      <div className="flex flex-col gap-12 min-h-screen text-center  pt-40 sm:pt-36 lg:px-20 w-[calc(100vw-1rem)] xs:w-body-sm min-w-body max-w-body sm:w-body mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold w-fit mx-auto text-center ">Get Involved</h2>

        <p className=" text-2xl xs:text-2xl md:text-2xl mx-auto w-fit ">
        To learn more about how to get involved with London Data Week, <a href="https://forms.gle/gLH71FExmKwcJtp68"><u>register for an upcoming webinar</u>. </a>
        If you are interested in applying to host an event or volunteer,
        fill out our <a href="https://airtable.com/appzyMC4CJl7GwcK5/shrRXtM6RidqKM6qu"> <u>call for participation form</u>!</a>
        </p>


        <div className="h-fit min-w-[280px] mx-auto w-fit xs:w-full  bg-darkgreen dark:bg-lightgreen border-2 border-darkblue rounded-t-xl rounded-b-2xl max-w-body sm:mx-auto">
          <h2 className=" text-2xl xs:text-3xl sm:text-4xl font-bold w-full bg-semiWhite rounded-t-xl  text-darkblue py-6  mx-auto text-center">
            @LondonDataWeek Updates
          </h2>
          <div className="grid w-full h-fit p-2 bg-transparent">
            <div className="bg-black rounded-t-none rounded-b-xl text-center text-white">
              <a
                className="twitter-timeline"
                data-width="100%"
                data-height="700"
                data-theme="dark"
                href="https://twitter.com/londondataweek?ref_src=twsrc%5Etfw"
                target="_blank"
                rel="noreferrer"
              >
                Refresh to see tweets by @LondonDataWeek!
              </a>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col max-w-body min-w-[280px] mx-auto w-full border-2 border-darkblue bg-darkpink  dark:bg-pink rounded-t-xl rounded-b-2xl text-current overflow-clip"
          action="https://formsubmit.co/londondataweek@gmail.com"
          method="POST"
        >
          <div className="flex justify-center bg-[#f0d0f0] dark:bg-[#ffd0ff] text-darkblue py-2">
            <div className="h-16 aspect-[5/4] my-auto ">
              <WritingSvg />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold w-fit my-auto">Message Us</h2>
            {/* <h3 className="text-2xl mb-2 font-bold w-fit mx-auto">Write a Message</h3> */}
          </div>

          <div className="grid w-full h-fit p-2 bg-transparent">
            <div className="grid w-full h-fit rounded-t-none rounded-b-xl bg-bg-var  dark:bg-darkblue">
              <input
                id="name-input"
                name="name"
                aria-label="name"
                className=" h-16 w-full border-transparent border-2 border-b-darkblue dark:border-b-pink p-2 bg-transparent text-base sm:text-lg placeholder:text-current "
                type="text"
                placeholder="Name"
                required
              />
              <input
                id="email-input"
                name="email"
                aria-label="email"
                className=" h-16 w-full border-transparent border-2 border-b-darkblue dark:border-b-pink p-2 bg-transparent text-base sm:text-lg placeholder:text-current "
                type="email"
                placeholder="Email"
                required
              />
              <input type="hidden" name="_subject" value="London Data Week Contact Form" />
              <textarea
                id="message-input"
                name="message"
                aria-label="message"
                className=" w-full border-transparent border-2 border-b-darkblue dark:border-b-pink p-2 bg-transparent text-base sm:text-lg placeholder:text-current  resize-y"
                placeholder="Message"
                rows={5}
                wrap="hard"
                required
              />
              <button
                className="my-6 rounded-full w-60 flex flex-row items-center justify-center gap-2 h-12 text-lg sm:text-xl mx-auto px-4 py-2 font-bold text-darkblue dark:text-darkblue bg-darkpink dark:bg-pink hover:transition focus:transition hover:text-white hover:bg-darkblue  focus:text-white focus:bg-darkblue  dark:hover:bg-white  dark:focus:bg-white"
                type="submit"
              >
                <PaperPlaneSvg />
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
