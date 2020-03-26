import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const Register = () => {
    return (
        <S.RegisterWrapper>
            <S.RegisterContent>
                <S.RegisterSection>
                    <img src={logoImg} alt="Be the hero" />
                    <S.RegisterTitle>Cadastro</S.RegisterTitle>
                    <S.RegisterText>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a
                        encontrarem os casos de sua ONG.
                    </S.RegisterText>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </S.RegisterSection>
                <S.RegisterForm>
                    <S.RegisterInput placeholder="Nome da ONG" />
                    <S.RegisterInput type="email" placeholder="E-mail" />
                    <S.RegisterInput placeholder="Whatsapp" />
                    <S.InputGroup>
                        <S.RegisterInput placeholder="Cidade" />
                        <S.RegisterInput
                            placeholder="UF"
                            style={{ width: 80 }}
                        />
                    </S.InputGroup>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </S.RegisterForm>
            </S.RegisterContent>
        </S.RegisterWrapper>
    );
};

export default Register;
