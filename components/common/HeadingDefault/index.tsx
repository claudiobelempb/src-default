import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styled from './Heading.module';

const HeadingDefault: React.FC<TypeDefault> = ({ children, ...props }) => {
  return (
    <Styled.HeadingDefaultContainer
      as={props.as}
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      effectDefault={props.effectDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      fontSizeStaticDefault={props.fontSizeStaticDefault}
      fontSizeDynamicDefault={props.fontSizeDynamicDefault}
      textTransformDefault={props.textTransformDefault}
      textAlignDefault={props.textAlignDefault}
      textTitleDefault={props.textTitleDefault}
      textParagraphDefault={props.textParagraphDefault}
      fontFamilyDefault={props.paddingTopDefault}
      fontStyleDefault={props.fontStyleDefault}
      fontLineHeightDefault={props.fontLineHeightDefault}
      textDecoretionlineThrough={props.textDecoretionlineThrough}
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
      paddingDefault={props.paddingDefault}
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
      backgroundColorDefault={props.backgroundColorDefault}
      backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
      textColorDefault={props.textColorDefault}
      iconDefault={props.iconDefault}
    >
      {children}
    </Styled.HeadingDefaultContainer>
  );
};

export { HeadingDefault };
