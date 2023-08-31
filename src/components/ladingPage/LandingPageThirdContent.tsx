import { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";
import "./styles/LandingPageThirdContent.css";
import { LandingPageThirdContentAtlanta } from "./LandingPageThirdContentAtlanta";
import { CustomButton } from "../customButton";
import { useModalContext } from "../../context/ModalContext";


export function LandingPageThirdContent (){
    const [value, setValue] = useState<string>('Atlanta_Invest');
    const { setIsModalOpen } = useModalContext();

    const options = [
        { label: 'Sobre Atlanta Invest', value: 'Atlanta_Invest' },
        { label: 'Plataformas', value: 'plataformas' },
        { label: 'Assessoria especializada', value: 'assessoria' },
    ];

    const handleChange = ({ target: { value } }: RadioChangeEvent) => {
        setValue(value);

    };


    return(
        <section className="LandingPageThird__container">
            <div className="LandingPageThird__firstSection">
                <div>
                    <h1>
                        Mas a boa notícia é que esse não precisa ser o seu destino.
                    </h1>
                    <h1>
                        Quer descobrir como?
                    </h1>
                </div>
                
                <Radio.Group 
                    options={options} 
                    onChange={handleChange} 
                    value={value} 
                    optionType="button" 
                    size="large"

                />

                <LandingPageThirdContentAtlanta 
                    text={value}
                
                />

                <section className="LadingPageFirst__Btn">          
                    <h2 className="LadingPageFirst__textGold">Comece agora mesmo a construir seu futuro.</h2>
                    <CustomButton 
                        text={"Começar agora"} 
                        ghost={false} 
                        onClick={()=> setIsModalOpen(true)} 
                        className={"LandingPageSecond__btn"}
                    />

                </section>

            </div>
          
        </section>
    )

}