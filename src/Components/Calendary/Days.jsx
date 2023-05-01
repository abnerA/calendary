import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Day from "./Day";
import { diaWeek, openModal, cambioMonth } from "../../App/features/IniciarSesion";
import { month } from "./Day";

// let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function Days(props) {
  const [dia29, setDia29] = useState("block");
  const [dia30, setDia30] = useState("block");
  const [dia31, setDia31] = useState("block");

  const start = useSelector((state) => state.inicio);
  const dispatch = useDispatch();
  // Para saber la cantidad total de días que tienes el mes, en el primer Render,
  // y cada vez que cambia las propiedades de la props
  useEffect(() => {
    const days = props.dias;
    if (days === 28) {
      setDia29({
        dia29: "none",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 29) {
      setDia29({
        dia29: "block",
      });
      setDia30({
        dia30: "none",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 30) {
      setDia29({
        dia29: "block",
      });
      setDia31({
        dia31: "none",
      });
    } else if (days === 31) {
      setDia29({
        dia29: "block",
      });
      setDia30({
        dia30: "block",
      });
      setDia31({
        dia31: "block",
      });
    }
    dispatch(cambioMonth(props.month));
  }, [dispatch, props.dias, props.month]);

  const handleClick = (e) => {
    // Obtengo el día que ha sido clickeado exactamente
    let getDia = parseInt(e.target.title);

    // En este constructor de Class verifico el día de la semana
    // Osea, si es martes o jueves.
    let obtenerMonth = month(props.month);
    let daySelectDate = new Date(`${obtenerMonth} ${getDia} 2023`);

    // Me devuelve el día de la semana
    let dayWeek = daySelectDate.getDay();
    dispatch(diaWeek(dayWeek));

    // eslint-disable-next-line no-mixed-operators
    // En este primer if comprobamos si el usuario ya inicio sesión

    if (start.estado) {
      if ((props.mesActual === props.month && dayWeek === 2) || dayWeek === 4 || dayWeek === 1) {
        // console.log("Este es el día " + getDia);
        dispatch(openModal([getDia, props.month]));

      } else if (props.numMes + 1 === props.nextMes && props.today > 20) {
        console.log("Ya te puedes anotar :)");

        dispatch(openModal([getDia, props.month]));
      } else if (props.numMes - 1 === props.nextMes) {
        console.log("Ya este mes ha pasado");
        dispatch(openModal([getDia, props.month])); // Eliminar esta línea
      } else {
        console.log("no es día de predicación pública");
      }
    } else {
      console.log("Eliga su nombre, por favor");
    }
  };
  return (
    <Day
      firstDay={props.firstDay}
      today={props.today}
      days29={dia29}
      days30={dia30}
      days31={dia31}
      handle={handleClick}
      monthCurrent={props.month}
      year={props.year}
    />
  );
}

export default Days;

// Haciendo lo mismo pero con un componente de class

// import React from "react";
// // import style from "./Days.module.css";
// import Day from './Day';

// class Days extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dia29: "block",
//       dia30: "block",
//       dia31: "block",
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   // Para saber la cantidad total de días que tienes el mes, en el primer Render.
//   componentDidMount() {
//     const days = this.props.dias;
//     if (days === 28) {
//       this.setState({
//         dia29: "none",
//         dia30: "none",
//         dia31: "none",
//       });
//     } else if (days === 29) {
//       this.setState({
//         dia29: "block",
//         dia30: "none",
//         dia31: "none",
//       });
//     } else if (days === 30) {
//       this.setState({
//         dia29: "block",
//         dia31: "none",
//       });
//     } else if (days === 31) {
//       this.setState({
//         dia29: "block",
//         dia30: "block",
//         dia31: "block",
//       });
//     }
//   }

//   // Para actualizar el Render una vez cambie el valor que tiene la Props
//   componentDidUpdate(prevProps) {
//     if (this.props.dias !== prevProps.dias) {
//       const days = this.props.dias;
//       if (days === 28) {
//         this.setState({
//           dia29: "none",
//           dia30: "none",
//           dia31: "none",
//         });
//       } else if (days === 29) {
//         this.setState({
//           dia29: "block",
//           dia30: "none",
//           dia31: "none",
//         });
//       } else if (days === 30) {
//         this.setState({
//           dia29: "block",
//           dia31: "none",
//         });
//       } else if (days === 31) {
//         this.setState({
//           dia29: "block",
//           dia30: "block",
//           dia31: "block",
//         });
//       }
//     }
//   }

//   handleClick(e) {
//     // Obtengo el día que ha sido clickeado exactamente
//     let getDia = parseInt(e.target.title);

//     // En este constructor de Class verifico el día de la semana
//     // Osea, si es martes o jueves.
//     let daySelectDate = new Date(`Apr ${getDia} 2023`);

//     // Me devuelve el día de la semana
//     let dayWeek = daySelectDate.getDay();

//     // eslint-disable-next-line no-mixed-operators
//     if(this.props.mesActual === this.props.month && dayWeek === 2 || dayWeek === 4) {
//       console.log('Este es el día ' + getDia);
//     } else if (this.props.numMes + 1 === this.props.nextMes && this.props.today > 25) {
//       console.log('Ya te puedes anotar :)');
//     } else if (this.props.numMes - 1 === this.props.nextMes) {
//       console.log('Ya este mes ha pasado');
//     } else {
//       console.log('no es día de predicación pública');
//     }
//   }

//   render() {
//     return (
//       <Day firstDay={this.props.firstDay}
//       today={this.props.today}
//       days29={this.state.dia29}
//       days30={this.state.dia30}
//       days31={this.state.dia31}
//       handle={this.handleClick} />
//     );
//   }
// }

// export default Days;
