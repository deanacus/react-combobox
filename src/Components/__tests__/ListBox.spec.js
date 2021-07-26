import { render, screen } from '@testing-library/react';
import { ListBox } from '..';
import ComboBoxProvider from '../ComboBoxProvider';

describe('Listbox', () => {
  it('should render', () => {
    render(
      <ComboBoxProvider>
        <ListBox id="test" label="Test" />
      </ComboBoxProvider>,
    );

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should have an aria-label', () => {
    render(
      <ComboBoxProvider>
        <ListBox id="test" label="Test" />
      </ComboBoxProvider>,
    );

    expect(screen.getByLabelText('Test Options')).toBeInTheDocument();
  });

  it('should have an aria-expanded value', () => {
    render(
      <ComboBoxProvider>
        <ListBox id="test" label="Test" />
      </ComboBoxProvider>,
    );

    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
