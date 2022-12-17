import styled, { css } from 'styled-components';
import { VariantObjDefault } from '../../../assets/themes/functions/colorDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerNavLink = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    width: max-content;
    transition: all 0.25s ease-in;
    border: 3px solid transparent;
    color: ${VariantObjDefault[props.variant?.color?.index || 'gray'][
      props.variant?.color?.value || 'v500'
    ]};
    border-top: 3px solid
      ${VariantObjDefault[props.variant?.color?.index || 'default'][
        props.variant?.color?.value || 'transparent'
      ]};
    border-bottom: 3px solid
      ${VariantObjDefault[props.variant?.color?.index || 'default'][
        props.variant?.color?.value || 'transparent'
      ]};

    ${props.isHover &&
    css`
      &:hover {
        filter: brightness(0.9);
        color: ${VariantObjDefault[props.variant?.color?.index || 'green'][
          props.variant?.color?.value || 'v500'
        ]};
        border-bottom: 3px solid
          ${VariantObjDefault[props.variant?.color?.index || 'green'][
            props.variant?.color?.value || 'v500'
          ]};
      }
    `}

    & a.active {
      filter: brightness(0.9);
      color: ${VariantObjDefault[props.variant?.color?.index || 'green'][
        props.variant?.color?.value || 'v500'
      ]};
    }

    ${props.positionDefault && props.positionDefault()};
    ${props.effectDefault && props.effectDefault()};
    ${props.afterDefault && props.afterDefault()};
    ${props.beforeDefault && props.beforeDefault()};
    ${props.backgroundImgDefault && props.backgroundImgDefault()};
    /* Padding Static */
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

    /*MARGIN  */
    ${props.borderRadiusDefault && props.borderRadiusDefault()};
    ${props.borderDefault && props.borderDefault()};
    /*FONT SIZE DYNAMIC */
    ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()}
    ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()}
    /*FONT SIZE STATIC */
    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};
    ${props.textHoverDefault && props.textHoverDefault()};
  `}
`;
