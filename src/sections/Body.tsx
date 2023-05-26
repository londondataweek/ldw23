import About from './body/About';
import Contact from './body/Contact';
import Schedule from './body/Schedule';

export default function Body() {
  return (
    <main id="main-content" className="relative grid w-screen grow ">
      <div className=" bg-bg-var dark:bg-bg-var-dk border-none border-border dark:border-border flex flex-col h-full   ">
        <div className="w-screen max-lg:landscape:h-[100vmax] h-screen mb-20" />
        {/* <div className='w-screen h-40 mb-20'></div> */}

        <About />
        <Schedule />
        <Contact />
      </div>
    </main>
  );
}
