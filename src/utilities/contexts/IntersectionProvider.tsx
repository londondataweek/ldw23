import { createContext, type ReactNode, useContext, type Dispatch, useState, type SetStateAction } from 'react';

export interface ProviderState {
  currentSection: string;
}

export interface ProviderContext extends ProviderState {
  setcurrentSection: Dispatch<SetStateAction<string>>;
}

const initialiserContext: ProviderContext = {
  currentSection: 'hero-section',
  setcurrentSection: () => undefined,
};

function useData() {
  const [currentSection, setcurrentSection] = useState('hero-section');

  return {
    currentSection,
    setcurrentSection,
  };
}

const Intersection = createContext(initialiserContext);
export const useIntersectionProviderContext = () => useContext(Intersection);
export default function IntersectionProvider({ children }: { children: ReactNode }) {
  const data = useData();
  return <Intersection.Provider value={data}>{children}</Intersection.Provider>;
}
