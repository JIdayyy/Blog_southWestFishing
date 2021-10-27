import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
    preview: string;
}

export const initialState: IAppState = {
    preview: "",
};

const appState = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setPreview: (state, action) => {
            return {
                ...state,
                preview: action.payload,
            };
        },
    },
});

export const { setPreview } = appState.actions;

export default appState.reducer;
