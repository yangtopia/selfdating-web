import { combineReducers } from 'redux';

import viral, { ViralState } from './viral/viral.reducer';

export interface RootState {
  viral: ViralState;
}

export default combineReducers<RootState>({
  viral,
});
