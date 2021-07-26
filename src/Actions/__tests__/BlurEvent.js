import { BlurEvent } from '..';

const mockState = {
  inputValue: 'heel',
  inputHasFocus: true,
  listBoxExpanded: true,
  listBoxHasFocus: true,
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
      value: 'heelflip',
      label: 'Heelflip',
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
      value: 'fsheel',
      label: 'Frontside Heel',
    },
    {
      value: 'bsheel',
      label: 'Backside Heel',
    },
  ],
  activeOptIdx: 0,
  activeOpt: {
    value: 'heelflip',
    label: 'Heelflip',
  },
};

describe('BlurEvent', () => {
  it('should return an object with inputHasFocus: true', () => {
    const result = BlurEvent(mockState);
    expect(result.inputHasFocus).toBe(false);
  });
  it('should return an object with listBoxExpanded: true', () => {
    const result = BlurEvent(mockState);
    expect(result.listBoxExpanded).toBe(false);
  });
  it('should return an object with listBoxHasFocus: true', () => {
    const result = BlurEvent(mockState);
    expect(result.listBoxHasFocus).toBe(false);
  });
  it('should override the passed in objects inputHasFocus value', () => {
    const result = BlurEvent(mockState);
    expect(result.inputHasFocus).toBe(false);
  });
  it('should override the passed in objects listBoxExpanded value', () => {
    const result = BlurEvent(mockState);
    expect(result.listBoxExpanded).toBe(false);
  });
  it('should override the passed in objects listBoxHasFocus value', () => {
    const result = BlurEvent(mockState);
    expect(result.listBoxHasFocus).toBe(false);
  });
});
