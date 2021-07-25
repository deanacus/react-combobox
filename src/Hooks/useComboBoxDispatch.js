import { useContext } from 'react';

const useComboBoxDispatch = () => {
  const { dispatch } = useContext(ComboBoxContext);
  return dispatch;
};

export default useComboBoxDispatch;
