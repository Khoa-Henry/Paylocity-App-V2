import { createSlice } from '@reduxjs/toolkit';
import { merge } from 'lodash';

const appReducer = createSlice({
    name: 'rootStoreState',
    initialState: {
        username:'',
    },
    reducers: {
        updateTheStoreState(state, action) {
            const { newInput } = action.payload;
            merge(state, newInput);
        },
    },
});

const { updateTheStoreState } = appReducer.actions;

export default appReducer.reducer;

// save info to the redux store
export const updateTheReduxStore = (info) => (dispatch) => {
    dispatch(updateTheStoreState({ info }))
};
