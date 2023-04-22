import styled from 'styled-components';

export const DishCategoriesSC = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    margin-left: 2.4rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.light_300};
  }

  .slider {
    display: flex;
    gap: 1.6rem;

    overflow-x: hidden;

    > div {
      &:first-child {
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }

  }
`;