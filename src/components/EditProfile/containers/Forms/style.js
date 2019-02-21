export const inputStyles = error => ({
  control: styles => ({ ...styles, height: '50px', borderRadius: '2px', borderColor: error ? '#d8d8d8' : '#ed7f7e' }),
  placeholder: styles => ({
    ...styles,
    lineHeight: '48px',
    color: '#aaa',
    height: '50px',
  }),
  input: styles => ({
    ...styles,
    lineHeight: '48px',
    paddingLeft: '20px',
    paddingRight: '10px',
    color: '#aaa',
    height: '50px',
  }),
  singleValue: styles => ({
    ...styles,
    display: 'initial',
  }),
});

export const style = {
  dNone: { display: 'none' },
  dBlock: { display: 'block' },
  bColorRed: { borderColor: '#ed7f7e' },
  bColorNone: { borderColor: '' },
};

export const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};
