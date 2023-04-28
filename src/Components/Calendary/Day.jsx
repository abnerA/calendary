import React from "react";
import style from "./Day.module.css";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";


function month(value) {
  if (value === "Enero") {
    return "jan";
  } else if (value === "Febrero") {
    return "feb";
  } else if (value === "Marzo") {
    return "mar";
  } else if (value === "Abril") {
    return "apr";
  } else if (value === "Mayo") {
    return "may";
  } else if (value === "Junio") {
    return "jun";
  } else if (value === "Julio") {
    return "jul";
  } else if (value === "Agosto") {
    return "aug";
  } else if (value === "Septiembre") {
    return "sep";
  } else if (value === "Octubre") {
    return "oct";
  } else if (value === "Noviembre") {
    return "nov";
  } else if (value === "Diciembre") {
    return "dec";
  }
}

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(max-width: 700px)").matches,
      day1: [""],
      day2: [""],
      day3: [""],
      day4: [""],
      day5: [""],
      day6: [""],
      day7: [""],
      day8: [""],
      day9: [""],
      day10: [""],
      day11: [""],
      day12: [""],
      day13: [""],
      day14: [""],
      day15: [""],
      day16: [""],
      day17: [""],
      day18: [""],
      day19: [""],
      day20: [""],
      day21: [""],
      day22: [""],
      day23: [""],
      day24: [""],
      day25: [""],
      day26: [""],
      day27: [""],
      day28: [""],
      day29: [""],
      day30: [""],
      day31: [""],
    };
    this.dayAvailable = this.dayAvailable.bind(this);
  }
  
  componentDidMount() {
    const tasksRef = ref(dataB, this.props.monthCurrent);
    onValue(tasksRef, async (snapshot) => {
      const data = await snapshot.val();
      this.setState({
        day1: data.day1.name, 
        day2: data.day2.name,
        day3: data.day3.name,
        day4: data.day4.name,
        day5: data.day5.name,
        day6: data.day6.name,
        day7: data.day7.name,
        day8: data.day8.name,
        day9: data.day9.name,
        day10: data.day10.name,
        day11: data.day11.name,
        day12: data.day12.name,
        day13: data.day13.name,
        day14: data.day14.name,
        day15: data.day15.name,
        day16: data.day16.name,
        day17: data.day17.name,
        day18: data.day18.name,
        day19: data.day19.name,
        day20: data.day20.name,
        day21: data.day21.name,
        day22: data.day22.name,
        day23: data.day23.name,
        day24: data.day24.name,
        day25: data.day25.name,
        day26: data.day26.name,
        day27: data.day27.name,
        day28: data.day28.name,
        day29: data.day29.name,
        day30: data.day30.name,
        day31: data.day31.name
      });
    });

    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(max-width: 700px)").addEventListener("change", handler);

  }

  dayAvailable(value) {
    let mes = month(this.props.monthCurrent);
    let daySelectDate = new Date(`${mes} ${value} ${this.props.year}`);
    let dayWeek = daySelectDate.getDay();
    if (dayWeek === 1 || dayWeek === 2 || dayWeek === 4 ) {
      return style.dayActive;
    } else {
      return style.dayNone;
    }
  }

    circleAvalaible(value) {
    let mq = this.state.matches;
    let mes = month(this.props.monthCurrent);
    let daySelectDate = new Date(`${mes} ${value} ${this.props.year}`);
    let dayWeek = daySelectDate.getDay();
    if (mq === false) {
      if (dayWeek === 1 || dayWeek === 2 || dayWeek === 4) {
        return 'none';
      } else {
        return 'none';
      }
    } else if (mq === true) {
      if (dayWeek === 1 || dayWeek === 2 || dayWeek === 4) {
        return 'block';
      } else {
        return 'none';
      }
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.monthCurrent !== prevProps.monthCurrent && this.props.year === 2023) {
      const tasksRef = ref(dataB, this.props.monthCurrent);
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        this.setState({
          day1: data.day1.name,
          day2: data.day2.name,
          day3: data.day3.name,
          day4: data.day4.name,
          day5: data.day5.name,
          day6: data.day6.name,
          day7: data.day7.name,
          day8: data.day8.name,
          day9: data.day9.name,
          day10: data.day10.name,
          day11: data.day11.name,
          day12: data.day12.name,
          day13: data.day13.name,
          day14: data.day14.name,
          day15: data.day15.name,
          day16: data.day16.name,
          day17: data.day17.name,
          day18: data.day18.name,
          day19: data.day19.name,
          day20: data.day20.name,
          day21: data.day21.name,
          day22: data.day22.name,
          day23: data.day23.name,
          day24: data.day24.name,
          day25: data.day25.name,
          day26: data.day26.name,
          day27: data.day27.name,
          day28: data.day28.name,
          day29: data.day29.name,
          day30: data.day30.name,
          day31: data.day31.name,
        });
      });
    }
  }

  render() {
    return (
      <div className={style.containerDays}>
        <div
          title="1"
          style={{
            gridColumnStart:
              this.props.firstDay === 0 ? 7 : this.props.firstDay,
          }}
          onClick={this.props.handle}
        >
          <h2 title="1">1</h2>
          <h5 title="1" className={this.dayAvailable(1)}>Mañana</h5>

            <p title="1" style={{color: this.state.day1[6], display: this.circleAvalaible(1)}} className={style.circle}>•</p>
            <p title="1" style={{color: this.state.day1[7], display: this.circleAvalaible(1)}} className={style.circle}>•</p>
            <p title="1" style={{color: this.state.day1[8], display: this.circleAvalaible(1)}} className={style.circle}>•</p>


          <p className={style.name} title="1">
            {this.state.day1[0]}
          </p>
          <p className={style.name} title="1">
            {this.state.day1[1]}
          </p>
          <p className={style.name} title="1">
            {this.state.day1[2]}
          </p>

          <hr title="1" className={this.dayAvailable(1)} />

          <h5 title="1" className={this.dayAvailable(1)} >Tarde</h5>

            <p title="1" style={{color: this.state.day1[9], display: this.circleAvalaible(1)}} className={style.circle}>•</p>
            <p title="1" style={{color: this.state.day1[10], display: this.circleAvalaible(1)}} className={style.circle}>•</p>
            <p title="1" style={{color: this.state.day1[11], display: this.circleAvalaible(1)}} className={style.circle}>•</p>



          <p className={style.name} title="1">{this.state.day1[3]}</p>
          <p className={style.name} title="1">{this.state.day1[4]}</p>
          <p className={style.name} title="1">{this.state.day1[5]}</p>
        </div>
        <div title="2" onClick={this.props.handle}>
          <h2 title="2">2</h2>
          <h5 title="2" className={this.dayAvailable(2)}>Mañana</h5>

              <p title="2" style={{color: this.state.day2[6], display: this.circleAvalaible(2)}} className={style.circle}>•</p>
              <p title="2" style={{color: this.state.day2[7], display: this.circleAvalaible(2)}} className={style.circle}>•</p>
              <p title="2" style={{color: this.state.day2[8], display: this.circleAvalaible(2)}} className={style.circle}>•</p>

          <p className={style.name} title="2">
            {this.state.day2[0]}
          </p>
          <p className={style.name} title="2">
            {this.state.day2[1]}
          </p>
          <p className={style.name} title="2">
            {this.state.day2[2]}
          </p>
          <hr title="2" className={this.dayAvailable(2)} />

          <h5 title="2" className={this.dayAvailable(2)}>
            Tarde
          </h5>

              <p title="1" style={{color: this.state.day2[9], display: this.circleAvalaible(2)}} className={style.circle}>•</p>
              <p title="1" style={{color: this.state.day2[10], display: this.circleAvalaible(2)}} className={style.circle}>•</p>
              <p title="1" style={{color: this.state.day2[11], display: this.circleAvalaible(2)}} className={style.circle}>•</p>

          <p className={style.name} title="2">{this.state.day2[3]}</p>
          <p className={style.name} title="2">{this.state.day2[4]}</p>
          <p className={style.name} title="2">{this.state.day2[5]}</p>
        </div>
        <div title="3" onClick={this.props.handle}>
          <h2 title="3">3</h2>
          <h5 title="3" className={this.dayAvailable(3)} >Mañana</h5>

              <p title="3" style={{color: this.state.day3[6], display: this.circleAvalaible(3)}} className={style.circle}>•</p>
              <p title="3" style={{color: this.state.day3[7], display: this.circleAvalaible(3)}} className={style.circle}>•</p>
              <p title="3" style={{color: this.state.day3[8], display: this.circleAvalaible(3)}} className={style.circle}>•</p>

          <p className={style.name} title="3">
            {this.state.day3[0]}
          </p>
          <p className={style.name} title="3">
            {this.state.day3[1]}
          </p>
          <p className={style.name} title="3">
            {this.state.day3[2]}
          </p>

          <hr title="3" className={this.dayAvailable(3)} />

          <h5 title="3" className={this.dayAvailable(3)} >Tarde</h5>

              <p title="3" style={{color: this.state.day3[9], display: this.circleAvalaible(3)}} className={style.circle}>•</p>
              <p title="3" style={{color: this.state.day3[10], display: this.circleAvalaible(3)}} className={style.circle}>•</p>
              <p title="3" style={{color: this.state.day3[11], display: this.circleAvalaible(3)}} className={style.circle}>•</p>

          <p className={style.name} title="3">{this.state.day3[3]}</p>
          <p className={style.name} title="3">{this.state.day3[4]}</p>
          <p className={style.name} title="3">{this.state.day3[5]}</p>
        </div>
        <div title="4" onClick={this.props.handle}>
          <h2 title="4">4</h2>
          <h5 title="4" className={this.dayAvailable(4)}>
            Mañana
          </h5>

            <p title="4" style={{color: this.state.day4[6], display: this.circleAvalaible(4)}} className={style.circle}>•</p>
            <p title="4" style={{color: this.state.day4[7], display: this.circleAvalaible(4)}} className={style.circle}>•</p>
            <p title="4" style={{color: this.state.day4[8], display: this.circleAvalaible(4)}} className={style.circle}>•</p>


          <p className={style.name} title="4">
            {this.state.day4[0]}
          </p>
          <p className={style.name} title="4">
            {this.state.day4[1]}
          </p>
          <p className={style.name} title="4">
            {this.state.day4[2]}
          </p>

          <hr title="4" className={this.dayAvailable(4)} />

          <h5 title="4" className={this.dayAvailable(4)}>
            Tarde
          </h5>

            <p title="4" style={{color: this.state.day4[9], display: this.circleAvalaible(4)}} className={style.circle}>•</p>
            <p title="4" style={{color: this.state.day4[10], display: this.circleAvalaible(4)}} className={style.circle}>•</p>
            <p title="4" style={{color: this.state.day4[11], display: this.circleAvalaible(4)}} className={style.circle}>•</p>

          <p className={style.name} title="4">{this.state.day4[3]}</p>
          <p className={style.name} title="4">{this.state.day4[4]}</p>
          <p className={style.name} title="4">{this.state.day4[5]}</p>
        </div>
        <div title="5" onClick={this.props.handle}>
          <h2 title="5">5</h2>
          <h5 title="5" className={this.dayAvailable(5)} >Mañana</h5>

              <p title="5" style={{color: this.state.day5[6], display: this.circleAvalaible(5)}} className={style.circle}>•</p>
              <p title="5" style={{color: this.state.day5[7], display: this.circleAvalaible(5)}} className={style.circle}>•</p>
              <p title="5" style={{color: this.state.day5[8], display: this.circleAvalaible(5)}} className={style.circle}>•</p>

          <p className={style.name} title="5">
            {this.state.day5[0]}
          </p>
          <p className={style.name} title="5">
            {this.state.day5[1]}
          </p>
          <p className={style.name} title="5">
            {this.state.day5[2]}
          </p>

          <hr title="5" className={this.dayAvailable(5)} />

          <h5 title="5" className={this.dayAvailable(5)} >Tarde</h5>

              <p title="5" style={{color: this.state.day5[9], display: this.circleAvalaible(5)}} className={style.circle}>•</p>
              <p title="5" style={{color: this.state.day5[10], display: this.circleAvalaible(5)}} className={style.circle}>•</p>
              <p title="5" style={{color: this.state.day5[11], display: this.circleAvalaible(5)}} className={style.circle}>•</p>

          <p className={style.name} title="5">{this.state.day5[3]}</p>
          <p className={style.name} title="5">{this.state.day5[4]}</p>
          <p className={style.name} title="5">{this.state.day5[5]}</p>
        </div>
        <div title="6" onClick={this.props.handle}>
          <h2 title="6">6</h2>
          <h5 title="6" className={this.dayAvailable(6)} >Mañana</h5>

              <p title="6" style={{color: this.state.day6[6], display: this.circleAvalaible(6)}} className={style.circle}>•</p>
              <p title="6" style={{color: this.state.day6[7], display: this.circleAvalaible(6)}} className={style.circle}>•</p>
              <p title="6" style={{color: this.state.day6[8], display: this.circleAvalaible(6)}} className={style.circle}>•</p>

          <p className={style.name} title="6">
            {this.state.day6[0]}
          </p>
          <p className={style.name} title="6">
            {this.state.day6[1]}
          </p>
          <p className={style.name} title="6">
            {this.state.day6[2]}
          </p>

          <hr title="6" className={this.dayAvailable(6)} />

          <h5 title="6" className={this.dayAvailable(6)}>Tarde</h5>

              <p title="6" style={{color: this.state.day6[9], display: this.circleAvalaible(6)}} className={style.circle}>•</p>
              <p title="6" style={{color: this.state.day6[10], display: this.circleAvalaible(6)}} className={style.circle}>•</p>
              <p title="6" style={{color: this.state.day6[11], display: this.circleAvalaible(6)}} className={style.circle}>•</p>

          <p className={style.name} title="6">{this.state.day6[3]}</p>
          <p className={style.name} title="6">{this.state.day6[4]}</p>
          <p className={style.name} title="6">{this.state.day6[5]}</p>
        </div>
        <div title="7" onClick={this.props.handle}>
          <h2 title="7">7</h2>
          <h5 title="7" className={this.dayAvailable(7)} >Mañana</h5>

              <p title="7" style={{color: this.state.day7[6], display: this.circleAvalaible(7)}} className={style.circle}>•</p>
              <p title="7" style={{color: this.state.day7[7], display: this.circleAvalaible(7)}} className={style.circle}>•</p>
              <p title="7" style={{color: this.state.day7[8], display: this.circleAvalaible(7)}} className={style.circle}>•</p>

          <p className={style.name} title="7">
            {this.state.day7[0]}
          </p>
          <p className={style.name} title="7">
            {this.state.day7[1]}
          </p>
          <p className={style.name} title="7">
            {this.state.day7[2]}
          </p>

          <hr title="7" className={this.dayAvailable(7)} />

          <h5 title="7" className={this.dayAvailable(7)}>Tarde</h5>

              <p title="7" style={{color: this.state.day7[9], display: this.circleAvalaible(7)}} className={style.circle}>•</p>
              <p title="7" style={{color: this.state.day7[10], display: this.circleAvalaible(7)}} className={style.circle}>•</p>
              <p title="7" style={{color: this.state.day7[11], display: this.circleAvalaible(7)}} className={style.circle}>•</p>

          <p className={style.name} title="7">{this.state.day7[3]}</p>
          <p className={style.name} title="7">{this.state.day7[4]}</p>
          <p className={style.name} title="7">{this.state.day7[5]}</p>
        </div>
        <div title="8" onClick={this.props.handle}>
          <h2 title="8">8</h2>
          <h5 title="8" className={this.dayAvailable(8)} >Mañana</h5>

              <p title="8" style={{color: this.state.day8[6], display: this.circleAvalaible(8)}} className={style.circle}>•</p>
              <p title="8" style={{color: this.state.day8[7], display: this.circleAvalaible(8)}} className={style.circle}>•</p>
              <p title="8" style={{color: this.state.day8[8], display: this.circleAvalaible(8)}} className={style.circle}>•</p>

          <p className={style.name} title="8">
            {this.state.day8[0]}
          </p>
          <p className={style.name} title="8">
            {this.state.day8[1]}
          </p>
          <p className={style.name} title="8">
            {this.state.day8[2]}
          </p>

          <hr title="8" className={this.dayAvailable(8)} />

          <h5 title="8" className={this.dayAvailable(8)} >Tarde</h5>

              <p title="8" style={{color: this.state.day8[9], display: this.circleAvalaible(8)}} className={style.circle}>•</p>
              <p title="8" style={{color: this.state.day8[10], display: this.circleAvalaible(8)}} className={style.circle}>•</p>
              <p title="8" style={{color: this.state.day8[11], display: this.circleAvalaible(8)}} className={style.circle}>•</p>

          <p className={style.name} title="8">{this.state.day8[3]}</p>
          <p className={style.name} title="8">{this.state.day8[4]}</p>
          <p className={style.name} title="8">{this.state.day8[5]}</p>
        </div>
        <div title="9" onClick={this.props.handle}>
          <h2 title="9">9</h2>
          <h5 title="9" className={this.dayAvailable(9)} >Mañana</h5>

              <p title="9" style={{color: this.state.day9[6], display: this.circleAvalaible(9)}} className={style.circle}>•</p>
              <p title="9" style={{color: this.state.day9[7], display: this.circleAvalaible(9)}} className={style.circle}>•</p>
              <p title="9" style={{color: this.state.day9[8], display: this.circleAvalaible(9)}} className={style.circle}>•</p>

          <p className={style.name} title="9">
            {this.state.day9[0]}
          </p>
          <p className={style.name} title="9">
            {this.state.day9[1]}
          </p>
          <p className={style.name} title="9">
            {this.state.day9[2]}
          </p>

          <hr title="9" className={this.dayAvailable(9)} />

          <h5 title="9" className={this.dayAvailable(9)} >Tarde</h5>

              <p title="9" style={{color: this.state.day9[9], display: this.circleAvalaible(9)}} className={style.circle}>•</p>
              <p title="9" style={{color: this.state.day9[10], display: this.circleAvalaible(9)}} className={style.circle}>•</p>
              <p title="9" style={{color: this.state.day9[11], display: this.circleAvalaible(9)}} className={style.circle}>•</p>

          <p className={style.name} title="9">{this.state.day9[3]}</p>
          <p className={style.name} title="9">{this.state.day9[4]}</p>
          <p className={style.name} title="9">{this.state.day9[5]}</p>
        </div>
        <div title="10" onClick={this.props.handle}>
          <h2 title="10">10</h2>
          <h5 title="10" className={this.dayAvailable(10)} >Mañana</h5>

              <p title="10" style={{color: this.state.day10[6], display: this.circleAvalaible(10)}} className={style.circle}>•</p>
              <p title="10" style={{color: this.state.day10[7], display: this.circleAvalaible(10)}} className={style.circle}>•</p>
              <p title="10" style={{color: this.state.day10[8], display: this.circleAvalaible(10)}} className={style.circle}>•</p>

          <p className={style.name} title="10">
            {this.state.day10[0]}
          </p>
          <p className={style.name} title="10">
            {this.state.day10[1]}
          </p>
          <p className={style.name} title="10">
            {this.state.day10[2]}
          </p>

          <hr title="10" className={this.dayAvailable(10)} />

          <h5 title="10" className={this.dayAvailable(10)} >Tarde</h5>

              <p title="10" style={{color: this.state.day10[9], display: this.circleAvalaible(10)}} className={style.circle}>•</p>
              <p title="10" style={{color: this.state.day10[10], display: this.circleAvalaible(10)}} className={style.circle}>•</p>
              <p title="10" style={{color: this.state.day10[11], display: this.circleAvalaible(10)}} className={style.circle}>•</p>

          <p className={style.name} title="10">{this.state.day10[3]}</p>
          <p className={style.name} title="10">{this.state.day10[4]}</p>
          <p className={style.name} title="10">{this.state.day10[5]}</p>
        </div>
        <div title="11" onClick={this.props.handle}>
          <h2 title="11">11</h2>
          <h5 title="11" className={this.dayAvailable(11)} >Mañana</h5>

              <p title="11" style={{color: this.state.day11[6], display: this.circleAvalaible(11)}} className={style.circle}>•</p>
              <p title="11" style={{color: this.state.day11[7], display: this.circleAvalaible(11)}} className={style.circle}>•</p>
              <p title="11" style={{color: this.state.day11[8], display: this.circleAvalaible(11)}} className={style.circle}>•</p>

          <p className={style.name} title="11">
            {this.state.day11[0]}
          </p>
          <p className={style.name} title="11">
            {this.state.day11[1]}
          </p>
          <p className={style.name} title="11">
            {this.state.day11[2]}
          </p>

          <hr title="11" className={this.dayAvailable(11)} />

          <h5 title="11" className={this.dayAvailable(11)} >Tarde</h5>

              <p title="11" style={{color: this.state.day11[9], display: this.circleAvalaible(11)}} className={style.circle}>•</p>
              <p title="11" style={{color: this.state.day11[10], display: this.circleAvalaible(11)}} className={style.circle}>•</p>
              <p title="11" style={{color: this.state.day11[11], display: this.circleAvalaible(11)}} className={style.circle}>•</p>

          <p className={style.name} title="11">{this.state.day11[3]}</p>
          <p className={style.name} title="11">{this.state.day11[4]}</p>
          <p className={style.name} title="11">{this.state.day11[5]}</p>
        </div>
        <div title="12" onClick={this.props.handle}>
          <h2 title="12">12</h2>
          <h5 title="12" className={this.dayAvailable(12)} >Mañana</h5>

              <p title="12" style={{color: this.state.day12[6], display: this.circleAvalaible(12)}} className={style.circle}>•</p>
              <p title="12" style={{color: this.state.day12[7], display: this.circleAvalaible(12)}} className={style.circle}>•</p>
              <p title="12" style={{color: this.state.day12[8], display: this.circleAvalaible(12)}} className={style.circle}>•</p>

          <p className={style.name} title="12">
            {this.state.day12[0]}
          </p>
          <p className={style.name} title="12">
            {this.state.day12[1]}
          </p>
          <p className={style.name} title="12">
            {this.state.day12[2]}
          </p>

          <hr title="12" className={this.dayAvailable(12)} />

          <h5 title="12" className={this.dayAvailable(12)}>Tarde</h5>

              <p title="12" style={{color: this.state.day12[9], display: this.circleAvalaible(12)}} className={style.circle}>•</p>
              <p title="12" style={{color: this.state.day12[10], display: this.circleAvalaible(12)}} className={style.circle}>•</p>
              <p title="12" style={{color: this.state.day12[11], display: this.circleAvalaible(12)}} className={style.circle}>•</p>

          <p className={style.name} title="12">{this.state.day12[3]}</p>
          <p className={style.name} title="12">{this.state.day12[4]}</p>
          <p className={style.name} title="12">{this.state.day12[5]}</p>
        </div>
        <div title="13" onClick={this.props.handle}>
          <h2 title="13">13</h2>
          <h5 title="13" className={this.dayAvailable(13)}>Mañana</h5>

              <p title="13" style={{color: this.state.day13[6], display: this.circleAvalaible(13)}} className={style.circle}>•</p>
              <p title="13" style={{color: this.state.day13[7], display: this.circleAvalaible(13)}} className={style.circle}>•</p>
              <p title="13" style={{color: this.state.day13[8], display: this.circleAvalaible(13)}} className={style.circle}>•</p>

          <p className={style.name} title="13">
            {this.state.day13[0]}
          </p>
          <p className={style.name} title="13">
            {this.state.day13[1]}
          </p>
          <p className={style.name} title="13">
            {this.state.day13[2]}
          </p>

          <hr title="13" className={this.dayAvailable(13)} />

          <h5 title="13" className={this.dayAvailable(13)}>Tarde</h5>

              <p title="13" style={{color: this.state.day13[9], display: this.circleAvalaible(13)}} className={style.circle}>•</p>
              <p title="13" style={{color: this.state.day13[10], display: this.circleAvalaible(13)}} className={style.circle}>•</p>
              <p title="13" style={{color: this.state.day13[11], display: this.circleAvalaible(13)}} className={style.circle}>•</p>

          <p className={style.name} title="13">{this.state.day13[3]}</p>
          <p className={style.name} title="13">{this.state.day13[4]}</p>
          <p className={style.name} title="13">{this.state.day13[5]}</p>
        </div>
        <div title="14" onClick={this.props.handle}>
          <h2 title="14">14</h2>
          <h5 title="14" className={this.dayAvailable(14)}>Mañana</h5>

              <p title="14" style={{color: this.state.day14[6], display: this.circleAvalaible(14)}} className={style.circle}>•</p>
              <p title="14" style={{color: this.state.day14[7], display: this.circleAvalaible(14)}} className={style.circle}>•</p>
              <p title="14" style={{color: this.state.day14[8], display: this.circleAvalaible(14)}} className={style.circle}>•</p>

          <p className={style.name} title="14">
            {this.state.day14[0]}
          </p>
          <p className={style.name} title="14">
            {this.state.day14[1]}
          </p>
          <p className={style.name} title="14">
            {this.state.day14[2]}
          </p>

          <hr title="14" className={this.dayAvailable(14)} />

          <h5 title="14" className={this.dayAvailable(14)}>Tarde</h5>

              <p title="14" style={{color: this.state.day14[9], display: this.circleAvalaible(14)}} className={style.circle}>•</p>
              <p title="14" style={{color: this.state.day14[10], display: this.circleAvalaible(14)}} className={style.circle}>•</p>
              <p title="14" style={{color: this.state.day14[11], display: this.circleAvalaible(14)}} className={style.circle}>•</p>

          <p className={style.name} title="14">{this.state.day14[3]}</p>
          <p className={style.name} title="14">{this.state.day14[4]}</p>
          <p className={style.name} title="14">{this.state.day14[5]}</p>
        </div>
        <div title="15" onClick={this.props.handle}>
          <h2 title="15">15</h2>
          <h5 title="15" className={this.dayAvailable(15)}>Mañana</h5>

              <p title="15" style={{color: this.state.day15[6], display: this.circleAvalaible(15)}} className={style.circle}>•</p>
              <p title="15" style={{color: this.state.day15[7], display: this.circleAvalaible(15)}} className={style.circle}>•</p>
              <p title="15" style={{color: this.state.day15[8], display: this.circleAvalaible(15)}} className={style.circle}>•</p>

          <p className={style.name} title="15">
            {this.state.day15[0]}
          </p>
          <p className={style.name} title="15">
            {this.state.day15[1]}
          </p>
          <p className={style.name} title="15">
            {this.state.day15[2]}
          </p>

          <hr title="15" className={this.dayAvailable(15)} />

          <h5 title="15" className={this.dayAvailable(15)}>Tarde</h5>

              <p title="15" style={{color: this.state.day15[9], display: this.circleAvalaible(15)}} className={style.circle}>•</p>
              <p title="15" style={{color: this.state.day15[10], display: this.circleAvalaible(15)}} className={style.circle}>•</p>
              <p title="15" style={{color: this.state.day15[11], display: this.circleAvalaible(15)}} className={style.circle}>•</p>

          <p className={style.name} title="15">{this.state.day15[3]}</p>
          <p className={style.name} title="15">{this.state.day15[4]}</p>
          <p className={style.name} title="15">{this.state.day15[5]}</p>
        </div>
        <div title="16" onClick={this.props.handle}>
          <h2 title="16">16</h2>
          <h5 title="16" className={this.dayAvailable(16)}>Mañana</h5>

              <p title="16" style={{color: this.state.day16[6], display: this.circleAvalaible(16)}} className={style.circle}>•</p>
              <p title="16" style={{color: this.state.day16[7], display: this.circleAvalaible(16)}} className={style.circle}>•</p>
              <p title="16" style={{color: this.state.day16[8], display: this.circleAvalaible(16)}} className={style.circle}>•</p>

          <p className={style.name} title="16">
            {this.state.day16[0]}
          </p>
          <p className={style.name} title="16">
            {this.state.day16[1]}
          </p>
          <p className={style.name} title="16">
            {this.state.day16[2]}
          </p>

          <hr title="16" className={this.dayAvailable(16)} />

          <h5 title="16" className={this.dayAvailable(16)}>Tarde</h5>

              <p title="16" style={{color: this.state.day16[9], display: this.circleAvalaible(16)}} className={style.circle}>•</p>
              <p title="16" style={{color: this.state.day16[10], display: this.circleAvalaible(16)}} className={style.circle}>•</p>
              <p title="16" style={{color: this.state.day16[11], display: this.circleAvalaible(16)}} className={style.circle}>•</p>

          <p className={style.name} title="16">{this.state.day16[3]}</p>
          <p className={style.name} title="16">{this.state.day16[4]}</p>
          <p className={style.name} title="16">{this.state.day16[5]}</p>
        </div>
        <div title="17" onClick={this.props.handle}>
          <h2 title="17">17</h2>
          <h5 title="17" className={this.dayAvailable(17)}>Mañana</h5>

              <p title="17" style={{color: this.state.day17[6], display: this.circleAvalaible(17)}} className={style.circle}>•</p>
              <p title="17" style={{color: this.state.day17[7], display: this.circleAvalaible(17)}} className={style.circle}>•</p>
              <p title="17" style={{color: this.state.day17[8], display: this.circleAvalaible(17)}} className={style.circle}>•</p>

          <p className={style.name} title="17">
            {this.state.day17[0]}
          </p>
          <p className={style.name} title="17">
            {this.state.day17[1]}
          </p>
          <p className={style.name} title="17">
            {this.state.day17[2]}
          </p>

          <hr title="17" className={this.dayAvailable(17)} />

          <h5 title="17" className={this.dayAvailable(17)} >Tarde</h5>

              <p title="17" style={{color: this.state.day17[9], display: this.circleAvalaible(17)}} className={style.circle}>•</p>
              <p title="17" style={{color: this.state.day17[10], display: this.circleAvalaible(17)}} className={style.circle}>•</p>
              <p title="17" style={{color: this.state.day17[11], display: this.circleAvalaible(17)}} className={style.circle}>•</p>

          <p className={style.name} title="17">{this.state.day17[3]}</p>
          <p className={style.name} title="17">{this.state.day17[4]}</p>
          <p className={style.name} title="17">{this.state.day17[5]}</p>
        </div>
        <div title="18" onClick={this.props.handle}>
          <h2 title="18">18</h2>
          <h5 title="18" className={this.dayAvailable(18)}>Mañana</h5>

              <p title="18" style={{color: this.state.day18[6], display: this.circleAvalaible(18)}} className={style.circle}>•</p>
              <p title="18" style={{color: this.state.day18[7], display: this.circleAvalaible(18)}} className={style.circle}>•</p>
              <p title="18" style={{color: this.state.day18[8], display: this.circleAvalaible(18)}} className={style.circle}>•</p>

          <p className={style.name} title="18">
            {this.state.day18[0]}
          </p>
          <p className={style.name} title="18">
            {this.state.day18[1]}
          </p>
          <p className={style.name} title="18">
            {this.state.day18[2]}
          </p>

          <hr title="18" className={this.dayAvailable(18)} />

          <h5 title="18" className={this.dayAvailable(18)}>Tarde</h5>

              <p title="18" style={{color: this.state.day18[9], display: this.circleAvalaible(18)}} className={style.circle}>•</p>
              <p title="18" style={{color: this.state.day18[10], display: this.circleAvalaible(18)}} className={style.circle}>•</p>
              <p title="18" style={{color: this.state.day18[11], display: this.circleAvalaible(18)}} className={style.circle}>•</p>

          <p className={style.name} title="18">{this.state.day18[3]}</p>
          <p className={style.name} title="18">{this.state.day18[4]}</p>
          <p className={style.name} title="18">{this.state.day18[5]}</p>
        </div>
        <div title="19" onClick={this.props.handle}>
          <h2 title="19">19</h2>
          <h5 title="19" className={this.dayAvailable(19)}>Mañana</h5>

              <p title="19" style={{color: this.state.day19[6], display: this.circleAvalaible(19)}} className={style.circle}>•</p>
              <p title="19" style={{color: this.state.day19[7], display: this.circleAvalaible(19)}} className={style.circle}>•</p>
              <p title="19" style={{color: this.state.day19[8], display: this.circleAvalaible(19)}} className={style.circle}>•</p>

          <p className={style.name} title="19">
            {this.state.day19[0]}
          </p>
          <p className={style.name} title="19">
            {this.state.day19[1]}
          </p>
          <p className={style.name} title="19">
            {this.state.day19[2]}
          </p>

          <hr title="19" className={this.dayAvailable(19)} />

          <h5 title="19" className={this.dayAvailable(19)}>Tarde</h5>

              <p title="19" style={{color: this.state.day19[9], display: this.circleAvalaible(19)}} className={style.circle}>•</p>
              <p title="19" style={{color: this.state.day19[10], display: this.circleAvalaible(19)}} className={style.circle}>•</p>
              <p title="19" style={{color: this.state.day19[11], display: this.circleAvalaible(19)}} className={style.circle}>•</p>

          <p className={style.name} title="19">{this.state.day19[3]}</p>
          <p className={style.name} title="19">{this.state.day19[4]}</p>
          <p className={style.name} title="19">{this.state.day19[5]}</p>
        </div>
        <div title="20" onClick={this.props.handle}>
          <h2 title="20">20</h2>
          <h5 title="20" className={this.dayAvailable(20)}>Mañana</h5>

              <p title="20" style={{color: this.state.day20[6], display: this.circleAvalaible(20)}} className={style.circle}>•</p>
              <p title="20" style={{color: this.state.day20[7], display: this.circleAvalaible(20)}} className={style.circle}>•</p>
              <p title="20" style={{color: this.state.day20[8], display: this.circleAvalaible(20)}} className={style.circle}>•</p>

          <p className={style.name} title="20">
            {this.state.day20[0]}
          </p>
          <p className={style.name} title="20">
            {this.state.day20[1]}
          </p>
          <p className={style.name} title="20">
            {this.state.day20[2]}
          </p>

          <hr title="20" className={this.dayAvailable(20)} />

          <h5 title="20" className={this.dayAvailable(20)} >Tarde</h5>

              <p title="20" style={{color: this.state.day20[9], display: this.circleAvalaible(20)}} className={style.circle}>•</p>
              <p title="20" style={{color: this.state.day20[10], display: this.circleAvalaible(20)}} className={style.circle}>•</p>
              <p title="20" style={{color: this.state.day20[11], display: this.circleAvalaible(20)}} className={style.circle}>•</p>

          <p className={style.name} title="20">{this.state.day20[3]}</p>
          <p className={style.name} title="20">{this.state.day20[4]}</p>
          <p className={style.name} title="20">{this.state.day20[5]}</p>
        </div>
        <div title="21" onClick={this.props.handle}>
          <h2 title="21">21</h2>
          <h5 title="21" className={this.dayAvailable(21)}>Mañana</h5>

              <p title="21" style={{color: this.state.day21[6], display: this.circleAvalaible(21)}} className={style.circle}>•</p>
              <p title="21" style={{color: this.state.day21[7], display: this.circleAvalaible(21)}} className={style.circle}>•</p>
              <p title="21" style={{color: this.state.day21[8], display: this.circleAvalaible(21)}} className={style.circle}>•</p>

          <p className={style.name} title="21">
            {this.state.day21[0]}
          </p>
          <p className={style.name} title="21">
            {this.state.day21[1]}
          </p>
          <p className={style.name} title="21">
            {this.state.day21[2]}
          </p>

          <hr title="21" className={this.dayAvailable(21)} />

          <h5 title="21" className={this.dayAvailable(21)}>Tarde</h5>

              <p title="21" style={{color: this.state.day21[9], display: this.circleAvalaible(21)}} className={style.circle}>•</p>
              <p title="21" style={{color: this.state.day21[10], display: this.circleAvalaible(21)}} className={style.circle}>•</p>
              <p title="21" style={{color: this.state.day21[11], display: this.circleAvalaible(21)}} className={style.circle}>•</p>

          <p className={style.name} title="21">{this.state.day21[3]}</p>
          <p className={style.name} title="21">{this.state.day21[4]}</p>
          <p className={style.name} title="21">{this.state.day21[5]}</p>
        </div>
        <div title="22" onClick={this.props.handle}>
          <h2 title="22">22</h2>
          <h5 title="22" className={this.dayAvailable(22)}>Mañana</h5>

              <p title="22" style={{color: this.state.day22[6], display: this.circleAvalaible(22)}} className={style.circle}>•</p>
              <p title="22" style={{color: this.state.day22[7], display: this.circleAvalaible(22)}} className={style.circle}>•</p>
              <p title="22" style={{color: this.state.day22[8], display: this.circleAvalaible(22)}} className={style.circle}>•</p>

          <p className={style.name} title="22">
            {this.state.day22[0]}
          </p>
          <p className={style.name} title="22">
            {this.state.day22[1]}
          </p>
          <p className={style.name} title="22">
            {this.state.day22[2]}
          </p>

          <hr title="22" className={this.dayAvailable(22)} />

          <h5 title="22" className={this.dayAvailable(22)}>Tarde</h5>

              <p title="22" style={{color: this.state.day22[9], display: this.circleAvalaible(22)}} className={style.circle}>•</p>
              <p title="22" style={{color: this.state.day22[10], display: this.circleAvalaible(22)}} className={style.circle}>•</p>
              <p title="22" style={{color: this.state.day22[11], display: this.circleAvalaible(22)}} className={style.circle}>•</p>

          <p className={style.name} title="22">{this.state.day22[3]}</p>
          <p className={style.name} title="22">{this.state.day22[4]}</p>
          <p className={style.name} title="22">{this.state.day22[5]}</p>
        </div>
        <div title="23" onClick={this.props.handle}>
          <h2 title="23">23</h2>
          <h5 title="23" className={this.dayAvailable(23)}>Mañana</h5>

              <p title="23" style={{color: this.state.day23[6], display: this.circleAvalaible(23)}} className={style.circle}>•</p>
              <p title="23" style={{color: this.state.day23[7], display: this.circleAvalaible(23)}} className={style.circle}>•</p>
              <p title="23" style={{color: this.state.day23[8], display: this.circleAvalaible(23)}} className={style.circle}>•</p>

          <p className={style.name} title="23">
            {this.state.day23[0]}
          </p>
          <p className={style.name} title="23">
            {this.state.day23[1]}
          </p>
          <p className={style.name} title="23">
            {this.state.day23[2]}
          </p>

          <hr title="23" className={this.dayAvailable(23)} />

          <h5 title="23" className={this.dayAvailable(23)}>Tarde</h5>

              <p title="23" style={{color: this.state.day23[9], display: this.circleAvalaible(23)}} className={style.circle}>•</p>
              <p title="23" style={{color: this.state.day23[10], display: this.circleAvalaible(23)}} className={style.circle}>•</p>
              <p title="23" style={{color: this.state.day23[11], display: this.circleAvalaible(23)}} className={style.circle}>•</p>

          <p className={style.name} title="23">{this.state.day23[3]}</p>
          <p className={style.name} title="23">{this.state.day23[4]}</p>
          <p className={style.name} title="23">{this.state.day23[5]}</p>
        </div>
        <div title="24" onClick={this.props.handle}>
          <h2 title="24">24</h2>
          <h5 title="24" className={this.dayAvailable(24)}>Mañana</h5>

              <p title="24" style={{color: this.state.day24[6], display: this.circleAvalaible(24)}} className={style.circle}>•</p>
              <p title="24" style={{color: this.state.day24[7], display: this.circleAvalaible(24)}} className={style.circle}>•</p>
              <p title="24" style={{color: this.state.day24[8], display: this.circleAvalaible(24)}} className={style.circle}>•</p>

          <p className={style.name} title="24">
            {this.state.day24[0]}
          </p>
          <p className={style.name} title="24">
            {this.state.day24[1]}
          </p>
          <p className={style.name} title="24">
            {this.state.day24[2]}
          </p>

          <hr title="24" className={this.dayAvailable(24)} />

          <h5 title="24" className={this.dayAvailable(24)}>Tarde</h5>

              <p title="24" style={{color: this.state.day24[9], display: this.circleAvalaible(24)}} className={style.circle}>•</p>
              <p title="24" style={{color: this.state.day24[10], display: this.circleAvalaible(24)}} className={style.circle}>•</p>
              <p title="24" style={{color: this.state.day24[11], display: this.circleAvalaible(24)}} className={style.circle}>•</p>

          <p className={style.name} title="24">{this.state.day24[3]}</p>
          <p className={style.name} title="24">{this.state.day24[4]}</p>
          <p className={style.name} title="24">{this.state.day24[5]}</p>
        </div>
        <div title="25" onClick={this.props.handle}>
          <h2 title="25">25</h2>
          <h5 title="25" className={this.dayAvailable(25)}>Mañana</h5>

              <p title="25" style={{color: this.state.day25[6], display: this.circleAvalaible(25)}} className={style.circle}>•</p>
              <p title="25" style={{color: this.state.day25[7], display: this.circleAvalaible(25)}} className={style.circle}>•</p>
              <p title="25" style={{color: this.state.day25[8], display: this.circleAvalaible(25)}} className={style.circle}>•</p>

          <p className={style.name} title="25">
            {this.state.day25[0]}
          </p>
          <p className={style.name} title="25">
            {this.state.day25[1]}
          </p>
          <p className={style.name} title="25">
            {this.state.day25[2]}
          </p>

          <hr title="25" className={this.dayAvailable(25)} />

          <h5 title="25" className={this.dayAvailable(25)}>Tarde</h5>

              <p title="25" style={{color: this.state.day25[9], display: this.circleAvalaible(25)}} className={style.circle}>•</p>
              <p title="25" style={{color: this.state.day25[10], display: this.circleAvalaible(25)}} className={style.circle}>•</p>
              <p title="25" style={{color: this.state.day25[11], display: this.circleAvalaible(25)}} className={style.circle}>•</p>

          <p className={style.name} title="25">{this.state.day25[3]}</p>
          <p className={style.name} title="25">{this.state.day25[4]}</p>
          <p className={style.name} title="25">{this.state.day25[5]}</p>
        </div>
        <div title="26" onClick={this.props.handle}>
          <h2 title="26">26</h2>
          <h5 title="26" className={this.dayAvailable(26)}>Mañana</h5>

              <p title="26" style={{color: this.state.day26[6], display: this.circleAvalaible(26)}} className={style.circle}>•</p>
              <p title="26" style={{color: this.state.day26[7], display: this.circleAvalaible(26)}} className={style.circle}>•</p>
              <p title="26" style={{color: this.state.day26[8], display: this.circleAvalaible(26)}} className={style.circle}>•</p>

          <p className={style.name} title="26">
            {this.state.day26[0]}
          </p>
          <p className={style.name} title="26">
            {this.state.day26[1]}
          </p>
          <p className={style.name} title="26">
            {this.state.day26[2]}
          </p>

          <hr title="26" className={this.dayAvailable(26)} />

          <h5 title="26" className={this.dayAvailable(26)}>Tarde</h5>

              <p title="26" style={{color: this.state.day26[9], display: this.circleAvalaible(26)}} className={style.circle}>•</p>
              <p title="26" style={{color: this.state.day26[10], display: this.circleAvalaible(26)}} className={style.circle}>•</p>
              <p title="26" style={{color: this.state.day26[11], display: this.circleAvalaible(26)}} className={style.circle}>•</p>

          <p className={style.name} title="26">{this.state.day26[3]}</p>
          <p className={style.name} title="26">{this.state.day26[4]}</p>
          <p className={style.name} title="26">{this.state.day26[5]}</p>
        </div>
        <div title="27" onClick={this.props.handle}>
          <h2 title="27">27</h2>
          <h5 title="27" className={this.dayAvailable(27)}>Mañana</h5>

              <p title="27" style={{color: this.state.day27[6], display: this.circleAvalaible(27)}} className={style.circle}>•</p>
              <p title="27" style={{color: this.state.day27[7], display: this.circleAvalaible(27)}} className={style.circle}>•</p>
              <p title="27" style={{color: this.state.day27[8], display: this.circleAvalaible(27)}} className={style.circle}>•</p>

          <p className={style.name} title="27">
            {this.state.day27[0]}
          </p>
          <p className={style.name} title="27">
            {this.state.day27[1]}
          </p>
          <p className={style.name} title="27">
            {this.state.day27[2]}
          </p>

          <hr title="27" className={this.dayAvailable(27)} />

          <h5 title="27" className={this.dayAvailable(27)}>Tarde</h5>

              <p title="27" style={{color: this.state.day27[9], display: this.circleAvalaible(27)}} className={style.circle}>•</p>
              <p title="27" style={{color: this.state.day27[10], display: this.circleAvalaible(27)}} className={style.circle}>•</p>
              <p title="27" style={{color: this.state.day27[11], display: this.circleAvalaible(27)}} className={style.circle}>•</p>

          <p className={style.name} title="27">{this.state.day27[3]}</p>
          <p className={style.name} title="27">{this.state.day27[4]}</p>
          <p className={style.name} title="27">{this.state.day27[5]}</p>
        </div>
        <div title="28" onClick={this.props.handle}>
          <h2 title="28">28</h2>
          <h5 title="28" className={this.dayAvailable(28)}>Mañana</h5>

              <p title="28" style={{color: this.state.day28[6], display: this.circleAvalaible(28)}} className={style.circle}>•</p>
              <p title="28" style={{color: this.state.day28[7], display: this.circleAvalaible(28)}} className={style.circle}>•</p>
              <p title="28" style={{color: this.state.day28[8], display: this.circleAvalaible(28)}} className={style.circle}>•</p>

          <p className={style.name} title="28">
            {this.state.day28[0]}
          </p>
          <p className={style.name} title="28">
            {this.state.day28[1]}
          </p>
          <p className={style.name} title="28">
            {this.state.day28[2]}
          </p>

          <hr title="28" className={this.dayAvailable(28)} />

          <h5 title="28" className={this.dayAvailable(28)}>Tarde</h5>

              <p title="28" style={{color: this.state.day28[9], display: this.circleAvalaible(28)}} className={style.circle}>•</p>
              <p title="28" style={{color: this.state.day28[10], display: this.circleAvalaible(28)}} className={style.circle}>•</p>
              <p title="28" style={{color: this.state.day28[11], display: this.circleAvalaible(28)}} className={style.circle}>•</p>

          <p className={style.name} title="28">{this.state.day28[3]}</p>
          <p className={style.name} title="28">{this.state.day28[4]}</p>
          <p className={style.name} title="28">{this.state.day28[5]}</p>
        </div>
        <div
          title="29"
          onClick={this.props.handle}
          style={{ display: this.props.days29.dia29 }}
        >
          <h2 title="29" style={{ display: this.props.days29.dia29 }}>
            29
          </h2>
          <h5 title="29" className={this.dayAvailable(29)}>Mañana</h5>

              <p title="29" style={{color: this.state.day29[6], display: this.circleAvalaible(29)}} className={style.circle}>•</p>
              <p title="29" style={{color: this.state.day29[7], display: this.circleAvalaible(29)}} className={style.circle}>•</p>
              <p title="29" style={{color: this.state.day29[8], display: this.circleAvalaible(29)}} className={style.circle}>•</p>

          <p className={style.name} title="29">
            {this.state.day29[0]}
          </p>
          <p className={style.name} title="29">
            {this.state.day29[1]}
          </p>
          <p className={style.name} title="29">
            {this.state.day29[2]}
          </p>

          <hr title="29" className={this.dayAvailable(29)} />

          <h5 title="29" className={this.dayAvailable(29)}>Tarde</h5>

              <p title="29" style={{color: this.state.day29[9], display: this.circleAvalaible(29)}} className={style.circle}>•</p>
              <p title="29" style={{color: this.state.day29[10], display: this.circleAvalaible(29)}} className={style.circle}>•</p>
              <p title="29" style={{color: this.state.day29[11], display: this.circleAvalaible(29)}} className={style.circle}>•</p>

          <p className={style.name} title="29">{this.state.day29[3]}</p>
          <p className={style.name} title="29">{this.state.day29[4]}</p>
          <p className={style.name} title="29">{this.state.day29[5]}</p>
        </div>
        <div
          title="30"
          onClick={this.props.handle}
          style={{ display: this.props.days30.dia30 }}
        >
          <h2 title="30" style={{ display: this.props.days30.dia30 }}>
            30
          </h2>
          <h5 title="30" className={this.dayAvailable(30)}>Mañana</h5>

              <p title="30" style={{color: this.state.day30[6], display: this.circleAvalaible(30)}} className={style.circle}>•</p>
              <p title="30" style={{color: this.state.day30[7], display: this.circleAvalaible(30)}} className={style.circle}>•</p>
              <p title="30" style={{color: this.state.day30[8], display: this.circleAvalaible(30)}} className={style.circle}>•</p>

          <p className={style.name} title="30">
            {this.state.day30[0]}
          </p>
          <p className={style.name} title="30">
            {this.state.day30[1]}
          </p>
          <p className={style.name} title="30">
            {this.state.day30[2]}
          </p>

          <hr title="30" className={this.dayAvailable(30)} />

          <h5 title="30" className={this.dayAvailable(30)}>Tarde</h5>

              <p title="30" style={{color: this.state.day30[9], display: this.circleAvalaible(30)}} className={style.circle}>•</p>
              <p title="30" style={{color: this.state.day30[10], display: this.circleAvalaible(30)}} className={style.circle}>•</p>
              <p title="30" style={{color: this.state.day30[11], display: this.circleAvalaible(30)}} className={style.circle}>•</p>

          <p className={style.name} title="30">{this.state.day30[3]}</p>
          <p className={style.name} title="30">{this.state.day30[4]}</p>
          <p className={style.name} title="30">{this.state.day30[5]}</p>
        </div>
        <div
          title="31"
          onClick={this.props.handle}
          style={{ display: this.props.days31.dia31 }}
        >
          <h2 title="31" style={{ display: this.props.days31.dia31 }}>
            31
          </h2>
          <h5 title="31" className={this.dayAvailable(31)}>Mañana</h5>

              <p title="31" style={{color: this.state.day31[6], display: this.circleAvalaible(31)}} className={style.circle}>•</p>
              <p title="31" style={{color: this.state.day31[7], display: this.circleAvalaible(31)}} className={style.circle}>•</p>
              <p title="31" style={{color: this.state.day31[8], display: this.circleAvalaible(31)}} className={style.circle}>•</p>

          <p className={style.name} title="31">
            {this.state.day31[0]}
          </p>
          <p className={style.name} title="31">
            {this.state.day31[1]}
          </p>
          <p className={style.name} title="31">
            {this.state.day31[2]}
          </p>

          <hr title="31" className={this.dayAvailable(31)} />

          <h5 title="31" className={this.dayAvailable(31)}>Tarde</h5>

              <p title="31" style={{color: this.state.day31[9], display: this.circleAvalaible(31)}} className={style.circle}>•</p>
              <p title="31" style={{color: this.state.day31[10], display: this.circleAvalaible(31)}} className={style.circle}>•</p>
              <p title="31" style={{color: this.state.day31[11], display: this.circleAvalaible(31)}} className={style.circle}>•</p>

          <p className={style.name} title="31">{this.state.day31[3]}</p>
          <p className={style.name} title="31">{this.state.day31[4]}</p>
          <p className={style.name} title="31">{this.state.day31[5]}</p>
        </div>
      </div>
    );
  }
}

export default Day;
