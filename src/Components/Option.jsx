const Option = ({ id, value, label, active }) => {
  return (
    <li
      key={value}
      id={`combobox-${id}-${value}`}
      aria-selected={active}
      role="option"
      data-value={`${value}`}
      active={active}
    >
      {label}
    </li>
  );
};

export default Option;
