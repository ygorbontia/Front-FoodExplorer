import styled from 'styled-components';

export const FooterSC = styled.div`
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.colors.dark_600};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  > div {
    width: fit-content;
    gap: .647rem;

    svg {
      width: 2.2rem;
      height: 1.8rem;

      path {
        fill: ${({ theme }) => theme.colors.light_700};
      }
    }
    
    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.526rem;
      line-height: auto;
      color: ${({ theme }) => theme.colors.light_700};
    }
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.light_200};
  }
`;