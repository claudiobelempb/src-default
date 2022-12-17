import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Container.module';

const ContainerDefault = React.forwardRef(
  ({ ...props }: TypeDefault, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Styles.ContainerDefault
        as={props.as}
        flexDefault={props.flexDefault}
        gridDefault={props.gridDefault}
        gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
        gridTemplateRowsDefault={props.gridTemplateRowsDefault}
        gridColumnDefault={props.gridColumnDefault}
        gridRowDefault={props.gridRowDefault}
        overallDefault={props.overallDefault}
        borderDefault={props.borderDefault}
        borderRadiusDefault={props.borderRadiusDefault}
        textHoverDefault={props.textHoverDefault}
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
        backgroundColorDefault={props.backgroundColorDefault}
        backgroundLinearGradientDefault={props.backgroundLinearGradientDefault}
        textColorDefault={props.textColorDefault}
        iconDefault={props.iconDefault}
        zIndexDefault={props.zIndexDefault}
        imparDefault={props.imparDefault}
        parDefault={props.parDefault}
        boxShadowDefault={props.boxShadowDefault}
        paddingX={props.paddingX}
        paddingY={props.paddingY}
      >
        {props.children}
      </Styles.ContainerDefault>
    );
  }
);

export { ContainerDefault };
