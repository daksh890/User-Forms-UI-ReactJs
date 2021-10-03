import React, {useContext} from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
export function SignupForm(props){
    
    const{ switchToSignin } = useContext(AccountContext);

    return<BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name"/>
            <Input type="tel" placeholder="1234567890" pattern="[0-9]{5}-[0-9]{5}"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
        </FormContainer>
        <Marginer direction="vertical" margin="0.4em"/>
        <SubmitButton type="submit">SignUp</SubmitButton>
        <Marginer direction="vertical" margin="0.5em"/>
        <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToSignin}>SignIn</BoldLink></MutedLink>
    </BoxContainer>
}