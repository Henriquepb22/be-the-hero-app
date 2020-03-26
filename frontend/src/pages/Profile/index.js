import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const Profile = () => {
    return (
        <S.ProfileWrapper>
            <S.ProfileHeader>
                <S.ProfileLogo src={logoImg} alt="Be the hero" />
                <S.ProfileSpan>Bem vindo nomedaong</S.ProfileSpan>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </S.ProfileHeader>

            <S.IncidentTitle>Casos cadastrados</S.IncidentTitle>

            <S.IncidentList>
                <S.IncidentItem>
                    <S.IncidentStrong>CASO:</S.IncidentStrong>
                    <S.IncidentText>Caso teste</S.IncidentText>

                    <S.IncidentStrong>DESCRIÇÕA:</S.IncidentStrong>
                    <S.IncidentText>Descrição teste</S.IncidentText>

                    <S.IncidentStrong>VALOR:</S.IncidentStrong>
                    <S.IncidentText>R$ 120,00</S.IncidentText>

                    <S.IncidentButton type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </S.IncidentButton>
                </S.IncidentItem>
                <S.IncidentItem>
                    <S.IncidentStrong>CASO:</S.IncidentStrong>
                    <S.IncidentText>Caso teste</S.IncidentText>

                    <S.IncidentStrong>DESCRIÇÕA:</S.IncidentStrong>
                    <S.IncidentText>Descrição teste</S.IncidentText>

                    <S.IncidentStrong>VALOR:</S.IncidentStrong>
                    <S.IncidentText>R$ 120,00</S.IncidentText>

                    <S.IncidentButton type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </S.IncidentButton>
                </S.IncidentItem>
                <S.IncidentItem>
                    <S.IncidentStrong>CASO:</S.IncidentStrong>
                    <S.IncidentText>Caso teste</S.IncidentText>

                    <S.IncidentStrong>DESCRIÇÕA:</S.IncidentStrong>
                    <S.IncidentText>Descrição teste</S.IncidentText>

                    <S.IncidentStrong>VALOR:</S.IncidentStrong>
                    <S.IncidentText>R$ 120,00</S.IncidentText>

                    <S.IncidentButton type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </S.IncidentButton>
                </S.IncidentItem>
                <S.IncidentItem>
                    <S.IncidentStrong>CASO:</S.IncidentStrong>
                    <S.IncidentText>Caso teste</S.IncidentText>

                    <S.IncidentStrong>DESCRIÇÕA:</S.IncidentStrong>
                    <S.IncidentText>Descrição teste</S.IncidentText>

                    <S.IncidentStrong>VALOR:</S.IncidentStrong>
                    <S.IncidentText>R$ 120,00</S.IncidentText>

                    <S.IncidentButton type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </S.IncidentButton>
                </S.IncidentItem>
            </S.IncidentList>
        </S.ProfileWrapper>
    );
};

export default Profile;
