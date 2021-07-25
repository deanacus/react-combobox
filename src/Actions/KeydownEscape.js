const KeydownEscape = (state) => ({
  ...state,
  inputValue: '',
  listBoxHasFocus: false,
  listBoxExpanded: false,
});

export default KeydownEscape;
