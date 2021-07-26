/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { Option } from '../../src/Components';

describe('Option', () => {
  it('should render', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="false" />,
    );

    expect(
      screen.getByRole('option', { name: 'Test Label' }),
    ).toBeInTheDocument();
  });

  it('should set aria-selected to the same value as active', () => {
    render(
      <Option id="test" value="testValue" label="Test Label" active="false" />,
    );

    expect(screen.getByRole('option', { name: 'Test Label' })).toHaveAttribute(
      'aria-selected',
      false,
    );
  });
});
