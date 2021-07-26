import { render, screen } from '@testing-library/react';
import { Option } from '..';

describe('Option', () => {
  it('should render', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="false" />,
    );

    expect(
      screen.getByRole('option', { name: 'Test Label' }),
    ).toBeInTheDocument();
  });

  it('should render the label text', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="false" />,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should set aria-selected to false', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="false" />,
    );

    expect(screen.getByRole('option', { name: 'Test Label' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
  });

  it('should set aria-selected to true', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="true" />,
    );

    expect(screen.getByRole('option', { name: 'Test Label' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('should set the data-value', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="true" />,
    );

    expect(screen.getByRole('option', { name: 'Test Label' })).toHaveAttribute(
      'data-value',
      'testValue',
    );
  });

  it('should set the id', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="true" />,
    );

    expect(screen.getByRole('option', { name: 'Test Label' })).toHaveAttribute(
      'id',
      'combobox-test-testValue',
    );
  });
});
