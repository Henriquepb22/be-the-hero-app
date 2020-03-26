import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import * as S from "./styled";

const Profile = () => {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem("ongId");
    const ongName = localStorage.getItem("ongName");

    useEffect(() => {
        async function getIncidents() {
            const resp = await api.get("profile", {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(resp.data);
        }

        getIncidents();
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch (err) {
            alert("Erro ao deletar o caso, tente novamente.");
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push("/");
    }

    return (
        <S.ProfileWrapper>
            <S.ProfileHeader>
                <S.ProfileLogo src={logoImg} alt="Be the hero" />
                <S.ProfileSpan>Bem vindo {ongName}</S.ProfileSpan>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </S.ProfileHeader>

            <S.IncidentTitle>Casos cadastrados</S.IncidentTitle>

            <S.IncidentList>
                {incidents.map(incident => (
                    <S.IncidentItem key={incident.id}>
                        <S.IncidentStrong>CASO:</S.IncidentStrong>
                        <S.IncidentText>{incident.title}</S.IncidentText>

                        <S.IncidentStrong>DESCRIÇÕA:</S.IncidentStrong>
                        <S.IncidentText>{incident.description}</S.IncidentText>

                        <S.IncidentStrong>VALOR:</S.IncidentStrong>
                        <S.IncidentText>
                            {Intl.NumberFormat("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            }).format(incident.value)}
                        </S.IncidentText>

                        <S.IncidentButton
                            onClick={() => handleDeleteIncident(incident.id)}
                            type="button"
                        >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </S.IncidentButton>
                    </S.IncidentItem>
                ))}
            </S.IncidentList>
        </S.ProfileWrapper>
    );
};

export default Profile;
