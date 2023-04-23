export default function SmallNavButton({
  sectionString,
  clickFunction,
}: {
  sectionString: string;
  clickFunction: () => void;
}) {
  if (sectionString === 'hero-section') return null;
  const content = sectionString.split('-')[0].toUpperCase();

  return (
    <button
      type="button"
      onClick={clickFunction}
      key="text"
      className={`m-0 text-sm block sm:hidden dark:text-lightgreen text-darkgreentxt `}
    >
      {content}
    </button>
  );
}
