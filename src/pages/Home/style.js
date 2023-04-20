import styled from 'styled-components';

export const HomeSC = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const BannerSC = styled.div`
  width: 40.6rem;
  height: 14.9rem;
  margin: 1.5rem auto 6.2rem;

  position: relative;

  > img {
    width: 19.1rem;
    height: 14.9rem;

    z-index: 1;
  }

  > div {
    width: 37.6rem;
    height: 12rem;
    background-image: ${({ theme }) => theme.colors.gradient_200};
    border: none;
    border-radius: 2.92px;
    padding: 3.6rem .8rem 2.2rem 15.3rem;

    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

    h1 {
      margin-bottom: .3rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.colors.light_300};
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.colors.light_300};
    }
  }
`;