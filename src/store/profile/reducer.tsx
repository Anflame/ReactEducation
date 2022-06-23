import { Reducer } from 'redux';
import { ProfileActions } from './types';
import { CHANGE_NAME, TOGGLE_PROFILE } from './actions';
import { Authors } from 'src/components/comon-types';

export interface ProfileState {
  name: string;
  visible: boolean;
}

const initialState: ProfileState = {
  name: Authors.USER,
  visible: true,
};

export const profileReducer: Reducer<ProfileState, ProfileActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
};
