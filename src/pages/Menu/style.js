import styled from 'styled-components';

export const MenuSC = styled.div`
  width: 42.8rem;
  min-height: 100vh;
  margin: 0 auto;

  header {
    height: 11.4rem;
    background-color: ${({ theme }) => theme.colors.dark_700};
    padding: 5.6rem 0 2.4rem 2.8rem;

    button {
      background: none;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 2.11rem;
      line-height: 1;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  nav {
    height: 67.7rem;
    width: 37.2rem;
    margin: 3.6rem auto 1.357rem;
    
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    label {
      background-color: ${({ theme }) => theme.colors.dark_900};
      border: none;
      border-radius: 5px;
      padding: 1.2rem 1.4rem;

      display: flex;
      align-items: center;
      gap: 1.4rem;

      input {
        width: 100%;
        background: none;
        border: none;

        font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
        color: ${({ theme }) => theme.colors.light_300};

        &::placeholder {
          color: ${({ theme }) => theme.colors.light_500};
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        border-bottom: solid 1px ${({ theme }) => theme.colors.dark_1000};
        padding: 1rem;

        list-style: none;

        a {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 2.4rem;
          line-height: 1.4;
          color: ${({ theme }) => theme.colors.light_300};
        }
      }
    }
  }
`;