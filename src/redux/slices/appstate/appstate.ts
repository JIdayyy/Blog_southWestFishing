import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    user: {
        id: string;
        username: string;
        role: Role[];
    };
}

export const initialState: IAppState = {
    user: {
        id: "",
        username: "",
        role: [],
    },
};

const appState = createSlice({
    name: "counter",
    initialState,
    reducers: {
        login: (state, action) => ({
            user: {
                id: action.payload.id,
                username: action.payload.username,
                role: action.payload.role,
            },
        }),
        logout: () => ({
            user: {
                id: "",
                username: "",
                role: [],
            },
        }),
    },
});

export const { login, logout } = appState.actions;

export default appState.reducer;
