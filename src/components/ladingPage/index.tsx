import { ModalContextProvider } from "../../context/ModalContext";

import { LandingPageContent } from "./LandingPageContent";


export function LadingPage () {
    
    return(
        <>
            <ModalContextProvider>      
                <LandingPageContent/>
            </ModalContextProvider>
        </>
    )
}