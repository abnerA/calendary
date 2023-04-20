import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: 'Iniciar sesión',
    name: '',
    display1: 'none',
    display2: 'block',
    display3: 'none',
    estado: false,
    ventanaModal: 'none',
    diaClick: 0,
    diaSelect: 1
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
            state.estado = false;
        },
        handleClick: (state, action) => {
            state.name = action.payload;
            state.display1 = 'none';
            state.title = 'Cerrar sesión';
            state.estado = true;
        },
        modal: (state) => {
            state.ventanaModal = 'none'
        },
        openModal: (state, action) => {
            console.log(action.payload);
            state.diaSelect = action.payload;
            state.ventanaModal = 'flex';
            state.diaClick = action.payload;
        }
    }
});

export const { startSection, closeSection, handleClick, modal, openModal } = iniciarSesion.actions;
export default iniciarSesion.reducer;