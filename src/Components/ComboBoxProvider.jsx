import { useReducer } from 'react';
import { ComboBoxContext, reducer } from '../State';

const defaultState = {
  inputValue: '',
  inputHasFocus: false,
  listBoxExpanded: false,
  listBoxHasFocus: false,
  unfilteredOpts: [],
  filteredOpts: [],
  activeOptIdx: null,
  activeOpt: null,
};

const ComboBoxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ComboBoxContext.Provider value={{ state, dispatch }}>
      {children}
    </ComboBoxContext.Provider>
  );
};

export default ComboBoxProvider;
