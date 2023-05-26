import { createContext, type ReactNode, useContext, type Dispatch, useState, type SetStateAction } from 'react';

export interface ProviderState {
  currentSection: string;
  hasScrolled: boolean;
}

export interface ProviderContext extends ProviderState {
  setcurrentSection: Dispatch<SetStateAction<string>>;
  setHasScrolled: Dispatch<SetStateAction<boolean>>;
}

const initialiserContext: ProviderContext = {
  currentSection: 'hero',
  hasScrolled: false,
  setcurrentSection: () => undefined,
  setHasScrolled: () => undefined,
};

function useData() {
  const [currentSection, setcurrentSection] = useState('hero');
  const [hasScrolled, setHasScrolled] = useState(false);
  return {
    currentSection,
    setcurrentSection,
    hasScrolled,
    setHasScrolled,
  };
}

const Intersection = createContext(initialiserContext);
export const useIntersectionProviderContext = () => useContext(Intersection);
export default function IntersectionProvider({ children }: { children: ReactNode }) {
  const data = useData();
  return <Intersection.Provider value={data}>{children}</Intersection.Provider>;
}
