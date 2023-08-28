import "./styles/LandingPageSecondContent.css"
import loseMoney from "../../assets/lose_money.jpg"
import loseMoney2 from "../../assets/lose_money2.webp"
import loseAndEarn from "../../assets/lose_earn_money.jpeg"
import { Divider } from "antd"
import { CustomButton } from "../customButton"

export function LandingPageSecondContent (){

    return(
        <section className="LandingPageSecond__container">
            <h1 className="LandingPageSecond__title">
                Você está perdendo DINHEIRO!
            </h1>
            <ul>
                <li>
                    <div className="LandingPageSecond__loseMoney">
                        <h2>Sim, você está perdendo <strong style={{textDecoration:"underline"}}>DINHEIRO!</strong></h2>
                        <p>
                            Pare e reflita por um momento e seja sincero consigo mesmo. 
                            Pare para considerar quantas oportunidades 
                            verdadeiramente promissoras passaram despercebidas por você. E ainda, 
                            quantas delas sequer chegaram ao seu conhecimento e, quando finalmente cruzaram o seu radar, 
                            já haviam se dissipado no ar? 
                           
                        </p>
                        <p>
                           A dura realidade é que, muitas vezes, investidores 
                            desinformados  <strong>estão deixando de ganhar mais do que imaginam. </strong> 

                        </p>
                    </div>
                    <img 
                        src={loseMoney}
                        alt="Perdendo_dinheiro.png" 
                        className="LandingPageSecond__loseMoneyImg"
                    
                    />
                    
                </li>
                <Divider />
                <li>
                    <img 
                        src={loseAndEarn}
                        alt="Perdendo_dinheiro.png" 
                        className="LandingPageSecond__loseMoneyImg"
                    
                    />
                    <div className="LandingPageSecond__loseMoney">
                        <h2> Não deixe que outros ganhem o seu <strong>Dinheiro </strong> </h2>
                        <p>
                            Imagine o sentimento de descobrir, tarde demais, 
                            que um investimento que poderia ter sido uma 
                            <strong style={{textDecoration:"underline", color:"#cf9a40"}}> mina de ouro já rendeu frutos para outros.</strong> 
                           
                           
                        </p>
                        <p>
                            A desinformação financeira é um adversário silencioso que sussurra dúvidas e deixa você questionando 
                            suas decisões.
                            A falta de orientação pode levar a erros custosos, 
                            fazendo com que suas finanças fiquem aquém do seu potencial.

                        </p>
                    </div> 

                </li>
                <Divider />
                <li>
                    <div className="LandingPageSecond__loseMoney">
                        <h2> Afundando em Arrependimento</h2>
                        <p>
                            Cada dia de inação é um passo mais profundo no abismo financeiro. 
                            Perder oportunidades brilhantes para investimentos lucrativos, 
                            tomar decisões erradas que corroem suas economias - <strong>é como assistir ao naufrágio do seu próprio futuro.</strong>               
                           
                        </p>
                     
                    </div>

                    <img 
                        src={loseMoney2}
                        alt="Perdendo_dinheiro.png" 
                        className="LandingPageSecond__loseMoneyImg"
                    
                    />

                </li>

            </ul>
            <section>          
                <h2 className="LadingPageFirst__textGold">Comece agora mesmo a construir seu futuro.</h2>
                <CustomButton 
                    text={"Começar agora"} 
                    ghost={false} 
                    onClick={()=>``} 
                    className={"LandingPageSecond__btn"}
                />
            

            </section>
        </section>
    )

}