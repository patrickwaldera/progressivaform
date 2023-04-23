import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 45px;
  background: #193C78;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
  cursor: pointer;
  transition: .5s;

  &[disabled]:hover{
    cursor: not-allowed;
  }

  &:disabled{
    opacity: 0.4;
  }
`