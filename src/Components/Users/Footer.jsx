import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

var regex = /(\d+)/g;

// let arr = ['Lunes 29 en la mañana', 'Martes 2 en la tarde', 'Jueves 18 en la mañana', 'martes 30 en la tarde', 'Lunes 8 en la mañana'];
// let num = arr[1].match(regex);
// let newArr = arr.sort((a, b) => {
//   return a.match(regex) - b.match(regex);
// })
// console.log(newArr);

function Footer() {
  const start = useSelector((state) => state.inicio);
  // const diaSelect = "day" + start.diaSelect.toString();
  const [name, setName] = useState();

  useEffect(() => {
    const tasksRef = ref(dataB, start.monthCambiante);
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val()[start.name].name;
      console.log(data);
      setName({
        name: data.sort((a, b) => {
          return a.match(regex) - b.match(regex);
        }),
      });
    });
  }, [start.name, start.monthCambiante]);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>Mis Participaciones:</h3>

        <div className={style.noteContainer}>
          {!name ? (
            <h3>'Loading...'</h3>
          ) : (
            name.name.map((value, index) => {
              return (
                <p className={style.note} key={index}>
                  {value}
                </p>
              );
            })
          )}
        </div>

      </div>
      <div className={style.info}>
        <h3 className={style.title}>Leyenda</h3>
        <div className={style.green}>
          <div className={style.colorGreen}></div>
          <p>Turno libre</p>
        </div>
        <div className={style.blue}>
          <div className={style.colorBlue}></div>
          <p>Turno ocupado AM</p>
        </div>
        <div className={style.yellow}>
          <div className={style.colorYellow}></div>
          <p>Turno ocupado PM</p>
        </div>
        <div className={style.red}>
          <div className={style.colorRed}></div>
          <p>Turno cancelado</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
