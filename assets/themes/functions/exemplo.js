export const VarianArrayDefault = {
  primary: {
    v50: '#e6e7ee',
    v100: '#b3b5c9',
    v200: '#8e92af',
    v300: '#5a608b',
    v400: '#3a4175',
    v500: '#091152',
    v600: '#080f4b',
    v700: '#060c3a',
    v800: '#05092d',
    v900: '#040722'
  },
  secondary: {
    v50: '#fef6e7',
    v100: '#fce3b5',
    v200: '#fad591',
    v300: '#f8c25f',
    v400: '#f7b640',
    v500: '#f5a410',
    v600: '#df950f',
    v700: '#ae740b',
    v800: '#875a09',
    v900: '#674507'
  },
  default: {
    none: 'none',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  }
};

let valuesArray = Object.values(VarianArrayDefault);

for (let value of valuesArray) {
  console.log(VarianArrayDefault[value]);
}
