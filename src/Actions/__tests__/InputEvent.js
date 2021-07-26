import { InputEvent } from '..';

const mockState = {
  inputValue: '',
  inputHasFocus: true,
  listBoxExpanded: false,
  listBoxHasFocus: false,
  unfilteredOpts: [
    {
      value: 'kickflip',
      label: 'Kickflip',
    },
    {
      value: 'heelflip',
      label: 'Heelflip',
    },
    {
      value: 'varialflip',
      label: 'Varial Flip',
    },
    {
      value: 'hardflip',
      label: 'Hardflip',
    },
    {
      value: 'tre',
      label: '360 Flip',
    },
    {
      value: 'varialheel',
      label: 'Varial Heelflip',
    },
    {
      value: 'inwardheel',
      label: 'Inward Heelflip',
    },
    {
      value: 'bigflip',
      label: 'Big Flip',
    },
    {
      value: 'fsflip',
      label: 'Frontside Flip',
    },
    {
      value: 'bsflip',
      label: 'Backside Flip',
    },
    {
      value: 'fsheel',
      label: 'Frontside Heel',
    },
    {
      value: 'bsheel',
      label: 'Backside Heel',
    },
  ],
  filteredOpts: [
    {
      value: 'kickflip',
      label: 'Kickflip',
    },
    {
      value: 'heelflip',
      label: 'Heelflip',
    },
    {
      value: 'varialflip',
      label: 'Varial Flip',
    },
    {
      value: 'hardflip',
      label: 'Hardflip',
    },
    {
      value: 'tre',
      label: '360 Flip',
    },
    {
      value: 'varialheel',
      label: 'Varial Heelflip',
    },
    {
      value: 'inwardheel',
      label: 'Inward Heelflip',
    },
    {
      value: 'bigflip',
      label: 'Big Flip',
    },
    {
      value: 'fsflip',
      label: 'Frontside Flip',
    },
    {
      value: 'bsflip',
      label: 'Backside Flip',
    },
    {
      value: 'fsheel',
      label: 'Frontside Heel',
    },
    {
      value: 'bsheel',
      label: 'Backside Heel',
    },
  ],
  activeOptIdx: null,
  activeOpt: null,
};

describe('InputEvent', () => {
  it('should update inputValue', () => {
    const result = InputEvent(mockState, { value: 'heel' });
    expect(result.inputValue).toBe('heel');
  });

  it('should update listBoxExpanded', () => {
    const result = InputEvent(mockState, { value: 'heel' });
    expect(result.listBoxExpanded).toBe(true);
  });

  it('should update filteredOpts', () => {
    const result = InputEvent(mockState, { value: 'front' });
    expect(result.filteredOpts).toStrictEqual([
      {
        value: 'fsflip',
        label: 'Frontside Flip',
      },
      {
        value: 'fsheel',
        label: 'Frontside Heel',
      },
    ]);
  });

  it('should update activeOptIdx', () => {
    const result = InputEvent(mockState, { value: 'front' });
    expect(result.activeOptIdx).toBe(0);
  });

  it('should update activeOpt', () => {
    const result = InputEvent(mockState, { value: 'front' });
    expect(result.activeOpt).toStrictEqual({
      value: 'fsflip',
      label: 'Frontside Flip',
    });
  });
});
