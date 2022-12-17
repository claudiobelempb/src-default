import { ImgHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './Img.module';

interface ImgDefaultProps extends ImgHTMLAttributes<HTMLImageElement> {}

type ImgDefaultType = ImgDefaultProps & TypeDefault;

const ImgDefault: React.FC<ImgDefaultType> = ({ ...props }) => {
  return (
    <Styles.FigureDefaultContainer
      {...props}
      src={props.src}
      alt={props.alt}
      positionDefault={props.positionDefault}
      afterDefault={props.afterDefault}
      beforeDefault={props.beforeDefault}
      flexDefault={props.flexDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
      borderDefault={props.borderDefault}
      borderRadiusDefault={props.borderRadiusDefault}
      textColorDefault={props.textColorDefault}
      textHoverDefault={props.textHoverDefault}
      backgroundColorDefault={props.backgroundColorDefault}
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
      marginDefault={props.marginDefault}
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
      imparDefault={props.imparDefault}
      parDefault={props.parDefault}
      boxShadowDefault={props.boxShadowDefault}
      displayDefault={props.displayDefault}
      overflowDefault={props.overflowDefault}
      flexDirectionDefault={props.flexDirectionDefault}
      alignSelfDefault={props.alignSelfDefault}
      flexGapDefault={props.flexGapDefault}
      justifyContentDefault={props.justifyContentDefault}
      alignItemsDefault={props.alignItemsDefault}
      flexBasisDefault={props.flexBasisDefault}
      flexGrowDefault={props.flexGrowDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      effectDefault={props.effectDefault}
      effectHoverDefault={props.effectHoverDefault}
      effectHoverBeforeDefault={props.effectHoverBeforeDefault}
      effectHoverAfterDefault={props.effectHoverAfterDefault}
    >
      <Styles.ImgDefaultContainer
        {...props}
        loading='lazy'
        src={props.src}
        alt={props.alt}
        effectDefault={props.effectDefault}
        effectHoverDefault={props.effectHoverDefault}
        effectHoverBeforeDefault={props.effectHoverBeforeDefault}
        effectHoverAfterDefault={props.effectHoverAfterDefault}
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
        zIndexDefault={props.zIndexDefault}
      />
    </Styles.FigureDefaultContainer>
  );
};

export { ImgDefault };
