import "./styles/LandingPageFooter.css";

export function LandingPageFooter (){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const handleGoToAtlantaInvest = () =>{
        window.open('https://www.atlantainvest.com.br/', '_blank');
        
    }

    return(
        <footer className="LandingPageFooter__container">
            
            <h2> Cuidando do seu futuro 
                <br/>para que você aproveite o presente 
                <br/><strong><em>ao lado de quem ama.</em></strong>
            </h2>

            <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673960752/$e6605zu5hxg" 
                alt="Logo_Atlanta Invest"
                className="LandingPageFooter__logoAtlanta"
            />

            <div className="LandingPageFooter__adress">
                <ul>
                    <li>
                        <p>
                            Av. Barão do Rio Branco, 2872 – Salas 1004 e 1005. Juiz de Fora-MG – CEP 36.016-310
                        </p>
                    </li>
                    <li>
                        <p>
                            contato@atlantainvest.com.br | (32) 3211-8140 | (32) 3031-5911
                        </p>
                    </li>
                    <li>
                        <p>
                            Ouvidoria: 0800-722-3710 | Ouvidoria XP: 0800-722-3730
                        </p>
                    </li>
                    <li>
                       <p 
                            className="LadingPageFooter__linkAtlanta"
                            onClick={handleGoToAtlantaInvest}
                        >
                            www.atlantainvest.com.br
                        </p>
                    </li>
                </ul>

            </div>
            <div className="LandingPageFooter__social">
                <ul>
                    <li>
                        <img 
                            src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673960752/$7e863jwf2ii" 
                            alt="Logo_Instagram" 
                        />

                    </li>
                    <li>
                        <img 
                            src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673960752/$n9vigljrih" 
                            alt="Logo_Facebook" 
                        />

                    </li>
                    <li>
                        <img 
                            src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673960752/$b4bzzmelje4" 
                            alt="Logo_Linkedin" 
                        />

                    </li>
                </ul>
            </div>
            <div className="LadingPageFooter__CopyRight">
                <p>{`© Todos os Direitos Reservados - Atlanta Invest - ${currentYear}.`}</p>

            </div>

        </footer>
    )

}