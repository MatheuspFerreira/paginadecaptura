import { useModalContext } from "../../context/ModalContext";
import { MyModal } from "../myModal";
import { LadingPageFirstContent } from "./LandingPageFirstContent";
import { LandingPageFooter } from "./LandingPageFooter";
import { LandingPageForm } from "./LandingPageForm";
import { LandingPageSecondContent } from "./LandingPageSecondContent";
import { LandingPageThirdContent } from "./LandingPageThirdContent";


export function LandingPageContent () {
    const { isModalOpen, setIsModalOpen } = useModalContext();

    return(
        <>
            <LadingPageFirstContent />
            <LandingPageSecondContent />
            <LandingPageThirdContent/>
            <LandingPageFooter />
            <MyModal 
                content={<LandingPageForm/>} 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
            />
            
        </>

    )
}