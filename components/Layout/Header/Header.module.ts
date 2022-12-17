import styled, { css } from 'styled-components';
import { VariantObjDefault } from '../../../assets/themes/functions/colorDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const HeaderContainer = styled.header<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    ${theme.variant.backgroundDefault({
      background: { index: 'primary', value: 'v500' }
    })}

    background-color: ${VariantObjDefault[
      props.variant?.background?.index || 'default'
    ][props.variant?.background?.value || 'transparent']};

    color: ${VariantObjDefault[props.variant?.color?.index || 'primary'][
      props.variant?.color?.value || 'v500'
    ]};

    & div {
      display: flex;
      gap: 1rem;
    }

    & svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;
