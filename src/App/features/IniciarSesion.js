import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'Iniciar sesión',
    name: '',
    display1: 'none',
    display2: 'block',
    display3: 'none'
};

export const iniciarSesion = createSlice({
    name: 'inicio',
    initialState,
    reducers: {
        startSection: (state) => {
            state.display1 = 'block';
            state.display2 = 'none';
            state.display3 = 'block';
        },
        closeSection: (state) => {
            state.display3 = 'none';
            state.display2 = 'block';
            state.name = '';
        },
        handleClick: (state, action) => {
            state.name = action.payload;
            state.display1 = 'none';
            state.title = 'Cerrar sesión';
        }
    }
});

export const { startSection, closeSection, handleClick } = iniciarSesion.actions;
export default iniciarSesion.reducer;