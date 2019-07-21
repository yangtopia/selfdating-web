import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const viralSelector = (state: RootState) => state.viral;

export const selectIsShowViralPopup = createSelector(
  viralSelector,
  (viral) => viral.isShowViralPopup,
);
