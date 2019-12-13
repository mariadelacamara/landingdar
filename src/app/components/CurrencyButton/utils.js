export const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    height: '62px',
    width: '45px',
    cursor: '',
    border: isFocused ? 0 : 0,
    boxShadow: isFocused ? 0 : 0,
    '&:hover': {
      border: isFocused ? 0 : 0
    }
  }),
  menu: (styles) => ({...styles, width: '210px', backgroundColor: 'grey', color: 'black', position: 'fixed', top: '63px', right: '5px'
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    width: '200px',
    backgroundColor: isFocused && '#00ACEE'
  }),
  singleValue: (styles) => ({ ...styles, textOverflow: 'none' })
};
