import styled, { css } from 'styled-components';
import { paddingStaticDefault } from '../../assets/themes/functions/paddingDefault';
import { TypeDefault } from '../../assets/themes/TypeDefault';

export const Layout = styled.main<TypeDefault>`
  ${({ theme, ...props }) => css`
    ${theme.variant.backgroundDefault({
  background: { index: 'primary', value: 'v500' }
})}
${props.paddingStaticDefault && paddingStaticDefault(props.paddingStaticDefault)}
  `}
`;
