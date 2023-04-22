import styled from 'styled-components';

export const DishCardSC = styled.div`
  width: 21rem;
  background-color: ${({ theme }) => theme.colors.dark_200};
  border: solid 1px ${({ theme }) => theme.colors.dark_300};
  border-radius: 8px;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  position: relative;

  .favorites {
    background: none;
    border: none;

    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    img {
      width: 2.4rem;
      height: 2.2rem;
    }
  }

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
    font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
    font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
    line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
    color: ${({ theme }) => theme.colors.light_300};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
    font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
    font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
    line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
    color: ${({ theme }) => theme.colors.cake_200};
  }

  > div {
    width: 16.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > button {
      width: 100%;
      height: 3.2rem;
      background-color: ${({ theme }) => theme.colors.tomato_100};
      border: none;
      border-radius: 5px;
      
      font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
      font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
      font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
      line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
      color: ${({ theme }) => theme.colors.light_100};
    }

    .quantity {
      width: fit-content;
      height: 3.2rem;
      margin: 0 auto;

      display: flex;
      align-items: center;
      gap: 1.7rem;

      button {
        background: none;
        border: none;

        img {
          width: 1.8rem;
          height: 1.8rem;
        }
      }

      input[type="number"] {
        width: 2.4rem;
        background: none;
        border: none;

        appearance: number;
        -moz-appearance: textfield;
        
        font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
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
  }
`;