import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginSection = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
`;

export const LoginForm = styled.form`
    margin-top: 100px;
`;

export const LoginTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 32px;
`;

export const FormLink = styled.a`
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }

    svg {
        margin-right: 8px;
    }
`;
