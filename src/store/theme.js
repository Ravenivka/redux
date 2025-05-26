import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = true, action) => {
    switch (action.type) {
        case 'SWITCH':
            return (state ? false : true);
        default:
            return state;
    }
};

const store = configureStore({
    reducer: reducer,
})

export default store;