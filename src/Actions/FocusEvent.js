const FocusEvent = (state) => ({
  ...state,
  inputHasFocus: !!state.filteredOpts.length,
  listBoxExpanded: !!state.filteredOpts.length,
});

export default FocusEvent;
