import styled, { css } from 'styled-components';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerDefault = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* display: flex; */
    /* flex-direction: column; */
    gap: 1.5rem;
    position: relative;
    width: 100%;
    /* background-color: red; */
    /*UTILS DEFAULT */
    ${props.zIndexDefault && props.zIndexDefault()}
    ${props.imparDefault && props.imparDefault()}
    ${props.parDefault && props.parDefault()}
    

    /*COLORES DEFAULT */
    ${props.backgroundColorDefault && props.backgroundColorDefault()}
    ${props.backgroundLinearGradientDefault &&
    props.backgroundLinearGradientDefault()}
    ${props.textColorDefault && props.textColorDefault()}
    ${props.iconDefault && props.iconDefault()}


    /* Padding Static */
    ${theme.padding.paddingX({ value: 5, unit: 'rem' })};
    ${theme.padding.paddingY({ value: 2, unit: 'rem' })};
    ${props.paddingDefault && props.paddingDefault()};
    ${props.paddingStaticDefault && props.paddingStaticDefault()}
    ${props.paddingStaticXDefault && props.paddingStaticXDefault()}
    ${props.paddingStaticYDefault && props.paddingStaticYDefault()}
    ${props.paddingDynamicDefault && props.paddingDynamicDefault()}
    ${props.paddingDynamicXDefault && props.paddingDynamicXDefault()}
    ${props.paddingDynamicYDefault && props.paddingDynamicYDefault()}
    ${props.paddingTopDefault && props.paddingTopDefault()}
    ${props.paddingRightDefault && props.paddingRightDefault()}
    ${props.paddingBottomDefault && props.paddingBottomDefault()}
    ${props.paddingLeftDefault && props.paddingLeftDefault()}
    /* Padding Static */
    ${props.marginDefault && props.marginDefault()};
    ${props.marginStaticDefault && props.marginStaticDefault()}
    ${props.marginStaticXDefault && props.marginStaticXDefault()}
    ${props.marginStaticYDefault && props.marginStaticYDefault()}
    ${props.marginDynamicDefault && props.marginDynamicDefault()}
    ${props.marginDynamicXDefault && props.marginDynamicXDefault()}
    ${props.marginDynamicYDefault && props.marginDynamicYDefault()}
    ${props.marginTopDefault && props.marginTopDefault()}
    ${props.marginRightDefault && props.marginRightDefault()}
    ${props.marginBottomDefault && props.marginBottomDefault()}
    ${props.marginLeftDefault && props.marginLeftDefault()}
    ${props.flexDefault && props.flexDefault()}
    ${props.gridDefault && props.gridDefault()}
    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    ${props.overallDefault && props.overallDefault()}

     // sm applies to x-small devices (portrait phones, less than 576px)
     @media (max-width: 320px) {
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `}
`;
