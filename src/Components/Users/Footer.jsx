import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h3 className={style.title}>Mis Participaciones:</h3>
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
