import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Content.module';

export function ContentDefault({ ...props }: TypeDefault) {
  return (
    <Styles.ContentDefaultStyle
      effectDefault={props.effectDefault}
      beforeDefault={props.beforeDefault}
      afterDefault={props.afterDefault}
      positionDefault={props.positionDefault}
      backgroundImgDefault={props.backgroundImgDefault}
      heightStaticDefault={props.heightStaticDefault}
      heightDynamicDefault={props.heightDynamicDefault}
      widthStaticDefault={props.widthStaticDefault}
      widthDynamicDefault={props.widthDynamicDefault}
      gridDefault={props.gridDefault}
      gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
      gridTemplateColumnsStaticDefault={props.gridTemplateColumnsStaticDefault}
      gridTemplateRowsDefault={props.gridTemplateRowsDefault}
      gridColumnDefault={props.gridColumnDefault}
      gridRowDefault={props.gridRowDefault}
      overallDefault={props.overallDefault}
      flexDirectionDefault={props.flexDirectionDefault}
      flexGapDefault={props.flexGapDefault}
      flexGrowDefault={props.flexGrowDefault}
      flexWrapDefault={props.flexWrapDefault}
      justifyContentDefault={props.justifyContentDefault}
      alignItemsDefault={props.alignItemsDefault}
      alignSelfDefault={props.alignSelfDefault}
      flexBasisDefault={props.flexBasisDefault}
      backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
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
      variant={props.variant}
    >
      {props.children && props.children}
    </Styles.ContentDefaultStyle>
  );
}
