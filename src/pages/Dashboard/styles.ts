import { shade } from 'polished';
import styled, { css } from 'styled-components';

const colorGray = '#3a3a3a';
const marginTop = '80px';
const maxWidth = '700px';
const formHeight = '70px';
const colorGreen = '#04d361';
const colorWhite = '#fff';
const colorRed = '#c53030';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${colorGray};
  max-width: 450px;
  line-height: 56px;
  margin-top: ${marginTop};
`;

export const Form = styled.form<FormProps>`
  margin-top: calc(${marginTop} / 2);
  max-width: ${maxWidth};
  display: flex;

  input {
    color: ${colorGray};
    flex: 1;
    height: ${formHeight};
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 2px solid ${colorWhite};
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${colorRed};
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: ${formHeight};
    background: ${colorGreen};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${colorWhite};
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, colorGreen)};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${colorRed};
  margin-top: 8px;
`;

export const Users = styled.div`
  margin-top: calc(${marginTop} / 2);
  max-width: ${maxWidth};

  a {
    background: ${colorWhite};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(16px);
      transition: transform 0.2s;
    }

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
