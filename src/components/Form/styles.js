import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 90%;
    max-width: 90%;
    margin: 0 auto;

    h3{
      font-size: 1.75rem;
      text-align: center;
      margin: 0 0 1rem 0;
    }
  }
`

export const FormWrapper = styled.div`
  width: 100%;

  .animation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 12px;
    width: "100%"
  }
`