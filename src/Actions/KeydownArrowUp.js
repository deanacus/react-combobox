const KeydownArrowUp = ({ activeOptIdx, filteredOpts, ...rest }) => {
  if (!filteredOpts.length) {
    return {
      ...rest,
      filteredOpts,
      activeOptIdx: null,
      activeOpt: null,
    };
  }

  const lastOptIdx = filteredOpts.length - 1;
  const newActiveOptIdx =
    activeOptIdx === lastOptIdx || activeOptIdx === null ? 0 : activeOptIdx - 1;
  return {
    ...rest,
    filteredOpts,
    listBoxHasFocus: true,
    activeOptIdx: newActiveOptIdx,
    activeOpt: filteredOpts[newActiveOptIdx],
  };
};

export default KeydownArrowUp;
