import "./styles/LandingPageThirdContentAtlanta.css"

interface LandingPageThirdContentText {
    text:string;
}
export function LandingPageThirdContentAtlanta ({text}:LandingPageThirdContentText) {
    return(
        <section className="LandingPageThirdAtlanta__container">
            <div className="LandingPageThirdAtlanta__LogoAtlanta">
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
            {
                text === 'Atlanta_Invest'
                ?
                
                <div className="LandingPageThirdAtlanta__textAtlanta">
                    <div>
                        <h1>Sua Corretora de Investimentos com Histórico de Excelência</h1>
                        <p>
                            Na Atlanta Invest, com mais de 7 anos de experiência no mercado, 
                            temos o orgulho de ser um agente autônomo de investimentos da XP Investimentos. 
                            A nossa expertise é o nosso maior diferencial. 
                            Com uma equipe de profissionais altamente experientes no mercado financeiro, 
                            garantimos um atendimento que excede as expectativas. 
                            Nossa assessoria especializada está sempre pronta para guiá-lo, não importa onde você esteja. 
                            Confie em uma corretora que possui um histórico sólido de sucesso e expertise comprovada para elevar 
                            seus investimentos a um novo patamar. Aqui na Atlanta Invest, a sua jornada financeira é nossa 
                            prioridade número um. 
                            <br/>
                            <strong><em>📈💼 #ExperiênciaEmInvestimentos</em></strong>

                        </p>

                    </div>
                    <div>
                        <h1>Multiplicando Patrimônios: Descubra a Excelência em Investimentos com Atlanta Invest!</h1>
                        <p>
                            Na Atlanta Invest, entendemos que cada trajetória financeira é única. 
                            Seja você um entusiasta da renda variável, um adepto da renda fixa ou alguém que planeja a aposentadoria 
                            com tranquilidade, temos equipes especializadas para cada área. Com um Head dedicado à renda variável, 
                            oferecemos análises de oportunidades de mercado sem igual. Nossos especialistas em renda fixa, 
                            tesouro direto e previdência privada estão aqui para construir seu caminho para um futuro sólido. 
                            Descubra a diferença na Atlanta Invest, onde cada investimento é guiado pela expertise certeira. 
                            <br/>
                            <strong><em>📊🏦 #InvestirComExpertise</em></strong>

                        </p>
                    </div>

                </div>

                :
                text === 'plataformas'
                ?
                <div className="LandingPageThirdAtlanta__plataformaContainer">
                    <div className="LandingPageThirdAtlanta__plataforma">
                        <div>
                            <h1>Descubra o Poder da Conexão Total com Seus Investimentos! 📱✨</h1>
                            <p>
                                Imagine ter a XP Investimentos, a maior corretora do Brasil, 
                                na palma da sua mão. Com o nosso aplicativo, cada investimento é controlado em tempo real. 
                                Surpreenda-se com a sensação de ter todo o mercado financeiro à sua disposição, 
                                acessível a qualquer momento, a partir do seu telefone. Não é magia, é a força da conectividade. 
                                Seus investimentos, seu controle absoluto.  
                                <br/>
                                
                                <strong><em>💼📈#ConexãoTotal #InvestimentosEmpoderados</em></strong>
                            </p>                         

                        </div>

                        <img 
                            src="https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/07/conta_digital.png?w=640&h=undefined&q=75"
                            alt="App_XpInvestimentos" 
                            
                        />
                        
                    </div>
                    <div className="LandingPageThirdAtlanta__plataforma">
                        <img 
                            src="https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2023/02/rico-henrico9811-bx.png?w=640&h=undefined&q=75"
                            alt="Home__Broker" 
                            
                        />

                        <div>
                            <h1>Desperte o Titã dos Investimentos Dentro de Você! 💥📈</h1>
                            <p>
                                Quando você negocia com a XP Investimentos, 
                                você está trazendo um titã para a arena da bolsa. 
                                Nosso aplicativo e o Homebroker dinâmico e eficiente são suas armas poderosas para operar no mercado.
                                Desde as operações mais simples até as mais complexas, 
                                você possui recursos de primeira linha para dominar a bolsa. 
                                Este é o poder de ter a XP Investimentos ao seu lado: você no controle, você no topo!  
                                <br/>
                                <strong><em>💼🏛️#TitãDosInvestimentos #AtlantaInvest</em></strong>

                            </p>

                        </div>

                    </div>

                    <div className="LandingPageThirdAtlanta__plataforma">                   
                        <div>
                            <h1>Desbloqueie um Novo Nível de Liberdade Financeira com o Cartão XP! 💳🚀</h1>
                            <p>
                                Introduzindo o cartão de crédito que redefine o jogo: o Cartão XP. 
                                Taxas de crédito mais baixas do mercado? Verificado. 
                                Limite dinâmico para acompanhar o seu ritmo? Verificado. 
                                E para coroar, 1% de cashback em todas as compras. 
                                Seu domínio financeiro se estende ao nosso super app, 
                                permitindo que você controle cada detalhe com facilidade. 
                                Com o Cartão XP, a liberdade financeira está nas suas mãos, 
                                e os benefícios estão ao seu alcance.  
                                <br/>
                                <strong><em>💼💰#CartãoXP #LiberdadeFinanceira</em></strong>

                            </p>
                        </div>
                        <img 
                            src="https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/07/cartao-xp-new.jpg?w=640&h=undefined&q=75"
                            alt="Cartao_XpInvestimentos" 
                            
                        />

                    </div>

                </div>                                                               
                :
                text === 'assessoria'
                ?             
                <div className="LandingPageThirdAtlanta__textAtlanta">
                    <div>
                        <h1>Renda Variável: Transforme volatilidade em oportunidade de crescimento.</h1>
                        <p>
                            Comandados pelo nosso excepcional Head especialista em renda variável, 
                            transformamos a volatilidade do mercado em oportunidades de ouro. 
                            Cada análise é afiada, cada estratégia é calculada, e cada movimento é preciso. 
                            Aqui, a volatilidade não é uma ameaça, mas sim uma ferramenta para alcançar crescimento exponencial. 
                            Esteja preparado para triunfar onde outros hesitam. 
                            <br/>
                            <strong><em>💼📈 #VolatilidadeEmDinheiro #Market</em></strong>  
                        </p>

                    </div>
                    <div>
                        <h1>Renda Fixa e Tesouro Direto: Renda fixa, mas resultados dinâmicos.</h1>
                        <p>
                            Garantimos estabilidade e crescimento inteligente para seus fundos. 
                            Nossas opções de investimento de baixo risco são uma promessa cumprida. 
                            E na renda fixa, onde os resultados podem parecer estáticos, revelamos a mágica dos juros compostos. 
                            Aqui, o dinamismo é o que impulsiona o retorno sólido.
                            <br/>
                            <strong><em>💼💰 #JurosCompostos #RendaFixaDinâmica</em></strong>
                        </p>
                    </div>
                    <div>
                        <h1>Previdência Privada: Garanta um futuro confortável enquanto desfruta do presente.</h1>
                        <p>
                            Nossa expertise garante a planejamento seguro e personalizado para sua aposentadoria. 
                            Estratégias meticulosas alinhadas às suas metas financeiras. E o melhor: 
                            enquanto você desfruta do presente, construímos um futuro financeiramente sólido para você. Aqui, 
                            a tranquilidade é uma conquista alcançável.
                            <br/>
                            <strong><em>💼🏖️ #FuturoConfortável #PresenteSeguro</em></strong>

                        </p>
                    </div>

                </div>

                :
                null
        

            }
            
        </section>
    )
}