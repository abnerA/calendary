import React from "react";
import style from "./News.module.css";

function News() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        ¡ANUNCIO! |
        <span className={style.text}> Ahora puedes participar los <strong>jueves</strong> en la tarde 👏</span>
      </h3>
    </div>
  );
}

export default News;
