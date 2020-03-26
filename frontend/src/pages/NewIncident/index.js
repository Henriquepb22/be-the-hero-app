import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const NewIncident = () => {
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
                <S.NewIncidentForm>
                    <S.NewIncidentInput placeholder="Título do caso" />
                    <S.NewIncidentTextArea placeholder="Descrição" />
                    <S.NewIncidentInput placeholder="Valor em reais" />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </S.NewIncidentForm>
            </S.NewIncidentContent>
        </S.NewIncidentWrapper>
    );
};

export default NewIncident;
