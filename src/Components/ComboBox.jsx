import Input from './Input';
import ListBox from './ListBox';
import ComboBoxProvider from './ComboBoxProvider';
import useComboBoxDispatch from '../Hooks/useComboBoxDispatch';

const ComboBox = ({
  label,
  id,
  options = [],
  onChange,
  placeholder,
  disabled,
  error,
  required,
  helperText,
}) => {
  const dispatch = useComboBoxDispatch();

  useEffect(() => {
    dispatch({
      type: 'SET_INITIAL_OPTIONS',
      payload: {
        options,
      },
    });
  });

  return (
    <ComboBoxProvider>
      <Input
        label={label}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        helperText={helperText}
        error={error}
        onChange={onChange}
      />
      <ListBox id={id} label={label} />
    </ComboBoxProvider>
  );
};

export default ComboBox;
