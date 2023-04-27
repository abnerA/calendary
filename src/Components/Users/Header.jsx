import React from "react";
import style from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { startSection, closeSection, handleClick } from "../../App/features/IniciarSesion";

const name = ['Abner Estévez', 'Alba Estévez', 'Manuel Santana', 'Massiel Santana', 'Luis José Capellán', 'Susana Capellán', 'Rosa Domínguez', 'Emely García', 'Ana De Los Santos', 'Magalys Pérez', 'Violeta García', 'Andrés García', 'Bartola Calcaño', 'Rosa Gutiérrez', 'Mabel Pérez', 'Marina Ozuna', 'Kenia Torres', 'Nahúm Lithgow', 'Davel Lithgow', 'Ashanty Santana', 'Guillermina Mesa', 'Yirelis Mesa', 'Ruth Pérez', 'Deyanira Gil'];

export function Header() {
    const start = useSelector((state) => state.inicio);
    const dispatch = useDispatch();
        return(
            <header className={style.header}>
                <h3>Arreglo de Predicación pública</h3>
                <nav className={style.nav}>
                    <h4>{`${start.name}`}</h4>
                    <button onClick={() => dispatch(startSection())} style={{display: start.display2}}>Iniciar sesión</button>
                    <button onClick={() => dispatch(closeSection())} style={{display: start.display3}} >Cerrar sesión</button>
                </nav>
                <div className={style.modal} style={{display: start.display1}}>
                    {name.map(value => {
                       return <button onClick={() => dispatch(handleClick(value))} value={value} key={value}>{value}</button>
                    })}
                </div>
                {/* <div className={style.modal} style={{display: start.display2}}>
                    <select name="nombre">
                     <option value="">Selecciona tu nombre</option>   
                    {name.map(value => {
                       return <option onClick={handleClick} value={value} key={value}>{value}</option>
                    })}
                    </select>
                </div>  */}
            </header>
        );
}

export default Header;