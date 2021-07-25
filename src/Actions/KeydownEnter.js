const KeydownEnter = (state) => ({
  ...state,
  inputValue:
    state.activeOpt !== null ? state.activeOpt.label : state.inputValue,
  listBoxHasFocus: false,
  listBoxExpanded: false,
});

export default KeydownEnter;
