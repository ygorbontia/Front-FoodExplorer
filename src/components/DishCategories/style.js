import styled from 'styled-components';

export const DishCategoriesSC = styled.div`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.light_300};
  }

  .slider {
    max-width: 37.2rem;

    display: flex;
    gap: 1.6rem;

    overflow-x: hidden;
  }
`;