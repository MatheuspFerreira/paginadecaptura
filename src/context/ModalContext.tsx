import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalContextProviderProps = {
  children: ReactNode;
};

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalContextProvider");
  }

  return context;
}
