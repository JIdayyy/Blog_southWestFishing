import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    preview: string;
}

export const initialState: IAppState = {
    preview: "",
};

const appState = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setPreview: (state, action) => ({
            ...state,
            preview: action.payload,
        }),
    },
});

export const { setPreview } = appState.actions;

export default appState.reducer;
