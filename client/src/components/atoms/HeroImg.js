import styled from 'styled-components';

const HeroImg = styled.section`
    height : ${window.innerHeight}px;
    min-height: 100vh;
    background-image: url(${props => props.url});
    background-position : center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default HeroImg;