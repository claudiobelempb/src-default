import styled, { css } from 'styled-components';
import {
  borderBottomDefault,
  borderDefault,
  borderLeftDefault,
  borderRadiusBottomLeftDefault,
  borderRadiusBottomRightDefault,
  borderRadiusDefault,
  borderRadiusTopLeftDefault,
  borderRadiusTopRightDefault,
  borderRightDefault,
  borderTopDefault
} from '../../../assets/themes/functions/borderDefault';
import {
  boxShadowDefault,
  VariantObjDefault
} from '../../../assets/themes/functions/colorDefault';
import {
  heightDynamicDefault,
  heightStaticDefault
} from '../../../assets/themes/functions/heightDefault';
import {
  displayDefault,
  overflowDefault,
  visibilityDefault,
  zIndexDefault
} from '../../../assets/themes/functions/utilsDefault';
import {
  widthDynamicDefault,
  widthStaticDefault
} from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const Container = styled.fieldset`
  display: flex;
  align-items: flex-end;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 1rem;
  border: none;
`;

export const SelectDefaultContainer = styled.select<TypeDefault>`
  ${({ theme, as, variant, ...props }) => css`
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    flex-grow: 1;
    /* width: 100%; */
    outline: none;
    background-color: ${VariantObjDefault[
      variant?.background?.index || 'primary'
    ][variant?.background?.value || 'v500']};

    color: ${VariantObjDefault[variant?.color?.index || 'primary'][
      variant?.color?.value || 'v500'
    ]};
    outline: none;
    padding: 1rem 2rem;

    border: 1px solid hsla(0, 0%, 40%, 0.4);
    /*HEIGHT DEFAULT  */
    ${props.heightStatic && heightStaticDefault(props.heightStatic)}
    ${props.heightDynamic && heightDynamicDefault(props.heightDynamic)}

    /*WIDTH DEFAULT  */
    ${props.widthStatic && widthStaticDefault(props.widthStatic)}
    ${props.widthDynamic && widthDynamicDefault(props.widthDynamic)}

    /*UTILS DEFAULT */
    ${props.display && displayDefault(props.display)}
    ${props.zindex && zIndexDefault(props.zindex)}
    ${props.Visibility && visibilityDefault(props.Visibility)}
    ${props.overflow && overflowDefault(props.overflow)}
    ${props.boxShadow && boxShadowDefault(props.boxShadow)}
    /*BORDER DEFAULT */
    ${props.border && borderDefault(props.border)}
    ${props.borderTop && borderTopDefault(props.borderTop)};
    ${props.borderRight && borderRightDefault(props.borderRight)};
    ${props.borderBottom && borderBottomDefault(props.borderBottom)};
    ${props.borderLeft && borderLeftDefault(props.borderLeft)};

    /*BORDER RADIUS DEFAULT */
    ${props.borderRadius && borderRadiusDefault(props.borderRadius)};
    ${props.borderRadiusTopRight &&
    borderRadiusTopRightDefault(props.borderRadiusTopRight)};
    ${props.borderRadiusTopLeft &&
    borderRadiusTopLeftDefault(props.borderRadiusTopLeft)};
    ${props.borderRadiusBottomRight &&
    borderRadiusBottomRightDefault(props.borderRadiusBottomRight)};
    ${props.borderRadiusBottomLeft &&
    borderRadiusBottomLeftDefault(props.borderRadiusBottomLeft)};

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
    /*BORDER RADIUS DEFAULT */
    ${props.borderRadiusDefault && props.borderRadiusDefault()};
    ${props.borderRadiusTopRightDefault && props.borderRadiusTopRightDefault()};
    ${props.borderRadiusTopLeftDefault && props.borderRadiusTopLeftDefault()};
    ${props.borderRadiusBottomRightDefault &&
    props.borderRadiusBottomRightDefault()};
    ${props.borderRadiusBottomLeftDefault &&
    props.borderRadiusBottomLeftDefault()};
    /*BORDER DEFAULT */
    ${props.borderDefault && props.borderDefault()};
    ${props.borderTopDefault && props.borderTopDefault()};
    ${props.borderRightDefault && props.borderRightDefault()};
    ${props.borderBottomDefault && props.borderBottomDefault()};
    ${props.borderLeftDefault && props.borderLeftDefault()};
    /*HEIGHT DEFAULT  */
    ${props.heightStaticDefault && props.heightStaticDefault()}
    ${props.heightDynamicDefault && props.heightDynamicDefault()}
    /*WIDTH DEFAULT  */
    ${props.widthStaticDefault && props.widthStaticDefault()}
    ${props.widthDynamicDefault && props.widthDynamicDefault()}
    /*AFTER DEFAULT  */
    ${props.afterDefault && props.afterDefault()};
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && props.beforeDefault()};
    /*FONT DEFAULT  */
    ${props.textTransformDefault && props.textTransformDefault()};
    ${props.textDecoretionlineThrough && props.textDecoretionlineThrough()};
    ${props.fontSizeStaticDefault && props.fontSizeStaticDefault()};
    ${props.fontSizeDynamicDefault && props.fontSizeDynamicDefault()};
    ${props.textAlignDefault && props.textAlignDefault()};
    ${props.textColorDefault && props.textColorDefault()};
    ${props.backgroundColorDefault && props.backgroundColorDefault()};
    /*FLEX DEFAULT  */

    &::placeholder {
      background-color: ${VariantObjDefault[
        variant?.background?.index || 'default'
      ][variant?.background?.value || 'transparent']};

      color: ${VariantObjDefault[variant?.color?.index || 'default'][
        variant?.color?.value || 'white'
      ]};
    }
  `}
`;

export const LabelDefaultContainer = styled.label<TypeDefault>`
  ${({ theme, variant, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
    ${theme.variant.backgroundDefault({
      background: { index: 'default', value: 'transparent' }
    })};
    ${theme.variant.colorDefault({ color: { index: 'gray', value: 'v100' } })};
  `}
`;
