import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const NewIncident = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const history = useHistory();

    const ongId = localStorage.getItem("ongId");

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push("/profile");
        } catch (err) {
            alert("Erro ao cadastrar caso, tente novamente.");
        }
    }

    return (
        <S.NewIncidentWrapper>
            <S.NewIncidentContent>
                <S.NewIncidentSection>
                    <img src={logoImg} alt="Be the hero" />
                    <S.NewIncidentTitle>Cadasrar novo caso</S.NewIncidentTitle>
                    <S.NewIncidentText>
                        Descreva o caso detalhadamente para encontrar um herói
                        para resolver isso.
                    </S.NewIncidentText>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </S.NewIncidentSection>
                <S.NewIncidentForm onSubmit={handleNewIncident}>
                    <S.NewIncidentInput
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <S.NewIncidentTextArea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <S.NewIncidentInput
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </S.NewIncidentForm>
            </S.NewIncidentContent>
        </S.NewIncidentWrapper>
    );
};

export default NewIncident;
