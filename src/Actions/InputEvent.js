const InputEvent = ({ unfilteredOpts, ...rest }, payload) => {
  const newFilteredOpts = unfilteredOpts.filter((opt) =>
    opt.label.toLowerCase().includes(payload.value.toLowerCase()),
  );
  return {
    ...rest,
    unfilteredOpts,
    inputValue: payload.value,
    listBoxExpanded: !!newFilteredOpts.length,
    filteredOpts: newFilteredOpts,
    activeOptIdx: newFilteredOpts.length ? 0 : null,
    activeOpt: newFilteredOpts.length ? newFilteredOpts[0] : null,
  };
};

export default InputEvent;
