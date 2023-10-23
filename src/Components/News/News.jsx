import React from "react";
import style from "./News.module.css";

function News() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Turno especial |
        <span className={style.text}> Jueves 2 de noviembre será en el cementerio</span>
      </h3>
    </div>
  );
}

export default News;
