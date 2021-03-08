import styled from 'styled-components';

const Arrow = styled.div`
        box-sizing: border-box;
        height: 5vw;
        width: 5vw;
        max-height: 40px;
        max-width: 40px;
        border-style: solid;
        border-color: white;
        border-width: 0px 1px 1px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;

    :hover {
        border-bottom-width: 4px;
        border-right-width: 4px;
    }
`;

const A = styled.a`
    margin: auto auto 100px auto;
`;

const DataScroll = (props) => (
    <A href={props.to}>
        <Arrow></Arrow>
    </A>
);

export default DataScroll;