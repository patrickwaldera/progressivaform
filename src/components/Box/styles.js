import styled from "styled-components"

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  gap: 18px;

  width: 480px;
  height: auto;

  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin: 1.85rem 0;
  .logo{
    display: flex;
    justify-content: center;
    img {
      width: 10.625rem;
    }
  }

  .btn-wrapper {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`