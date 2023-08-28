
import { CustomButton } from "../customButton";
import { LandingPageVimeoPlayer } from "./LandingPageVimeoPlayer";
import "./styles/LandingPageFirstContent.css";

export function LadingPageFirstContent (){
    

  return (
        <header>
          <section className="LadingPageFirst__text"> 
            <div className="LadingPageFirst__logoContainer">
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673898198/$xhj1xbd3pbl" 
                alt="Logo_Atlanta" 
                className="LadingPageFirst__LogoAtlanta"

              />
              <img 
                src="https://d335luupugsy2.cloudfront.net/cms/files/580675/1673898198/$yypasd2dhom" 
                alt="Logo_XpInvestimentos" 
                className="LadingPageFirst__logoXp"
                
              />
              
            </div>
            <h1><strong>Você sabe qual é o Segredo dos grandes Investidores</strong></h1>
            <h1><em>para Alcançar o Sucesso Financeiro na Vida e nos Investimentos ?</em></h1>

            
            
            
          </section>
          
          <LandingPageVimeoPlayer />
          <section>          
            <h2 className="LadingPageFirst__textGold">Comece agora mesmo a construir seu futuro.</h2>
            <CustomButton 
              text={"Começar agora"} 
              ghost={false} 
              onClick={()=>``} 
              className={"LadingPageFirst__button"}
            />
            

          </section>
          

          

        
          
            
        </header>
    );
}

   
