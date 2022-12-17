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
  colorDefault,
  variantDefault,
  VariantObjDefault
} from '../../../assets/themes/functions/colorDefault';
import { flexGrowDefault } from '../../../assets/themes/functions/flexDefault';
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

export const InputDefaultContainer = styled.input<TypeDefault>`
  border: none;
  ${({ theme, ...props }) => css`
    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='number'] {
      ${props.flexGrowDefault && flexGrowDefault(props.flexGrowDefault)}
      ${props.widthStatic && widthStaticDefault(props.widthStatic)}
      padding: 1rem 2rem;
      /* border: 2px solid transparent; */
      /*BORDER DEFAULT */
      
      ${props.borderTop && borderTopDefault(props.borderTop)};
      ${props.borderRight && borderRightDefault(props.borderRight)};
      ${props.borderBottom && borderBottomDefault(props.borderBottom)};
      ${props.borderLeft && borderLeftDefault(props.borderLeft)};
    
      ${
        props.variant
          ? variantDefault(props.variant)
          : variantDefault({
              focus: { color: { index: 'gray', value: 'v100' } },
              placeholder: { color: { index: 'gray', value: 'v500' } },
              border: { color: { index: 'blue', value: 'v500' } },
              background: { index: 'default', value: 'transparent' },
              color: { index: 'gray', value: 'v100' }
            })
      };

      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      ${
        props.disabled &&
        css`
          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        `
      }

      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;


      ${
        props.border
          ? borderDefault(props.border)
          : borderDefault({
              width: 2,
              style: 'solid',
              variant: {
                border: { color: { index: 'default', value: 'transparent' } }
              }
            })
      }

      &:focus {
        ${
          props.variant?.focus?.color &&
          css`
            border-color: ${VariantObjDefault[
              props.variant?.focus?.color?.index
            ][props.variant?.focus?.color?.value]};
          `
        }
        border-radius: 0.5rem;
      }

      &::placeholder {
        ${
          props.variant?.placeholder?.background &&
          css`
            background-color: ${VariantObjDefault[
              props.variant?.placeholder?.background?.index
            ][props.variant?.placeholder?.background?.value]};
          `
        }
        ${
          props.variant?.placeholder?.color &&
          css`
            color: ${VariantObjDefault[props.variant?.placeholder?.color.index][
              props.variant?.placeholder?.color.value
            ]};
          `
        }
      };

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
      ${
        props.borderRadiusTopRight &&
        borderRadiusTopRightDefault(props.borderRadiusTopRight)
      };
      ${
        props.borderRadiusTopLeft &&
        borderRadiusTopLeftDefault(props.borderRadiusTopLeft)
      };
      ${
        props.borderRadiusBottomRight &&
        borderRadiusBottomRightDefault(props.borderRadiusBottomRight)
      };
      ${
        props.borderRadiusBottomLeft &&
        borderRadiusBottomLeftDefault(props.borderRadiusBottomLeft)
      };

      /*COLOR DEFAULT */
     
    }
    

    & [type='submit'],
    & [type='select'],
    & [type='reset'] {
      flex-grow: 1;
      /* width: 100%; */
      padding: 1rem 2rem;
      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;
      background-color: ${
        VariantObjDefault[props.variant?.background?.index || 'default'][
          props.variant?.background?.value || 'transparent'
        ]
      };

      color: ${
        VariantObjDefault[props.variant?.color?.index || 'primary'][
          props.variant?.color?.value || 'v500'
        ]
      };

      ${
        props.border &&
        borderDefault({
          width: 2,
          style: 'solid',
          variant: { border: { color: { index: 'red', value: 'v50' } } }
        })
      }


      &:focus {
        ${
          props.border &&
          borderDefault({
            width: 2,
            style: 'solid',
            variant: { border: { color: { index: 'red', value: 'v50' } } }
          })
        }
        
        border-radius: 0.5rem;
        /* outline: none; */
        border-color: ${
          VariantObjDefault[props.variant?.border?.color.index || 'primary'][
            props.variant?.border?.color.value || 'v500'
          ]
        };
      }

      &::placeholder {
        ${
          props.variant?.placeholder?.background &&
          css`
            background-color: ${VariantObjDefault[
              props.variant?.placeholder.background?.index
            ][props.variant?.placeholder.background?.value]};
          `
        }  
        
        ${
          props.variant?.placeholder?.color &&
          css`
            color: ${VariantObjDefault[props.variant?.placeholder.color?.index][
              props.variant?.placeholder.color?.value
            ]};
          `
        }
      }

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
      ${
        props.borderRadiusTopRight &&
        borderRadiusTopRightDefault(props.borderRadiusTopRight)
      };
      ${
        props.borderRadiusTopLeft &&
        borderRadiusTopLeftDefault(props.borderRadiusTopLeft)
      };
      ${
        props.borderRadiusBottomRight &&
        borderRadiusBottomRightDefault(props.borderRadiusBottomRight)
      };
      ${
        props.borderRadiusBottomLeft &&
        borderRadiusBottomLeftDefault(props.borderRadiusBottomLeft)
      };

      /*COLOR DEFAULT */
      ${
        props.backgroundDefault &&
        colorDefault.backgroundDefault({
          background: { index: 'warning', value: 'v500' }
        })
      }
      ${props.focusDefault && colorDefault.focusDefault(props.focusDefault)}
      ${
        props.placeholderDefault &&
        colorDefault.placeholderDefault(props.placeholderDefault)
      }
      ${props.colorDefault && colorDefault.colorDefault(props.colorDefault)}
      ${props.hoverDefault && colorDefault.hoverDefault(props.hoverDefault)}
      ${
        props.boxShadowDefault &&
        colorDefault.boxShadowDefault(props.boxShadowDefault)
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
