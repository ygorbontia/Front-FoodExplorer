import styled from 'styled-components';

export const HeaderSC = styled.div`
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 5.6rem 0 2.4rem;

  > nav {
    max-width: 37.2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      width: 2.4rem;
      height: 1.8rem;
      background: none;
      border: none;
    }

    > a div {
      gap: .8rem;

      h1 {
        font-size: 2.116rem;
      }

      svg {
        width: 2.461rem;
        height: 2.461rem;

        path {
          width: 2.461rem;
          height: 2.461rem;
        }
      }
    }

    .receipt {
      width: 3.754rem;
      height: 3.8rem;

      position: relative;
      
      img {
        position: relative;
        top: 2px;
      }

      span {
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.tomato_100};
        border: none;
        border-radius: 99px;

        position: absolute;
        top: 0;
        right: 0;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }
`;