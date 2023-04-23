import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 90%;

  label {
    font-weight: 500;
    font-size: 1rem;
    color: #000000;
  }

  span {
    color: #ff4040;
  }

  .input-content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px ${({type}) => type === "select" ? "4px" : "12px" };
    gap: 12px;

    height: 48px;

    background: #F6F6F6;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width: 100%;

    svg{
      opacity: 0.4;
    }
  }
  
  .input-content:focus-within{
    outline: 2px solid #266ADF;
  }

  input {
    background-color: transparent;
    border: none;
    flex: 1;
    font-size: 0.875rem;
    max-width: 100%;
  }

  input:focus {
    outline: none;
  }

  #AssociatedName:not(:placeholder-shown), #VehiclePlate:not(:placeholder-shown) {
    text-transform: uppercase;
  }

  .select{
    width: 100%;
  }

  .error-message{
    font-size: 0.75rem;
    color: #ff4040;
  }
  
`



