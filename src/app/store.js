import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/appReducer';

export default configureStore({
    reducer: {
        app: rootReducer,
    },
});
