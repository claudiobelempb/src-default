import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

export const TypeFlexValueDefault = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
  stretch: 'stretch',
  baseline: 'baseline',
  auto: 'auto',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  start: 'start',
  end: 'end',
  left: 'left',
  right: 'right',
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
  nowRap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse',
  repeat: 'repeat',
  noRepeat: 'no-repeat',
  cover: 'cover',
  contain: 'contain'
};

type TypeValueFlexDefault =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'now-rap'
  | 'wrap'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat'
  | 'wrap-reverse';

export type TypeFlexDefault = {
  value?: TypeValueFlexDefault;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  row?: TypeThemeNumberDefault;
  column?: TypeThemeNumberDefault;
  direction?:
  | 'flex-direction'
  | 'align-items'
  | 'justify-content'
  | 'gap'
  | 'row-gap'
  | 'column-gap'
  | 'flex-basis';
};

export type TypeFlexGapDefault = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  row?: TypeThemeNumberDefault;
  column?: TypeThemeNumberDefault;
};

/**
  flexDirectionDefault?: TypeFlexDefault;
  alignSelfDefault?: TypeFlexDefault;
  flexGapDefault?: TypeFlexDefault;
  justifyContentDefault?: TypeFlexDefault;
  alignItemsDefault?: TypeFlexDefault;
  flexBasisDefault?: TypeFlexDefault;
  flexGrowDefault?: TypeFlexDefault;

  flexDirectionDefault={props.flexDirectionDefault}
  alignSelfDefault={props.alignSelfDefault}
  flexGapDefault={props.flexGapDefault}
  justifyContentDefault={props.justifyContentDefault}
  alignItemsDefault={props.alignItemsDefault}
  flexBasisDefault={props.flexBasisDefault}
  flexGrowDefault={props.flexGrowDefault}

  ${props.flexDirectionDefault && flexDefault.flexDirectionDefault(props.flexDirectionDefault)}
  ${props.alignSelfDefault && flexDefault.alignSelfDefault(props.alignSelfDefault)}
  ${props.flexGapDefault && flexDefault.flexGapDefault(props.flexGapDefault)}
  ${props.justifyContentDefault && flexDefault.justifyContentDefault(props.justifyContentDefault)}
  ${props.alignItemsDefault && flexDefault.alignItemsDefault(props.alignItemsDefault)}
  ${props.flexBasisDefault && flexDefault.flexBasisDefault(props.flexBasisDefault)}
  ${props.flexGrowDefault && flexDefault.flexGrowDefault(props.flexGrowDefault)}

*/

export const flexDefault = {
  flexDirectionDefault: ({ value }: TypeFlexDefault) =>
    css`
      flex-direction: ${value};
    `,
  alignSelfDefault: ({ value }: TypeFlexDefault) =>
    css`
      align-self: ${value};
    `,
  flexGapDefault: ({ row = 0, column = 0, unit = 'rem' }: TypeFlexGapDefault) =>
    css`
      gap: ${row && row}${unit} ${column && column}${unit};
    `,
  justifyContentDefault: ({ value }: TypeFlexDefault) =>
    css`
      justify-content: ${value};
    `,
  alignItemsDefault: ({ value }: TypeFlexDefault) =>
    css`
      align-items: ${value};
    `,
  flexBasisDefault: ({ value }: TypeFlexDefault) =>
    css`
      flex-basis: calc(10 * ${value && value}%);
    `,
  flexGrowDefault: ({ value }: TypeFlexDefault) =>
    css`
      flex-grow: ${value && value};
    `,
  flexWrapDefault: (value: 'wrap' | 'nowrap') =>
    css`
      flex-wrap: ${value && value};
    `
};

export const flexDirectionDefault = ({ value }: TypeFlexDefault) =>
  css`
    flex-direction: ${value};
  `;

export const alignSelfDefault = ({ value }: TypeFlexDefault) =>
  css`
    align-self: ${value};
  `;

export const flexGapDefault = ({ row = 0, column = 0 }: TypeFlexDefault) =>
  css`
    gap: ${row && row}rem ${column && column}rem;
  `;

export const justifyContentDefault = ({ value }: TypeFlexDefault) =>
  css`
    justify-content: ${value};
  `;
export const alignItemsDefault = ({ value }: TypeFlexDefault) =>
  css`
    align-items: ${value};
  `;
export const flexBasisDefault = ({ value }: TypeFlexDefault) =>
  css`
    flex-basis: calc(10 * ${value && value}%);

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      flex-basis: 100%;
      justify-content: center;
      align-items: center;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      flex-basis: 100%;
      justify-content: center;
      align-items: center;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      flex-basis: 100%;
      justify-content: center;
      align-items: center;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      flex-basis: 100%;
      justify-content: center;
      align-items: center;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `;

export const flexGrowDefault = ({ value }: TypeFlexDefault) =>
  css`
    flex-grow: ${value && value};
  `;
export const flexWrapDefault = (value: 'wrap' | 'nowrap') =>
  css`
    flex-wrap: ${value && value};

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
      flex-wrap: nowrap;
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
      flex-wrap: nowrap;
    }
  `;
