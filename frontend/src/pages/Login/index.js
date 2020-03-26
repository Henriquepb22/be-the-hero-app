import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import * as S from "./styled";

const Login = () => {
    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const resp = await api.post("sessions", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", resp.data.name);

            history.push("/profile");
        } catch (err) {
            alert("Falha no login, tente novamente.");
        }
    }

    return (
        <S.LoginWrapper>
            <S.LoginSection>
                <img src={logoImg} alt="Be the hero" />

                <S.LoginForm onSubmit={handleLogin}>
                    <S.LoginTitle>Faça seu login</S.LoginTitle>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Entrar
                    </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </S.LoginForm>
            </S.LoginSection>

            <img src={heroesImg} alt="Heroes" />
        </S.LoginWrapper>
    );
};

export default Login;
