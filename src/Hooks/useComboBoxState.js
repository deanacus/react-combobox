import { useContext } from 'react';

const useComboBoxState = () => {
  const { state } = useContext(ComboBoxContext);
  return state;
};

export default useComboBoxState;
