import styled from 'styled-components';

export const HeaderSC = styled.header`
  width: 42.8rem;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  margin: 0 auto;
  padding: 5.6rem 2.8rem 2.4rem;
  
  nav {
    display: flex;
    align-items: center;
    
    button {
      width: 2.4rem;
      height: 1.8rem;
      background: none;
      border: none;
    }

    a div {
      gap: .8rem;

      svg {
        width: 2.461rem;
        height: 2.461rem;
      }

      h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.116rem;
        line-height: 1;
        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }
  
  .user {
    justify-content: space-between;

    .receipt {
      position: relative;

      span {
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.tomato_100};
        border: none;
        border-radius: 99px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -.9rem;
        right: -1.2rem;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }
  
  .admin {
    a {
      width: fit-content;
      margin: 0 auto;

      display: flex;
      align-items: center;
      gap: .8rem;

      p {
        align-self: flex-end;

        font-family: ${({ theme }) => theme.fonts.roboto.smallest_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.smallest_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.smallest_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.smallest_regular.height};
        color: ${({ theme }) => theme.colors.cake_200};
      }
    }
  }
`;