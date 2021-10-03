import styled from 'styled-components';

export const BoxContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-top:10px;
`;
export const FormContainer = styled.form`
    width:100%;
    padding:8px 4px 0px 4px;
    display:flex;
    flex-direction:column; 
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 0px 2px rgba(49, 64, 133, 0.288);
`;
    
export const MutedLink = styled.a`
    font-size:13px;
    color:rgb(245, 0, 0);
    font-weight:500;
    text-decoration:none;
`;

export const BoldLink = styled.a`
    font-size:13px;
    color:rgb(86,72,204);
    font-weight:700;
    text-decoration:none;
    margin:0 4px;
`;

export const Input = styled.input`
    width:100%;
    height:42px;
    outline:none;
    background-color:wheat;
    border-radius: 100px 100px 100px 100px;
    border:1px solid rgba(200, 200, 200, 0.2);
    padding:0 10px;
    margin-bottom:8px;
    border-bottom:1.4px solid transparent;
    transition: all 250ms ease-in-out;
    &::placeholder{
        color:black;
    }
    &:not(:last-of-type){
        border-bottom:1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus{
        outline:none;
        border: 2px solid rgb(86,72,204);
    }
`;

export const SubmitButton = styled.button`
    width:100%;
    padding:11px 40%;
    color:white;
    font-size: 15px;
    font-weight:600;
    border:none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition:all, 240ms ease-in-out;
    background: rgb(86,72,204);
    background: linear-gradient(90deg, 
        rgba(86,72,204,1) 25%, 
        rgba(73,43,214,1) 100%
    );
    &:hover{
        filter:brightness(1.04);
    }

`;
