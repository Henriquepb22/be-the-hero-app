import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const resp = await api.post("ongs", data);
            alert("Seu ID de acesso: " + resp.data.id);

            history.push("/");
        } catch (err) {
            alert("Erro no cadastro, tente novamente");
        }
    }

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
                <S.RegisterForm onSubmit={handleRegister}>
                    <S.RegisterInput
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <S.RegisterInput
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <S.RegisterInput
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <S.InputGroup>
                        <S.RegisterInput
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <S.RegisterInput
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
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
