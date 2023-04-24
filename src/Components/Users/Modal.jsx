import style from "./Modal.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modal } from "../../App/features/IniciarSesion";
import { addName, dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

function Modal() {
  const start = useSelector((state) => state.inicio);
  const diaSelect = 'day' + start.diaSelect.toString();
  const dispatch = useDispatch();
  const [name, setName] = useState();

  
  useEffect(() => {
    const tasksRef = ref(dataB, start.month);
    onValue(tasksRef, (snapshot)  => {
      const data = snapshot.val()[diaSelect].name;
      setName({
        name: data
      })
    });
  }, [diaSelect, start.month]);
  
  //Mañana
  function addName1() {
    let nombres = name.name;
    if (nombres[0] === "" && nombres[1] !==start.name && nombres[2] !==start.name) {
      nombres[0] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[1] === "" && nombres[0] !==start.name && nombres[2] !==start.name) {
      nombres[1] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[2] === "" && nombres[0] !==start.name && nombres[1] !==start.name) {
      nombres[2] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    }
  }

  function deleteName() {
    let nombres = name.name;
    if (nombres[0] === start.name) {
      nombres[0] = "";
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[1] === start.name) {
      nombres[1] = "";
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[2] === start.name) {
      nombres[2] = "";
      return addName(diaSelect, nombres, start.month + "/");
    }
  }

  //Terde
  function addNameTarde() {
    let nombres = name.name;
    if (nombres[3] === "" && nombres[4] !==start.name && nombres[5] !==start.name) {
      nombres[3] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[4] === "" && nombres[3] !==start.name && nombres[5] !==start.name) {
      nombres[4] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[5] === "" && nombres[3] !==start.name && nombres[4] !==start.name) {
      nombres[5] = start.name;
      return addName(diaSelect, nombres, start.month + "/");
    }
  }

  function deleteNameTarde() {
    let nombres = name.name;
    if (nombres[3] === start.name) {
      nombres[3] = "";
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[4] === start.name) {
      nombres[4] = "";
      return addName(diaSelect, nombres, start.month + "/");
    } else if (nombres[5] === start.name) {
      nombres[5] = "";
      return addName(diaSelect, nombres, start.month + "/");
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
            <p className={style.nombres}>{!name ? '...' : name.name[3]}</p>
            <p className={style.nombres}>{!name ? '...' : name.name[4]}</p>
            <p className={style.nombres}>{!name ? '...' : name.name[5]}</p>
          </div>
          <div className={style.btnModal}>
            <button onClick={deleteNameTarde}>Quitarme</button>
            <button onClick={addNameTarde}>Anotarme</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
