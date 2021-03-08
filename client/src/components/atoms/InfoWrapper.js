import styled from 'styled-components';

const InfoWrapper = styled.div`
    min-height : ${window.innerHeight}px;
    max-width: 90vw;
    width: 640px;
    padding : 10% 0;
    display : flex;
    flex-direction: column;
    justify-content: center;

    label {
        color: grey;
    }

    input[type=text],
    input[type=email],
    input[type=tel]  {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    textarea  {
        width: 100%;
        height: 5em;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
    }

    input[type=submit] {
        background-color: #3DA35D;
        color: white;
        padding: 0px 24px;
        margin: 8px 0;
        line-height: 36px;
        border: none;
        border-radius: 4px;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-weight: 500;
        text-align: center;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;
    }

    input[type=submit]:hover {
        background-color: #379555;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }

    input[type=submit]:active {
        transform: translateY(2px);
    }


`

export default InfoWrapper;