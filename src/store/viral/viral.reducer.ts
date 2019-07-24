import * as viralActions from './viral.types';
import { IViralPageData } from '../../../pages/viral';

export interface ViralState {
  viralPageData: IViralPageData;
  isShowViralPopup: boolean;
}

const INITIAL_STATE: ViralState = {
  viralPageData: undefined,
  isShowViralPopup: false,
};

export default function viral(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case viralActions.TOGGLE_VIRAL_POPUP:
      return {
        ...state,
        isShowViralPopup: !state.isShowViralPopup,
      };
    case viralActions.FETCH_VIRAL_DATA_SUCCESS:
      return {
        ...state,
        viralPageData: action.viralData
      };
    default:
      return state;
  }
}
