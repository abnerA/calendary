import React from "react";
import style from "./News.module.css";

function News() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>
        ¡IMPORTANTE! |
        <span className={style.text}>Ofrezca cursos bíblicos siempre que sea posible</span>
      </h3>
    </div>
  );
}

export default News;
