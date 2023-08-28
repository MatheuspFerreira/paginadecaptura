import { LadingPageFirstContent } from "./LandingPageFirstContent";
import { LandingPageFooter } from "./LandingPageFooter";
import { LandingPageSecondContent } from "./LandingPageSecondContent";
import { LandingPageThirdContent } from "./LandingPageThirdContent";


export function LadingPage () {
    return(
        <>
            <LadingPageFirstContent />
            <LandingPageSecondContent />
            <LandingPageThirdContent/>
            <LandingPageFooter />
        </>
    )
}