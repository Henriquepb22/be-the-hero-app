import styled from "styled-components";

export const RegisterWrapper = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RegisterContent = styled.div`
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterSection = styled.section`
    width: 100%;
    max-width: 380px;
`;

export const RegisterTitle = styled.h1`
    margin: 64px 0 32px;
    font-size: 32px;
`;

export const RegisterText = styled.p`
    font-size: 18px;
    color: #737380;
    line-height: 32px;
`;

export const RegisterForm = styled.form`
    width: 100%;
    max-width: 450px;
`;

export const RegisterInput = styled.input`
    margin-top: 8px;
`;

export const InputGroup = styled.div`
    display: flex;

    input + input {
        margin-left: 8px;
    }
`;
