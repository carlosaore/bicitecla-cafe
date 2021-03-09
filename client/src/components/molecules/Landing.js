import styled from 'styled-components';
import DataScroll from '../atoms/DataScroll';
import HeroImg from "../atoms/HeroImg";

const LogoWrapper = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 100px 0;

    .logo {
        width: 100%;
    }
`;

const TextWrapper = styled.div`
    width: 80%;
    max-width: 600px;
`;

const H3 = styled.h3`
    color: white;
    text-align: center;
    margin-bottom: 1em;
`;



const Landing = () => (
    <HeroImg url="./images/pexels-ryutaro-tsukata-6249462.jpg">
        <LogoWrapper>
            <img className="logo" src="./images/logobtc.svg" alt="logo"/>
        </LogoWrapper>
        <TextWrapper>
            <H3>
                Le ofrecemos servicio de bici mensajería en el área metropolitana de San Salvador.
            </H3>
            <H3>
                Nuestro arancel desde $2.00 hasta $5.00 le garantiza la entrega de su paquete en corto tiempo y la seguridad de su producto. 
            </H3>
            <p>
                Página en construcción
            </p>
        </TextWrapper>
        <DataScroll
            to="#info-section"
            white
        />
    </HeroImg>
);

export default Landing;
