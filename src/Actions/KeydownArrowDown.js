const KeydownArrowDown = ({ activeOptIdx, filteredOpts, ...rest }) => {
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
    activeOptIdx === 0 || activeOptIdx === null ? lastOptIdx : activeOptIdx - 1;
  return {
    ...rest,
    filteredOpts,
    listBoxHasFocus: true,
    activeOptIdx: newActiveOptIdx,
    activeOpt: filteredOpts[newActiveOptIdx],
  };
};

export default KeydownArrowDown;
