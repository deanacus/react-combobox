import {
  KeydownEscape,
  KeydownEnter,
  BlurEvent,
  FocusEvent,
  InputEvent,
  KeydownArrowUp,
  KeydownArrowDown,
} from '../Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case 'KEYDOWN_ARROW_UP':
      return KeydownArrowUp(state);
    case 'KEYDOWN_ARROW_DOWN':
      return KeydownArrowDown(state);
    case 'KEYDOWN_ESCAPE':
      return KeydownEscape(state);
    case 'KEYDOWN_ENTER':
      return KeydownEnter(state);
    case 'EVENT_FIRED_INPUT':
      return InputEvent(state, action.payload);
    case 'EVENT_FIRED_BLUR':
      return BlurEvent(state);
    case 'EVENT_FIRED_FOCUS':
      return FocusEvent(state);
    default:
      return state;
  }
};

export default reducer;
