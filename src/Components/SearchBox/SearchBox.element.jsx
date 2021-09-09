import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #1f2a48;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 15px;
  margin: 30px auto;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  background-color: transparent;
  outline: none;
  border: none;
  color: #efefef;
  font-size: 1rem;
`;

export const FormButton = styled.button`
  background-color: #0278fc;
  color: #fff;
  padding: 0.7rem 1.6rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`;
