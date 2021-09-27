import { useDisclosure, UseDisclosureProps } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { useContext, createContext, ReactNode, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureProps;
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclousure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclousure.onClose();
  }, [router.asPath]);
  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
