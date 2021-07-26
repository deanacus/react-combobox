import { useContext } from 'react';
import { ComboBoxContext } from '../State';

const useComboBoxDispatch = () => {
  const { dispatch } = useContext(ComboBoxContext);
  return dispatch;
};

export default useComboBoxDispatch;
