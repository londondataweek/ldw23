import About from './body/About';
import Contact from './body/Contact';
import Schedule from './body/Schedule';

export default function Body() {
  return (
    <main id="main-content" className="relative grid w-screen grow ">
      <div className=" bg-bg dark:bg-bg-dk px-2 rounded-3xl border-none border-border dark:border-border flex flex-col h-full gap-10  ">
        <div className="w-screen h-screen mb-20" />
        {/* <div className='w-screen h-40 mb-20'></div> */}

        <About />
        <Schedule />
        <Contact />
      </div>
    </main>
  );
}
