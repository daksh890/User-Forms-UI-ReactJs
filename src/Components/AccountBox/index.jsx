import React, {useState} from 'react';
import styled from 'styled-components';
import { LoginForm } from './loginform';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext';
import { SignupForm } from './signupform';

const BoxContainer = styled.div`
    width: 300px;
    min-Height: 560px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position:relative;
    overflow:hidden;
    background: rgb(210,198,136);
    background: linear-gradient(58deg,
              rgba(210,198,136,1) 0%,
              rgba(226,213,197,1) 100%);
`;

const TopContainer = styled.div`
    width:100%;
    height:210px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:0 1em;
    padding-bottom:4em;

`;


const BackDrop = styled(motion.div)`
    width:160%;
    height:550px;
    position:absolute;
    display:flex;
    flex-direction:column;
    border-radius:48%;
    transform:rotate(70deg);
    top:-325px;
    left:-90px;
    background: rgb(86,72,204);
    background: linear-gradient(90deg, 
        rgba(86,72,204,1) 25%, 
        rgba(73,43,214,1) 100%
    );
`;

const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

`;

const HeaderText = styled.h2`
    font-size:35px;
    font-weight:600;
    line-height:1.2;
    color:#fff; 
    z-index:10;
    margin:0; 
`;

const SmallText = styled.h5`
    color:#fff;
    margin:0;
    margin-top:7px;
    font-weight:450;
    font-size:14px;
    z-index:10;
`;

const InnerContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0 1.8em;
`;

const BackdropVariants = {
    expanded:{
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width:"160%",
        height:"550px",
        borderRadius:"48%",
        transform:"rotate(70deg)"
    }
}

const expandingTransition = {
    type:"spring",
    duration: 2.3,
    stiffness: 30,
};


export function AccountBox(props) {
    const[isExpanded, setExpanded] = useState(false);
    const[active, setActive] = useState("signin");

    const playExpandingAnimation = () =>{
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration*1000 - 1400);
    };
    
    const switchToSignup = () =>{
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);     
    }

    const switchToSignin = () =>{
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);     
    }

    const contextValue = {switchToSignup, switchToSignin};


    return(
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
                <BackDrop 
                    initial={false} 
                    animate={isExpanded ? "expanded" : "collapsed"} 
                    variants={BackdropVariants}
                    transition={expandingTransition}
                    />
                {active === "signin" && <HeaderContainer>
                    <HeaderText>Welcome </HeaderText>
                    <HeaderText>Back!!</HeaderText>
                    <SmallText>Please sign-in to continue.</SmallText>
                </HeaderContainer>}
                {active === "signup" && <HeaderContainer>
                    <HeaderText>Create </HeaderText>
                    <HeaderText>Account</HeaderText>
                    <SmallText>Please sign-up to continue.</SmallText>
                </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
                {active === "signin" && <LoginForm/>}
                {active === "signup" && <SignupForm/>}
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    )
}