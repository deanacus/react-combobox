import useComboBoxState from '../Hooks/useComboBoxState';
import Option from './Option';

const ListBox = ({ id, label }) => {
  const { listBoxExpanded, filteredOpts, activeOptIdx } = useComboBoxState();

  <ul
    id={`combobox-${id}-data`}
    role="listbox"
    tabIndex={-1}
    aria-label={`${label} Options`}
    expanded={listBoxExpanded}
  >
    {filteredOpts.map(({ value, label }, idx) => (
      <Option
        key={value}
        value={value}
        label={label}
        id={id}
        active={activeOptIdx === idx}
      />
    ))}
  </ul>;
};

export default ListBox;
