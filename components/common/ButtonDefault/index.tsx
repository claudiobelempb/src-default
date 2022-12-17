import { ButtonHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './Button.module';

interface ButtonDefaultTypes extends ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonDefaultProps = TypeDefault & ButtonDefaultTypes;

export function ButtonDefault({
  children,
  title,
  isIconLeft = true,
  isIconRight,
  disabled,
  ...props
}: ButtonDefaultProps) {
  return (
    <Styles.ButtonDefaultContainer
      disabled={disabled}
      paddingX={props.paddingX}
      paddingY={props.paddingY}
      display={props.display}
      zindex={props.zindex}
      Visibility={props.Visibility}
      boxShadow={props.boxShadow}
      widthStatic={props.widthStatic}
      widthDynamic={props.widthDynamic}
      heightStatic={props.heightStatic}
      heightDynamic={props.heightDynamic}
      border={props.border}
      borderTop={props.borderTop}
      borderRight={props.borderRight}
      borderLeft={props.borderLeft}
      borderBottom={props.borderBottom}
      borderRadius={props.borderRadius}
      borderRadiusTopLeft={props.borderRadiusTopLeft}
      borderRadiusTopRight={props.borderRadiusTopRight}
      borderRadiusBottomLeft={props.borderRadiusBottomLeft}
      borderRadiusBottomRight={props.borderRadiusBottomRight}
      onClick={props.onClick}
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      effectDefault={props.effectDefault}
      effectHoverDefault={props.effectHoverDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      fontSizeStaticDefault={props.fontSizeStaticDefault}
      fontSizeDynamicDefault={props.fontSizeDynamicDefault}
      textTransformDefault={props.textTransformDefault}
      textAlignDefault={props.textAlignDefault}
      textDecoretionlineThrough={props.textDecoretionlineThrough}
      flexDefault={props.flexDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
      flexDirectionDefault={props.flexDirectionDefault}
      flexGapDefault={props.flexGapDefault}
      justifyContentDefault={props.justifyContentDefault}
      alignItemsDefault={props.alignItemsDefault}
      alignSelfDefault={props.alignSelfDefault}
      flexBasisDefault={props.flexBasisDefault}
      flexGrowDefault={props.flexGrowDefault}
      iconDefault={props.iconDefault}
      paddingDefault={props.paddingDefault}
      textColorDefault={props.textColorDefault}
      backgroundColorDefault={props.backgroundColorDefault}
      borderDefault={props.borderDefault}
      borderTopDefault={props.borderTopDefault}
      borderRightDefault={props.borderTopDefault}
      borderBottomDefault={props.borderBottomDefault}
      borderLeftDefault={props.borderLeftDefault}
      borderRadiusDefault={props.borderRadiusDefault}
      borderRadiusTopRightDefault={props.borderRadiusTopRightDefault}
      borderRadiusTopLeftDefault={props.borderRadiusTopLeftDefault}
      borderRadiusBottomRightDefault={props.borderRadiusBottomRightDefault}
      borderRadiusBottomLeftDefault={props.borderRadiusBottomLeftDefault}
      paddingStaticDefault={props.paddingStaticDefault}
      paddingStaticXDefault={props.paddingStaticXDefault}
      paddingStaticYDefault={props.paddingStaticYDefault}
      paddingDynamicDefault={props.paddingDynamicDefault}
      paddingDynamicXDefault={props.paddingDynamicXDefault}
      paddingDynamicYDefault={props.paddingDynamicYDefault}
      paddingTopDefault={props.paddingTopDefault}
      paddingRightDefault={props.paddingRightDefault}
      paddingBottomDefault={props.paddingBottomDefault}
      paddingLeftDefault={props.paddingLeftDefault}
      marginStaticDefault={props.marginStaticDefault}
      marginStaticXDefault={props.marginStaticXDefault}
      marginStaticYDefault={props.marginStaticYDefault}
      marginDynamicDefault={props.marginDynamicDefault}
      marginDynamicXDefault={props.marginDynamicXDefault}
      marginDynamicYDefault={props.marginDynamicYDefault}
      marginTopDefault={props.marginTopDefault}
      marginRightDefault={props.marginRightDefault}
      marginBottomDefault={props.marginBottomDefault}
      marginLeftDefault={props.marginLeftDefault}
      positionDefault={props.positionDefault}
      zIndexDefault={props.zIndexDefault}
      variant={props.variant}
      type={props.type}
    >
      {isIconLeft && children}
      {title ? title : ''}
      {isIconRight && children}
    </Styles.ButtonDefaultContainer>
  );
}
