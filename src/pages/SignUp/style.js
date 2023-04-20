import styled from 'styled-components';

export const SignUpSC = styled.div`
  width: 100%;
  height: 100vh;
  
  main {
    width: 90%;
    max-width: 31.6rem;
    margin: 15.8rem auto 0;

    > div {
      margin-bottom: 7.3rem;
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
  
      a {
        margin: 0 auto;
  
        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }
`;