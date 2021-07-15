import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #D7D7D7;
  background: var(--input-background);
  font-weight: 400;
  font-size: 1rem;

  &::placeholder{
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`