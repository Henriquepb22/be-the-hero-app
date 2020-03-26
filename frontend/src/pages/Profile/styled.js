import styled from "styled-components";

export const ProfileWrapper = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
`;

export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;

    a {
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;

        &:hover {
            border-color: #999;
        }
    }
`;

export const ProfileSpan = styled.span`
    font-size: 20px;
    margin-left: 24px;
`;

export const ProfileLogo = styled.img`
    height: 64px;
`;

export const IncidentTitle = styled.h1`
    margin-top: 80px;
    margin-bottom: 24px;
`;

export const IncidentList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
`;

export const IncidentItem = styled.li`
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    p + strong {
        margin-top: 32px;
    }
`;

export const IncidentButton = styled.button`
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: none;

    &:hover {
        opacity: 0.8;
    }
`;

export const IncidentStrong = styled.strong`
    display: block;
    margin-bottom: 16px;
    color: #41414d;
`;

export const IncidentText = styled.p`
    color: #737380;
    line-height: 21px;
    font-size: 16px;
`;
