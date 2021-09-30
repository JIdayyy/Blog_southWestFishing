import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
    user: {
        id: string;
        username: string;
        role: string;
    };
}

export const initialState: IAppState = {
    user: {
        id: "",
        username: "",
        role: "",
    },
};

const appState = createSlice({
    name: "counter",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = {
                id: "",
                username: "",
                role: "",
            };
        },
    },
});

export const { login, logout } = appState.actions;

export default appState.reducer;
