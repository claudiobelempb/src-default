import styled, { css } from 'styled-components';

export const HomeContainer = styled.main`
  ${({ theme }) => css`
    ${theme.variant.backgroundDefault({
      background: { index: 'primary', value: 'v500' }
    })}
    width: 100%;
    display: flex;
  `}
`;
