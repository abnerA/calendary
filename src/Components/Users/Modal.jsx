import style from "./Modal.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modal } from "../../App/features/IniciarSesion";
import { addName, dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

const tasksRef = ref(dataB, "abril");

function Modal() {
  const start = useSelector((state) => state.inicio);
  const diaSelect = 'day' + start.diaSelect.toString();
  const dispatch = useDispatch();
  const [name, setName] = useState();

  
  useEffect(() => {
    onValue(tasksRef, (snapshot)  => {
      const data = snapshot.val()[diaSelect].name;
      setName({
        name: data
      })
    });
  }, [diaSelect]);
  
  
  function addName1() {
    let nombres = name.name;
    if (nombres[0] === "" && nombres[1] !==start.name && nombres[2] !==start.name) {
      nombres[0] = start.name;
      return addName(diaSelect, nombres);
    } else if (nombres[1] === "" && nombres[0] !==start.name && nombres[2] !==start.name) {
      nombres[1] = start.name;
      return addName(diaSelect, nombres);
    } else if (nombres[2] === "" && nombres[0] !==start.name && nombres[1] !==start.name) {
      nombres[2] = start.name;
      return addName(diaSelect, nombres);
    }
  }

  function deleteName() {
    let nombres = name.name;
    if (nombres[0] === start.name) {
      nombres[0] = "";
      return addName(diaSelect, nombres);
    } else if (nombres[1] === start.name) {
      nombres[1] = "";
      return addName(diaSelect, nombres);
    } else if (nombres[2] === start.name) {
      nombres[2] = "";
      return addName(diaSelect, nombres);
    }
  }

  return (
    <div className={style.container} style={{ display: start.ventanaModal }}>
      <button onClick={() => dispatch(modal())} className={style.button}>
        x
      </button>
      <div className={style.containerModal}>
        <div className={style.mañana}>
          <h3>Mañana</h3>
          <h6>Lunes {start.diaClick}</h6>
          <div>
            <p className={style.nombres}>{!name ? '...' : name.name[0]}</p>
            <p className={style.nombres}>{!name ? '...' : name.name[1]}</p>
            <p className={style.nombres}>{!name ? '...' : name.name[2]}</p>
          </div>
          <div className={style.btnModal}>
            <button onClick={deleteName}>Quitarme</button>
            <button onClick={addName1} >Anotarme</button>
          </div>
        </div>
        <div className={style.tarde}>
          <h3>Tarde</h3>
          <div>
            <p className={style.nombres}>...</p>
            <p className={style.nombres}>...</p>
            <p className={style.nombres}>...</p>
          </div>
          <div className={style.btnModal}>
            <button>Quitarme</button>
            <button>Anotarme</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
