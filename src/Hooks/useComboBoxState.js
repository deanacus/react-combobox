import { useContext } from 'react';
import { ComboBoxContext } from '../State';

const useComboBoxState = () => {
  const { state } = useContext(ComboBoxContext);
  return state;
};

export default useComboBoxState;
