import React from "react";
import style from "./News.module.css";

function News() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        ¡Nuevo lugar! |
        <span className={style.text}> Ahora estaremos todos los sábados en la Cordillera</span>
      </h3>
    </div>
  );
}

export default News;
