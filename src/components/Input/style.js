import styled from 'styled-components';

export const InputSC = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.light_400};
  }

  input {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.dark_900};
    border: none;
    border-radius: 8px;
    padding: 1.2rem 1.4rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.light_300};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`;