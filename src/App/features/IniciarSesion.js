import { createSlice } from "@reduxjs/toolkit";

let monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date();
let monthNumber = currentDate.getMonth(); // Mes
let meses = monthNames[monthNumber];


const initialState = {
    title: 'Iniciar sesión',
    name: '',
    display1: 'none',
    display2: 'block',
    display3: 'none',
    estado: false,
    ventanaModal: 'none',
    diaClick: 0,
    diaSelect: 1,
    month: meses
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
            // console.log(action.payload);
            state.diaSelect = action.payload[0];
            state.ventanaModal = 'flex';
            state.diaClick = action.payload[0];
            state.month = action.payload[1]
        }
    }
});

export const { startSection, closeSection, handleClick, modal, openModal } = iniciarSesion.actions;
export default iniciarSesion.reducer;