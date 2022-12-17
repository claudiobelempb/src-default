import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';

type TypeGridPropsDefault = {
  minMax?: TypeThemeNumberDefault;
  start?: TypeThemeNumberDefault;
  span?: 'span' | '';
  repeat?: 'rows' | 'columns';
  end?: TypeThemeNumberDefault;
  type?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
};

/*
  gridTemplateColumnsDefault?: () => FlattenSimpleInterpolation;
  gridTemplateColumnsStaticDefault?: () => FlattenSimpleInterpolation;
  gridTemplateRowsDefault?: () => FlattenSimpleInterpolation;
  gridColumnDefault?: () => FlattenSimpleInterpolation;
  gridRowDefault?: () => FlattenSimpleInterpolation;
  overallDefault?: () => FlattenSimpleInterpolation;

  gridTemplateColumnsDefault={props.gridTemplateColumnsDefault}
  gridTemplateColumnsStaticDefault={props.gridTemplateColumnsStaticDefault}
  gridTemplateRowsDefault={props.gridTemplateRowsDefault}
  gridColumnDefault={props.gridColumnDefault}
  gridRowDefault={props.gridRowDefault}
  overallDefault={props.overallDefault}

  ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
  ${props.gridTemplateColumnsStaticDefault && props.gridTemplateColumnsStaticDefault()}
  ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
  ${props.gridColumnDefault && props.gridColumnDefault()}
  ${props.gridRowDefault && props.gridRowDefault()}
  ${props.overallDefault && props.overallDefault()}
*/

export const gridTemplateColumnsDefault = (
  repeatColumns: TypeThemeNumberDefault,
  minMax?: TypeThemeNumberDefault
) =>
  css`
    display: grid;
    grid-template-columns:
      [container-start] repeat(${repeatColumns}, minmax(min-content, 1fr))
      [container-end];

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `;

export const gridTemplateColumnsStaticDefault = (
  repeatColumns: TypeThemeNumberDefault,
  minMax?: TypeThemeNumberDefault
) =>
  css`
    grid-template-columns: repeat(
      ${(repeatColumns && repeatColumns) || 'auto-fit'},
      minmax(${(minMax && minMax) || 3}0rem, 1fr)
    );
    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)) !important;
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `;

export const gridTemplateRowsDefault = (repeatRows: TypeThemeNumberDefault) =>
  css`
    grid-template-rows: repeat(${repeatRows}, min-content);
    justify-content: center;
    /* background-color: green; */
    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `;

export const gridColumnDefault = ({ start, span, end }: TypeGridPropsDefault) =>
  css`
    ${span === 'span' &&
    css`
      grid-column: ${start} / ${span} ${end};
      // sm applies to x-small devices (portrait phones, less than 576px)
      @media (max-width: 320px) {
        grid-column: auto / auto !important;
      }

      // md applies to small devices (landscape phones, less than 768px)
      @media (min-width: 320px) and (max-width: 576px) {
        grid-column: auto / auto !important;
      }

      // lg applies to medium devices (tablets, less than 992px)
      @media (min-width: 576px) and (max-width: 768px) {
        grid-column: auto / auto !important;
      }

      // xl applies to large devices (desktops, less than 1200px)
      @media (min-width: 768px) and (max-width: 992px) {
        grid-column: auto / auto !important;
      }

      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 992px) and (max-width: 1200px) {
      }
      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 1200px) and (max-width: 1400px) {
      }
    `}
    ${span === '' &&
    css`
      grid-column: ${start} / ${end};
      // sm applies to x-small devices (portrait phones, less than 576px)
      @media (max-width: 320px) {
        grid-column: auto / auto !important;
      }

      // md applies to small devices (landscape phones, less than 768px)
      @media (min-width: 320px) and (max-width: 576px) {
        grid-column: auto / auto !important;
      }

      // lg applies to medium devices (tablets, less than 992px)
      @media (min-width: 576px) and (max-width: 768px) {
        grid-column: auto / auto !important;
      }

      // xl applies to large devices (desktops, less than 1200px)
      @media (min-width: 768px) and (max-width: 992px) {
        grid-column: auto / auto !important;
      }

      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 992px) and (max-width: 1200px) {
      }
      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 1200px) and (max-width: 1400px) {
      }
    `}
  `;

export const gridRowDefault = ({ start, span, end }: TypeGridPropsDefault) =>
  css`
    ${span === 'span' &&
    css`
      grid-row: ${start} / ${span} ${end};
      // sm applies to x-small devices (portrait phones, less than 576px)
      @media (max-width: 320px) {
        grid-row: auto / auto !important;
      }

      // md applies to small devices (landscape phones, less than 768px)
      @media (min-width: 320px) and (max-width: 576px) {
        grid-row: auto / auto !important;
      }

      // lg applies to medium devices (tablets, less than 992px)
      @media (min-width: 576px) and (max-width: 768px) {
        grid-row: auto / auto !important;
      }

      // xl applies to large devices (desktops, less than 1200px)
      @media (min-width: 768px) and (max-width: 992px) {
        grid-row: auto / auto !important;
      }

      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 992px) and (max-width: 1200px) {
      }
      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 1200px) and (max-width: 1400px) {
      }
    `}
    ${span === '' &&
    css`
      grid-row: ${start} / ${end};
      // sm applies to x-small devices (portrait phones, less than 576px)
      @media (max-width: 320px) {
        grid-row: auto / auto !important;
      }

      // md applies to small devices (landscape phones, less than 768px)
      @media (min-width: 320px) and (max-width: 576px) {
        grid-row: auto / auto !important;
      }

      // lg applies to medium devices (tablets, less than 992px)
      @media (min-width: 576px) and (max-width: 768px) {
        grid-row: auto / auto !important;
      }

      // xl applies to large devices (desktops, less than 1200px)
      @media (min-width: 768px) and (max-width: 992px) {
        grid-row: auto / auto !important;
      }

      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 992px) and (max-width: 1200px) {
      }
      // xxl applies to x-large devices (large desktops, less than 1400px)
      @media (min-width: 1200px) and (max-width: 1400px) {
      }
    `}
  `;

export const overallDefault = () =>
  css`
    grid-column: container-start / container-end;
    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
    /* background-color: blue; */
  `;
