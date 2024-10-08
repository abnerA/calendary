import style from "./HeaderModal.module.css";
import { useDispatch } from "react-redux";
import { handleClick } from "../../App/features/IniciarSesion";

// NOTA: Se debe agregar el nombre el archivo de firebase.js de la carpeta firebase

const name = [
  "Abner Estévez",
  "Alba Estévez",
  "Rosa Martínez",
  "Emely García",
  "Deyanira Gil",
  "Ana De Los S",
  "Magalys Pérez",
  "Andrés García",
  "Bartola Calcaño",
  "Rosa Gutiérrez",
  "Mabel Vargas",
  "Marina Ozuna",
  "Nahúm Lithgow",
  "Davel Lithgow",
  "Ashanty Santana",
  "Guillermina Mesa",
  "Yirelis Mesa",
  "Ruth Pérez",
  "Belkys Mateo",
  "María Gil",
  "Stephanie P",
  "Samuel Pérez",
  "Gabriela Ramírez",
  "Andrés Campusano"
];

const normal = {
  display: "flex",
  visibility: "hidden",
  opacity: 0,
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)",
  transition: "all 400ms",
};

const transformed = {
  display: "flex",
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  background: "rgba(0, 0, 0, 0.6)",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  transition: "all .6s",
  visibility: "visible",
  opacity: 9,
  overflow: "auto",
};

function HeaderModal(props) {
  const dispatch = useDispatch();

  return (
    <div style={props.boton ? transformed : normal} onClick={props.handleClick}>
      <div className={style.modalContainer}>
      <span className={style.close} aria-label="close Modal">x</span>
        <h4 className={style.titleModal}>Seleccione su nombre</h4>
        {name.map((value) => {
          return (
            <button
              className={style.nameButton}
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
  );
}

export default HeaderModal;
