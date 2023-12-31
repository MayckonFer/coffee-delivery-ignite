import styled from "styled-components";
import { fontBaloo, fontRoboto } from "../../styles/fontsSize";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  margin: 4rem 0;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FormCheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  h2 {
    font-size: ${fontBaloo.textXS};
    font-weight: 700;
    font-family: var(--font-baloo);
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }
`;

export const FormAdress = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;

  width: 100%;
  max-width: 64rem;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  header {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;

      h4 {
        font-size: ${fontRoboto.textM};
        font-weight: 400;
        color: ${({ theme }) => theme["base-subtitle"]};
        line-height: 130%;
      }

      p {
        font-size: ${fontRoboto.textS};
        font-weight: 400;
        color: ${({ theme }) => theme["base-text"]};
        line-height: 130%;
      }
    }
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;

  span {
    font-size: ${fontRoboto.textXS};
    font-weight: 400;
    color: ${({ theme }) => theme["red"]};
  }

  .error {
    border: 1px solid ${({ theme }) => theme.red};

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.red};
    }
  }

  @media (min-width: 768px) {
    div:nth-child(1),
    input[id="cep"] {
      max-width: 20rem;
    }
  }

  .footer_wrapperInputs {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2.4rem 1.2rem;

      div {
        width: initial;
      }

      div:nth-child(1),
      input[id="number"] {
        width: 20rem;
      }

      div:nth-child(2),
      input[id="complement"] {
        flex-grow: 1;
      }

      div:nth-child(3),
      input[id="district"] {
        width: 20rem;
      }

      div:nth-child(4),
      input[id="city"] {
        flex-grow: 1;
      }

      div:nth-child(5),
      input[id="state"] {
        width: 6rem;
      }
    }
  }
`;

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
  padding: 2rem;

  width: 100%;
  max-width: 64rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  header {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  header > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;

    h4 {
      font-size: ${fontRoboto.textM};
      font-weight: 400;
      color: ${({ theme }) => theme["base-subtitle"]};
      line-height: 130%;
    }

    p {
      font-size: ${fontRoboto.textS};
      font-weight: 400;
      color: ${({ theme }) => theme["base-text"]};
      line-height: 130%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    button {
      width: 20rem;
    }
  }
`;

export const ContainerCoffeSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  width: 100%;
  max-width: 44.8rem;

  h2 {
    font-size: ${fontBaloo.textXS};
    font-weight: 700;
    font-family: var(--font-baloo);
    line-height: 130%;
  }
`;

export const WrapperCoffesSelectes = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 44px;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  max-width: 42.7rem;

  @media (min-width: 768px) {
    padding: 4rem;
    margin: 0;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    height: 33rem;
    overflow: auto;
  }
`;

export const FooterCoffeSelected = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li:nth-child(1) span,
  ul li:nth-child(2) span {
    font-size: ${fontRoboto.textS};
    font-weight: 400;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 130%;
  }

  ul li:nth-child(1) span:nth-child(2),
  ul li:nth-child(2) span:nth-child(2) {
    font-size: ${fontRoboto.textM};
  }

  ul li:nth-child(3) span {
    font-size: ${fontRoboto.textL};
    font-weight: 700;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 130%;
  }

  button[title="Confirmar Pedido"] {
    background-color: ${({ theme }) => theme["yellow"]};
    border-radius: 6px;
    padding: 1.2rem;

    font-size: ${fontRoboto.textS};
    font-weight: 700;
    color: ${({ theme }) => theme["white"]};
    text-transform: uppercase;
    line-height: 160%;
    transition: 100ms;

    &:hover {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }
  }
`;
