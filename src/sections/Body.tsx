import About from './body/About';
import Contact from './body/Contact';
import Hero from './body/Hero';
import Schedule from './body/Schedule';

export default function Body() {
  return (
    <main id="main-content" className="relative grid w-screen grow content-between py-6 md:py-16">
      <div className=" bg-bg dark:bg-bg-dk px-2 rounded-3xl border-none border-border dark:border-border flex flex-col gap-16 h-full  ">
        <Hero />
        <About />
        <Schedule />
        <Contact />
      </div>
    </main>
  );
}
