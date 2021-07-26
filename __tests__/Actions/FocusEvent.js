import { FocusEvent } from '../../src/Actions';

const mockState = {
  inputValue: '',
  inputHasFocus: false,
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

describe('FocusEvent', () => {
  it('should set the value of inputHasFocus', () => {
    const result = FocusEvent(mockState);
    expect(result.inputHasFocus).toBe(true);
  });

  it('should set the value of listBoxExpanded', () => {
    const result = FocusEvent(mockState);
    expect(result.listBoxExpanded).toBe(true);
  });
});
