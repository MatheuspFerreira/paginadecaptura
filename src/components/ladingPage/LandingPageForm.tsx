import { CustomInput } from "../input";
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { CustomButton } from "../customButton";


export function LandingPageForm (){
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    
    return(
        <div>
            <section>
                <h1>Parabéns por dar o primeiro passo rumo a uma jornada de sucesso financeiro!</h1>

               
                <ul>
                    <li>
                        <h3>
                            Agora, só falta um último passo para começarmos essa jornada juntos.
                        </h3>
                    </li>
                    <li>
                        <p>
                            Ao preencher nosso rápido formulário, 
                            nossa equipe de especialistas estará pronta para entrar em contato e ajudá-lo(a) a traçar um plano personalizado, 
                            <strong> totalmente sem custo.</strong>
                        </p>
                    </li>
                    
                </ul>
                
                <ul>
                    <li>
                        <h3>
                            O que você pode esperar dos nossos especialistas:
                        </h3>
                    </li>
                    <li>
                        <p>
                            Uma conversa individualizada com nossos especialistas em investimentos.
                        </p>
                    </li>
                    <li>
                        <p>
                            Insights valiosos para alcançar suas metas financeiras.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Orientação sem custo e sem compromisso.</strong>
                        </p>
                    </li>
                    
                </ul>
            </section>
            <form action="">
                <CustomInput 
                    placement="bottom"
                    title="Digite seu nome"
                    label="Nome" 
                
                />

                <CustomInput 
                    placement="bottom"
                    title="Digite seu email"
                    label="Email" 
                
                />

                <CustomInput 
                    placement="bottom"
                    title="Digite o seu número"
                    label="Celular" 
                
                />

                <div>
                    <p>Como você prefere que entremos em contato?</p>
                    <Radio.Group onChange={onChange} value={value} >
                        <Radio value={1}>Ligação</Radio>
                        <Radio value={2}>WhatsApp</Radio>
                        <Radio value={3}>E-mail</Radio>
                        <Radio value={4}>Vídeo chamada</Radio>
                    </Radio.Group>
                </div>
                <div>
                    <p>Qual é o seu nível de experiência com investimentos?</p>
                    <Radio.Group onChange={onChange} value={value} >
                        <Radio value={1}>Tenho investimentos atualmente</Radio>
                        <Radio value={2}>Já investi antes, mas não atualmente</Radio>
                        <Radio value={3}>Nunca investi</Radio>
                    </Radio.Group>
                </div>

                {/*Validacao*/}
                {/*Button*/}
                
                <CustomButton 
                    text={"Começar agora"} 
                    ghost={false} 
                    onClick={()=>''} 
                    className={""}
                />

            </form>
        </div>

    )
}