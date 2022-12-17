import { css } from 'styled-components';

type TypeDisplayPropsDefault = {
  type?:
    | 'flex-direction'
    | 'align-items'
    | 'justify-content'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
  value?:
    | 'flex'
    | 'grid'
    | 'block'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'none'
    | 'initial'
    | 'inherit'
    | 'unset';
};

export const flexDefault = ({ value }: TypeDisplayPropsDefault) =>
  css`
    display: ${value && value};
  `;
