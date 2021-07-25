import useComboBoxDispatch from '../Hooks/useComboBoxDispatch';
import useComboBoxState from '../Hooks/useComboBoxState';

const Input = ({
  label,
  id,
  placeholder,
  disabled,
  required,
  helperText,
  error,
  onChange,
}) => {
  const { inputValue, listBoxExpanded } = useComboBoxState();
  const dispatch = useComboBoxDispatch();

  const handleChange = (e) => {
    dispatch({
      type: 'EVENT_FIRED_INPUT',
      payload: { value: e.currentTarget.value },
    });

    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = () => dispatch({ type: 'EVENT_FIRED_FOCUS' });

  const handleBlur = () => dispatch({ type: 'EVENT_FIRED_BLUR' });

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        return dispatch({ type: 'KEYDOWN_ENTER' });
      case 'Escape':
        return dispatch({ type: 'KEYDOWN_ESCAPE' });
      case 'ArrowUp': {
        return dispatch({ type: 'KEYDOWN_ARROW_UP' });
      }
      case 'ArrowDown': {
        return dispatch({ type: 'KEYDOWN_ARROW_DOWN' });
      }
      default:
        break;
    }
  };

  const activeDescendant =
    activeOpt !== null ? `combobox-${id}-${activeOpt.value}` : undefined;

  return (
    <>
      <label>
        {label}
        <input
          id={id}
          name={id}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-autocomplete={'list'}
          aria-controls={`combobox-${id}-data`}
          aria-expanded={listBoxExpanded}
          aria-haspopup={true}
          aria-activedescendant={activeDescendant}
          onInput={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </label>
      {helperText}
      {error}
    </>
  );
};

export default Input;
