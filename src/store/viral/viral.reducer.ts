import * as viralActions from './viral.types';
import { IViralData } from '../../../pages/viral';

export interface ViralState {
  viralData: IViralData;
  isShowViralPopup: boolean;
}

const INITIAL_STATE: ViralState = {
  viralData: {} as IViralData,
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
