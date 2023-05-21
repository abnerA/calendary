import React from "react";
import style from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  startSection,
  closeSection,
  handleClick,
} from "../../App/features/IniciarSesion";

const name = [
  "Abner Estévez",
  "Alba Estévez",
  "Manuel Santana",
  "Massiel Santana",
  "Luis Capellán",
  "Susana Capellán",
  "Rosa Domínguez",
  "Emely García",
  "Deyanira Gil",
  "Ana De Los S",
  "Magalys Pérez",
  "Violeta García",
  "Andrés García",
  "Bartola Calcaño",
  "Rosa Gutiérrez",
  "Mabel Pérez",
  "Marina Ozuna",
  "Kenia Torres",
  "Nahúm Lithgow",
  "Davel Lithgow",
  "Ashanty Santana",
  "Guillermina Mesa",
  "Yirelis Mesa",
  "Ruth Pérez",
  "Belkys Mateo",
  "María Gil"
];

export function Header() {
  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <h3 className={style.title}>Arreglo de Predicación Pública</h3>
      <nav className={style.nav}>
        <h4 style={{display: start.name === 'Blanco' ? 'none' : 'flex' }} >{start.name === 'Blanco' ? '' : start.name}</h4>
        <button className={style.iniciarSesion}
          onClick={() => dispatch(startSection())}
          style={{ display: start.display2 }}
        >
          Seleccione su nombre
        </button>
        <button className={style.exit}
          onClick={() => dispatch(closeSection())}
          style={{ display: start.display3 }}
        >
          Salir
        </button>
      </nav>
      <div className={style.modal} style={{ display: start.display1 }}>
        <div className={style.modalContainer}>
            <h3 className={style.titleModal}>Seleccione su nombre</h3>
          {name.map((value) => {
            return (
              <button className={style.nameButton}
                onClick={() => dispatch(handleClick(value))}
                value={value}
                key={value}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
