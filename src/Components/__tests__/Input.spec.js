import { render, screen } from '@testing-library/react';
import { Input } from '..';
import ComboBoxProvider from '../ComboBoxProvider';

describe('Input', () => {
  const props = {
    label: 'Test',
    id: 'test',
    placeholder: 'Test Placeholder',
    disabled: false,
    required: false,
    helperText: '',
    error: '',
    onChange: jest.fn(),
  };

  it('should render', () => {
    render(
      <ComboBoxProvider>
        <Input {...props} />
      </ComboBoxProvider>,
    );
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('should render placeholder text', () => {
    render(
      <ComboBoxProvider>
        <Input {...props} />
      </ComboBoxProvider>,
    );
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    render(
      <ComboBoxProvider>
        <Input {...props} helperText="Helper text" />
      </ComboBoxProvider>,
    );
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should render error text', () => {
    render(
      <ComboBoxProvider>
        <Input {...props} error="Error text" />
      </ComboBoxProvider>,
    );
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('should render aria attributes', () => {
    render(
      <ComboBoxProvider>
        <Input {...props} />
      </ComboBoxProvider>,
    );
    expect(screen.getByLabelText('Test')).toHaveAttribute(
      'aria-autocomplete',
      'list',
    );
    expect(screen.getByLabelText('Test')).toHaveAttribute(
      'aria-controls',
      'combobox-test-data',
    );
    expect(screen.getByLabelText('Test')).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.getByLabelText('Test')).toHaveAttribute(
      'aria-haspopup',
      'true',
    );
    expect(screen.getByLabelText('Test')).not.toHaveAttribute(
      'aria-activedescendant',
    );
  });

  it.todo('should fire the onFocus callback');
  it.todo('should fire the onBlur callback');
  it.todo('should fire the onChange callback');
  it.todo('should fire the onKeyDown callback');
});
