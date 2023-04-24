import styled from 'styled-components';

export const NewDishSC = styled.div`
  width: 42.8rem;
  min-height: 100vh;
  margin: 0 auto;

  main {
    width: 36.4rem;
    margin: 1rem auto 5.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: .758rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.655rem;
      line-height: 1.4%;
      color: ${({ theme }) => theme.colors.light_300};
    }

    h1 {
      font-family: ${({ theme }) => theme.fonts.poppins.medium_400.family};
      font-weight: ${({ theme }) => theme.fonts.poppins.medium_400.weight};
      font-size: ${({ theme }) => theme.fonts.poppins.medium_400.size};
      line-height: ${({ theme }) => theme.fonts.poppins.medium_400.height};
      color: ${({ theme }) => theme.colors.light_300};
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      label:first-child, p {
        font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
        color: ${({ theme }) => theme.colors.light_400};
      }

      select {
        background-image: url('/src/assets/ArrowDown.svg');
        background-repeat: no-repeat;
        background-position: center right 1.6rem;
        background-color: ${({ theme }) => theme.colors.dark_900};
        border: none;
        border-radius: 5px;
        padding: 1.6rem;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        
        font-family: ${({ theme }) => theme.fonts.roboto.smaller_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.smaller_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.smaller_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.smaller_regular.height};
        color: ${({ theme }) => theme.colors.light_400};
      }

      textarea {
        width: 100%;
        height: 17.2rem;
        background-color: ${({ theme }) => theme.colors.dark_800};
        border: none;
        border-radius: 8px;
        padding: 1.4rem;

        resize: none;
        
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

    .image {
      label {
        background-color: ${({ theme }) => theme.colors.dark_800};
        border: none;
        border-radius: 8px;
        padding: 1.2rem 3.2rem;

        cursor: pointer;

        display: flex;
        align-items: center;
        gap: .8rem;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }

      input[type="file"] {
        display: none;
      }
    }

    .ingredients {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.dark_800};
      border: none;
      border-radius: 8px;
      padding: .4rem .8rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }

    > button {
      background-color: ${({ theme }) => theme.colors.tomato_400};
    }
  }
`;