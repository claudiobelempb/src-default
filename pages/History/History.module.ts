import styled, { css } from 'styled-components';
import { TypeDefault } from '../../assets/themes/TypeDefault';

export const HistoryContainer = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 3.5rem;

    & h1 {
      font-size: 2.4rem;
      ${theme.variant.colorDefault({
        color: { index: 'gray', value: 'v100' }
      })};
    }
  `}
`;
export const HistoryContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    & table {
      & th {
        ${theme.variant.backgroundDefault({
          background: { index: 'gray', value: 'v700' }
        })}
        padding: 1rem;
        text-align: left;
        ${theme.variant.colorDefault({
          color: { index: 'gray', value: 'v100' }
        })}
        font-size: 1.4rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 0.8rem;
        }
        &:last-child {
          border-top-right-radius: 0.8rem;
        }
      }

      & td {
        ${theme.variant.backgroundDefault({
          background: { index: 'gray', value: 'v300' }
        })}
        ${theme.variant.colorDefault({
          color: { index: 'gray', value: 'v100' }
        })}
        ${theme.border.borderTopDefault({
          width: 4,
          style: 'solid',
          color: { index: 'gray', value: 'v800' }
        })}
        ${theme.font.fontSizeStaticDefault({ value: 1.4 })}
        ${theme.font.fontLineHeightDefault('160%')}
        ${theme.padding.paddingStatic({ value: 1 })}
        &:first-child {
          width: 50%;
        }
      }
    }
  `}
`;

export const StatusContainer = styled.span<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;

      ${props.variant?.background &&
      css`
        ${theme.variant.backgroundDefault(props.variant)}
      `}
    }
  `}
`;
