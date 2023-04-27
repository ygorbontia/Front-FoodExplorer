import styled from 'styled-components';

export const DishDetailsSC = styled.div`
  width: 100%;
  min-height: 100vh;

  main {
    width: 31.6rem;
    margin: 4.557rem auto 4.514rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 1.1rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.colors.light_300};
    }

    
    > div {
      display: flex;
      flex-direction: column;
      
      > img {
        width: 26.4rem;
        height: 26.4rem;
        margin: 0 auto 1.6rem;
        border-radius: 100%;
      }

      .details {
        margin-bottom: 4.8rem;

        display: grid;
        gap: 2.4rem;

        text-align: center;

        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 2.704rem;
          line-height: 1.4;
          color: ${({ theme }) => theme.colors.light_300};
        }

        p {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 1.622rem;
          line-height: 1.4;
          color: ${({ theme }) => theme.colors.light_300};
        }
      }

      .ingredients {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.4rem;

        span {
          width: fit-content;
          background-color: ${({ theme }) => theme.colors.dark_1000};
          border: none;
          border-radius: 5px;
          padding: .4rem .8rem;
          margin: 0 auto;

          font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
          font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
          font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
          line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
          color: ${({ theme }) => theme.colors.light_100};
        }
      }

      .order {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > div {
          display: flex;
          align-items: center;
          gap: 1.585rem;

          button {
            width: 2.715rem;
            height: 2.715rem;
            background: none;
            border: none;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          input[type="number"] {
            width: 2.6rem;
            background: none;
            border: none;

            appearance: number;
            -moz-appearance: textfield;
            
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 2.263rem;
            line-height: 1.6;
            color: ${({ theme }) => theme.colors.light_300};

            text-align: center;
          }

          input[type="number"]::-webkit-outer-spin-button, 
          input[type="number"]::-webkit-inner-spin-button {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
        }

        > button {
          width: 18.8rem;
          height: 3.786rem;
          background-color: ${({ theme }) => theme.colors.tomato_100};
          border: none;
          border-radius: 3.38px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: .541rem;
          
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: .946rem;
          line-height: 1.62rem;
          color: ${({ theme }) => theme.colors.light_100};
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    main {
      width: 112.493rem;
      margin: 3.2rem auto 15.544rem;
    
      > div {
        margin-top: 2.6rem;

        display: flex;
        flex-direction: row;
        align-items: center;

        > img {
          width: 39.011rem;
          height: 38.9rem;

          margin: 0;
          margin-right: 4.783rem;
        }

        .details {
          text-align: start;

          h2 {
            font-weight: ${({ theme }) => theme.fonts.poppins.medium_500.weight};
            font-size: ${({ theme }) => theme.fonts.poppins.medium_500.size};
            line-height: ${({ theme }) => theme.fonts.poppins.medium_500.height};
          }

          p {
            font-weight: ${({ theme }) => theme.fonts.poppins.regular_300.weight};
            font-size: ${({ theme }) => theme.fonts.poppins.regular_300.size};
            line-height: ${({ theme }) => theme.fonts.poppins.regular_300.height};
          }

          .ingredients {
            display: flex;
            flex-direction: row;
            gap: 1.2rem;

            span {
              margin: 0;
            }
          }
        }

        .order {
          justify-content: flex-start;
          gap: 3.3rem;
        }

      }

      .details + button {
        width: fit-content;
        padding: 1.2rem 2.4rem;
      }
    }
  }
`;