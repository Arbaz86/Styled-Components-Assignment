import styled from "styled-components";

const Button = styled.button`
    margin: 5px;
    font-size: 15px;
    font-weight:700;
    padding: 15px 30px;
    background-color: ${(props) => (props.bgcolor === "blue" ? "#006eeb" : "transparent")};
    border: ${(props) => (props.border === "solid" ? "1px solid #5c5c5cdc" : props.border === "dashed" ? "1px dashed #5c5c5cdc" : "0px" )};
    color : ${(props) => (props.color === "blue" ? "#006eeb" : props.color === "white" ? "#ffff" : "#000")};
    border-radius: 5px;
`;

export default Button;
