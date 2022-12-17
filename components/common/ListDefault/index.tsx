import { TypeDefault } from '@assets/styles/themes/TypeDefault';
import * as Styles from './List.module';

const ListDefault: React.FC<TypeDefault> = ({ ...props }) => {
  switch (props.model) {
    case 1: {
      return (
        <Styles.ListDefaultContainer as={props.as}>
          {props.children}
        </Styles.ListDefaultContainer>
      );
    }
    default: {
      return (
        <Styles.ListDefaultContainer
          as={props.as}
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
        >
          {props.children}
        </Styles.ListDefaultContainer>
      );
    }
  }
};

export { ListDefault };
