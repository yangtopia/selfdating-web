import { TOGGLE_VIRAL_POPUP } from './viral.types';

export interface ViralState {
  isShowViralPopup: boolean;
}

const INITIAL_STATE: ViralState = {
  isShowViralPopup: false,
};

export default function viral(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case TOGGLE_VIRAL_POPUP:
      return {
        ...state,
        isShowViralPopup: !state.isShowViralPopup,
      };
    default:
      return state;
  }
}
