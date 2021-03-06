import styled from 'styled-components';

const HeroImg = styled.section`
    background-image: url(${props => props.url});
    background-position : center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-content : center;
    flex-wrap : wrap;
`

export default HeroImg;