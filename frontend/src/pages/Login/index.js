import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import * as S from "./styled";

const Login = () => (
    <S.LoginWrapper>
        <S.LoginSection>
            <img src={logoImg} alt="Be the hero" />

            <S.LoginForm>
                <S.LoginTitle>Faça seu login</S.LoginTitle>

                <input placeholder="Sua ID" />
                <button className="button" type="submit">
                    Entrar
                </button>

                <S.FormLink href="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </S.FormLink>
            </S.LoginForm>
        </S.LoginSection>

        <img src={heroesImg} alt="Heroes" />
    </S.LoginWrapper>
);

export default Login;