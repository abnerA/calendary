import React from "react";
import style from "./Day.module.css";
import { dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

const tasksRef = ref(dataB, "abril");

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    // //   // const p = await getPersons();
    // //   // console.log(p.docs[0].data().name);
    // //   // this.setState({
    // //   //     anotados: p.docs[0].data().name
    // //   // });
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
  }

  render() {
    return (
      <div className={style.containerDays}>
        <div
          style={{
            gridColumnStart:
              this.props.firstDay === 0 ? 7 : this.props.firstDay,
          }}
          onClick={this.props.handle}
        >
          <h2 title="1">1</h2>
          <h5 title="1">Mañana</h5>

          {/* <p title="1" className={style.circle}>•</p>
              <p title="1" className={style.circle}>•</p>
              <p title="1" className={style.circle}>•</p> */}

          <p className={style.name} title="1">{this.state.day1[0]}</p>
          <p className={style.name} title="1">{this.state.day1[1]}</p>
          <p className={style.name} title="1">{this.state.day1[2]}</p>

          <hr title="1" />

          <h5 title="1">Tarde</h5>

          {/* <p title="1" className={style.circle1}>•</p>
              <p title="1" className={style.circle1}>•</p>
              <p title="1" className={style.circle1}>•</p> */}

          <p className={style.name} title="1"></p>
          <p className={style.name} title="1"></p>
          <p className={style.name} title="1"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="2">2</h2>
          <h5 title="2">Mañana</h5>

          {/* <p title="2" className={style.circle}>•</p>
              <p title="2" className={style.circle}>•</p>
              <p title="2" className={style.circle}>•</p> */}

          <p className={style.name} title="2">{this.state.day2[0]}</p>
          <p className={style.name} title="2">{this.state.day2[1]}</p>
          <p className={style.name} title="2">{this.state.day2[2]}</p>
          <hr title="2" />

          <h5 title="2">Tarde</h5>

          {/* <p title="1" className={style.circle1}>•</p>
<p title="1" className={style.circle1}>•</p>
<p title="1" className={style.circle1}>•</p> */}

          <p className={style.name} title="2"></p>
          <p className={style.name} title="2"></p>
          <p className={style.name} title="2"></p>
        </div>
        <div id="3" onClick={this.props.handle}>
          <h2 title="3">3</h2>
          <h5 title="3">Mañana</h5>

          {/* <p title="3" className={style.circle}>•</p>
              <p title="3" className={style.circle}>•</p>
              <p title="3" className={style.circle}>•</p> */}

          <p className={style.name} title="3">{this.state.day3[0]}</p>
          <p className={style.name} title="3">{this.state.day3[1]}</p>
          <p className={style.name} title="3">{this.state.day3[2]}</p>

          <hr title="3" />

          <h5 title="3">Tarde</h5>

          {/* <p title="3" className={style.circle1}>•</p>
<p title="3" className={style.circle1}>•</p>
<p title="3" className={style.circle1}>•</p> */}

          <p className={style.name} title="3"></p>
          <p className={style.name} title="3"></p>
          <p className={style.name} title="3"></p>
        </div>
        <div title="4" onClick={this.props.handle}>
          <h2 title="4">4</h2>
          <h5 title="4">Mañana</h5>

          {/* <p title="4" className={style.circle}>•</p>
          <p title="4" className={style.circle}>•</p>
          <p title="4" className={style.circle}>•</p> */}

          <p className={style.name} title="4">{this.state.day4[0]}</p>
          <p className={style.name} title="4">{this.state.day4[1]}</p>
          <p className={style.name} title="4">{this.state.day4[2]}</p>

          <hr title="4" />

          <h5 title="4">Tarde</h5>

          {/* <p title="4" className={style.circle1}>•</p>
          <p title="4" className={style.circle1}>•</p>
          <p title="4" className={style.circle1}>•</p> */}

          <p className={style.name} title="4"></p>
          <p className={style.name} title="4"></p>
          <p className={style.name} title="4"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="5">5</h2>
          <h5 title="5">Mañana</h5>

          {/* <p title="5" className={style.circle}>•</p>
              <p title="5" className={style.circle}>•</p>
              <p title="5" className={style.circle}>•</p> */}

          <p className={style.name} title="5">{this.state.day5[0]}</p>
          <p className={style.name} title="5">{this.state.day5[1]}</p>
          <p className={style.name} title="5">{this.state.day5[2]}</p>

          <hr title="5" />

          <h5 title="5">Tarde</h5>
          {/* <p title="5" className={style.circle1}>•</p>
              <p title="5" className={style.circle1}>•</p>
              <p title="5" className={style.circle1}>•</p> */}

          <p className={style.name} title="5"></p>
          <p className={style.name} title="5"></p>
          <p className={style.name} title="5"></p>
        </div>
        <div title="6" onClick={this.props.handle}>
          <h2 title="6">6</h2>
          <h5 title="6">Mañana</h5>

          {/* <p title="6" className={style.circle}>•</p>
              <p title="6" className={style.circle}>•</p>
              <p title="6" className={style.circle}>•</p> */}

          <p className={style.name} title="6">{this.state.day6[0]}</p>
          <p className={style.name} title="6">{this.state.day6[1]}</p>
          <p className={style.name} title="6">{this.state.day6[2]}</p>

          <hr title="6" />

          <h5 title="6">Tarde</h5>

          {/* <p title="6" className={style.circle1}>•</p>
              <p title="6" className={style.circle1}>•</p>
              <p title="6" className={style.circle1}>•</p> */}

          <p className={style.name} title="6"></p>
          <p className={style.name} title="6"></p>
          <p className={style.name} title="6"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="7">7</h2>
          <h5 title="7">Mañana</h5>

          {/* <p title="7" className={style.circle}>•</p>
              <p title="7" className={style.circle}>•</p>
              <p title="7" className={style.circle}>•</p> */}

          <p className={style.name} title="7">{this.state.day7[0]}</p>
          <p className={style.name} title="7">{this.state.day7[1]}</p>
          <p className={style.name} title="7">{this.state.day7[2]}</p>

          <hr title="7" />

          <h5 title="7">Tarde</h5>

          {/* <p title="7" className={style.circle1}>•</p>
              <p title="7" className={style.circle1}>•</p>
              <p title="7" className={style.circle1}>•</p> */}

          <p className={style.name} title="7"></p>
          <p className={style.name} title="7"></p>
          <p className={style.name} title="7"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="8">8</h2>
          <h5 title="8">Mañana</h5>

          {/* <p title="8" className={style.circle}>•</p>
              <p title="8" className={style.circle}>•</p>
              <p title="8" className={style.circle}>•</p> */}

          <p className={style.name} title="8">{this.state.day8[0]}</p>
          <p className={style.name} title="8">{this.state.day8[1]}</p>
          <p className={style.name} title="8">{this.state.day8[2]}</p>

          <hr title="8" />

          <h5 title="8">Tarde</h5>

          {/* <p title="8" className={style.circle1}>•</p>
              <p title="8" className={style.circle1}>•</p>
              <p title="8" className={style.circle1}>•</p> */}

          <p className={style.name} title="8"></p>
          <p className={style.name} title="8"></p>
          <p className={style.name} title="8"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="9">9</h2>
          <h5 title="9">Mañana</h5>

          {/* <p title="9" className={style.circle}>•</p>
              <p title="9" className={style.circle}>•</p>
              <p title="9" className={style.circle}>•</p> */}

          <p className={style.name} title="9">{this.state.day9[0]}</p>
          <p className={style.name} title="9">{this.state.day9[1]}</p>
          <p className={style.name} title="9">{this.state.day9[2]}</p>

          <hr title="9" />

          <h5 title="9">Tarde</h5>

          {/* <p title="9" className={style.circle1}>•</p>
              <p title="9" className={style.circle1}>•</p>
              <p title="9" className={style.circle1}>•</p> */}

          <p className={style.name} title="9"></p>
          <p className={style.name} title="9"></p>
          <p className={style.name} title="9"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="10">10</h2>
          <h5 title="10">Mañana</h5>

          {/* <p title="10" className={style.circle}>•</p>
              <p title="10" className={style.circle}>•</p>
              <p title="10" className={style.circle}>•</p> */}

          <p className={style.name} title="10">{this.state.day10[0]}</p>
          <p className={style.name} title="10">{this.state.day10[1]}</p>
          <p className={style.name} title="10">{this.state.day10[2]}</p>

          <hr title="10" />

          <h5 title="10">Tarde</h5>

          {/* <p title="10" className={style.circle1}>•</p>
              <p title="10" className={style.circle1}>•</p>
              <p title="10" className={style.circle1}>•</p> */}

          <p className={style.name} title="10"></p>
          <p className={style.name} title="10"></p>
          <p className={style.name} title="10"></p>
        </div>
        <div title="11" onClick={this.props.handle}>
          <h2 title="11">11</h2>
          <h5 title="11">Mañana</h5>

          {/* <p title="11" className={style.circle}>•</p>
              <p title="11" className={style.circle}>•</p>
              <p title="11" className={style.circle}>•</p> */}

          <p className={style.name} title="11">{this.state.day11[0]}</p>
          <p className={style.name} title="11">{this.state.day11[1]}</p>
          <p className={style.name} title="11">{this.state.day11[2]}</p>

          <hr title="11" />

          <h5 title="11">Tarde</h5>

          {/* <p title="11" className={style.circle1}>•</p>
              <p title="11" className={style.circle1}>•</p>
              <p title="11" className={style.circle1}>•</p> */}

          <p className={style.name} title="11"></p>
          <p className={style.name} title="11"></p>
          <p className={style.name} title="11"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="12">12</h2>
          <h5 title="12">Mañana</h5>

          {/* <p title="12" className={style.circle}>•</p>
              <p title="12" className={style.circle}>•</p>
              <p title="12" className={style.circle}>•</p> */}

          <p className={style.name} title="12">{this.state.day12[0]}</p>
          <p className={style.name} title="12">{this.state.day12[1]}</p>
          <p className={style.name} title="12">{this.state.day12[2]}</p>

          <hr title="12" />

          <h5 title="12">Tarde</h5>

          {/* <p title="12" className={style.circle1}>•</p>
              <p title="12" className={style.circle1}>•</p>
              <p title="12" className={style.circle1}>•</p> */}

          <p className={style.name} title="12"></p>
          <p className={style.name} title="12"></p>
          <p className={style.name} title="12"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="13">13</h2>
          <h5 title="13">Mañana</h5>

          {/* <p title="13" className={style.circle}>•</p>
              <p title="13" className={style.circle}>•</p>
              <p title="13" className={style.circle}>•</p> */}

          <p className={style.name} title="13">{this.state.day13[0]}</p>
          <p className={style.name} title="13">{this.state.day13[1]}</p>
          <p className={style.name} title="13">{this.state.day13[2]}</p>

          <hr title="13" />

          <h5 title="13">Tarde</h5>

          {/* <p title="13" className={style.circle1}>•</p>
              <p title="13" className={style.circle1}>•</p>
              <p title="13" className={style.circle1}>•</p> */}

          <p className={style.name} title="13"></p>
          <p className={style.name} title="13"></p>
          <p className={style.name} title="13"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="14">14</h2>
          <h5 title="14">Mañana</h5>

          {/* <p title="14" className={style.circle}>•</p>
              <p title="14" className={style.circle}>•</p>
              <p title="14" className={style.circle}>•</p> */}

          <p className={style.name} title="14">{this.state.day14[0]}</p>
          <p className={style.name} title="14">{this.state.day14[1]}</p>
          <p className={style.name} title="14">{this.state.day14[2]}</p>

          <hr title="14" />

          <h5 title="14">Tarde</h5>

          {/* <p title="14" className={style.circle1}>•</p>
              <p title="14" className={style.circle1}>•</p>
              <p title="14" className={style.circle1}>•</p> */}

          <p className={style.name} title="14"></p>
          <p className={style.name} title="14"></p>
          <p className={style.name} title="14"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="15">15</h2>
          <h5 title="15">Mañana</h5>

          {/* <p title="15" className={style.circle}>•</p>
              <p title="15" className={style.circle}>•</p>
              <p title="15" className={style.circle}>•</p> */}

          <p className={style.name} title="15">{this.state.day15[0]}</p>
          <p className={style.name} title="15">{this.state.day15[1]}</p>
          <p className={style.name} title="15">{this.state.day15[2]}</p>

          <hr title="15" />

          <h5 title="15">Tarde</h5>

          {/* <p title="15" className={style.circle1}>•</p>
              <p title="15" className={style.circle1}>•</p>
              <p title="15" className={style.circle1}>•</p> */}

          <p className={style.name} title="15"></p>
          <p className={style.name} title="15"></p>
          <p className={style.name} title="15"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="16">16</h2>
          <h5 title="16">Mañana</h5>

          {/* <p title="16" className={style.circle}>•</p>
              <p title="16" className={style.circle}>•</p>
              <p title="16" className={style.circle}>•</p> */}

          <p className={style.name} title="16">{this.state.day16[0]}</p>
          <p className={style.name} title="16">{this.state.day16[1]}</p>
          <p className={style.name} title="16">{this.state.day16[2]}</p>

          <hr title="16" />

          <h5 title="16">Tarde</h5>

          {/* <p title="16" className={style.circle1}>•</p>
              <p title="16" className={style.circle1}>•</p>
              <p title="16" className={style.circle1}>•</p> */}

          <p className={style.name} title="16"></p>
          <p className={style.name} title="16"></p>
          <p className={style.name} title="16"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="17">17</h2>
          <h5 title="17">Mañana</h5>

          {/* <p title="17" className={style.circle}>•</p>
              <p title="17" className={style.circle}>•</p>
              <p title="17" className={style.circle}>•</p> */}

          <p className={style.name} title="17">{this.state.day17[0]}</p>
          <p className={style.name} title="17">{this.state.day17[1]}</p>
          <p className={style.name} title="17">{this.state.day17[2]}</p>

          <hr title="17" />

          <h5 title="17">Tarde</h5>

          {/* <p title="17" className={style.circle1}>•</p>
              <p title="17" className={style.circle1}>•</p>
              <p title="17" className={style.circle1}>•</p> */}

          <p className={style.name} title="17"></p>
          <p className={style.name} title="17"></p>
          <p className={style.name} title="17"></p>
        </div>
        <div title="18" onClick={this.props.handle}>
          <h2 title="18">18</h2>
          <h5 title="18">Mañana</h5>

          {/* <p title="18" className={style.circle}>•</p>
              <p title="18" className={style.circle}>•</p>
              <p title="18" className={style.circle}>•</p> */}

          <p className={style.name} title="18">{this.state.day18[0]}</p>
          <p className={style.name} title="18">{this.state.day18[1]}</p>
          <p className={style.name} title="18">{this.state.day18[2]}</p>

          <hr title="18" />

          <h5 title="18">Tarde</h5>

          {/* <p title="18" className={style.circle1}>•</p>
              <p title="18" className={style.circle1}>•</p>
              <p title="18" className={style.circle1}>•</p> */}

          <p className={style.name} title="18"></p>
          <p className={style.name} title="18"></p>
          <p className={style.name} title="18"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="19">19</h2>
          <h5 title="19">Mañana</h5>

          {/* <p title="19" className={style.circle}>•</p>
              <p title="19" className={style.circle}>•</p>
              <p title="19" className={style.circle}>•</p> */}

          <p className={style.name} title="19">{this.state.day19[0]}</p>
          <p className={style.name} title="19">{this.state.day19[1]}</p>
          <p className={style.name} title="19">{this.state.day19[2]}</p>

          <hr title="19" />

          <h5 title="19">Tarde</h5>

          {/* <p title="19" className={style.circle1}>•</p>
              <p title="19" className={style.circle1}>•</p>
              <p title="19" className={style.circle1}>•</p> */}

          <p className={style.name} title="19"></p>
          <p className={style.name} title="19"></p>
          <p className={style.name} title="19"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="20">20</h2>
          <h5 title="20">Mañana</h5>

          {/* <p title="20" className={style.circle}>•</p>
              <p title="20" className={style.circle}>•</p>
              <p title="20" className={style.circle}>•</p> */}

          <p className={style.name} title="20">{this.state.day20[0]}</p>
          <p className={style.name} title="20">{this.state.day20[1]}</p>
          <p className={style.name} title="20">{this.state.day20[2]}</p>

          <hr title="20" />

          <h5 title="20">Tarde</h5>

          {/* <p title="20" className={style.circle1}>•</p>
              <p title="20" className={style.circle1}>•</p>
              <p title="20" className={style.circle1}>•</p> */}

          <p className={style.name} title="20"></p>
          <p className={style.name} title="20"></p>
          <p className={style.name} title="20"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="21">21</h2>
          <h5 title="21">Mañana</h5>

          {/* <p title="21" className={style.circle}>•</p>
              <p title="21" className={style.circle}>•</p>
              <p title="21" className={style.circle}>•</p> */}

          <p className={style.name} title="21">{this.state.day21[0]}</p>
          <p className={style.name} title="21">{this.state.day21[1]}</p>
          <p className={style.name} title="21">{this.state.day21[2]}</p>

          <hr title="21" />

          <h5 title="21">Tarde</h5>

          {/* <p title="21" className={style.circle1}>•</p>
              <p title="21" className={style.circle1}>•</p>
              <p title="21" className={style.circle1}>•</p> */}

          <p className={style.name} title="21"></p>
          <p className={style.name} title="21"></p>
          <p className={style.name} title="21"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="22">22</h2>
          <h5 title="22">Mañana</h5>

          {/* <p title="22" className={style.circle}>•</p>
              <p title="22" className={style.circle}>•</p>
              <p title="22" className={style.circle}>•</p> */}

          <p className={style.name} title="22">{this.state.day22[0]}</p>
          <p className={style.name} title="22">{this.state.day22[1]}</p>
          <p className={style.name} title="22">{this.state.day22[2]}</p>

          <hr title="22" />

          <h5 title="22">Tarde</h5>

          {/* <p title="22" className={style.circle1}>•</p>
              <p title="22" className={style.circle1}>•</p>
              <p title="22" className={style.circle1}>•</p> */}

          <p className={style.name} title="22"></p>
          <p className={style.name} title="22"></p>
          <p className={style.name} title="22"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="23">23</h2>
          <h5 title="23">Mañana</h5>

          {/* <p title="23" className={style.circle}>•</p>
              <p title="23" className={style.circle}>•</p>
              <p title="23" className={style.circle}>•</p> */}

          <p className={style.name} title="23">{this.state.day23[0]}</p>
          <p className={style.name} title="23">{this.state.day23[1]}</p>
          <p className={style.name} title="23">{this.state.day23[2]}</p>

          <hr title="23" />

          <h5 title="23">Tarde</h5>

          {/* <p title="23" className={style.circle1}>•</p>
              <p title="23" className={style.circle1}>•</p>
              <p title="23" className={style.circle1}>•</p> */}

          <p className={style.name} title="23"></p>
          <p className={style.name} title="23"></p>
          <p className={style.name} title="23"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="24">24</h2>
          <h5 title="24">Mañana</h5>

          {/* <p title="24" className={style.circle}>•</p>
              <p title="24" className={style.circle}>•</p>
              <p title="24" className={style.circle}>•</p> */}

          <p className={style.name} title="24">{this.state.day24[0]}</p>
          <p className={style.name} title="24">{this.state.day24[1]}</p>
          <p className={style.name} title="24">{this.state.day24[2]}</p>

          <hr title="24" />

          <h5 title="24">Tarde</h5>

          {/* <p title="24" className={style.circle1}>•</p>
              <p title="24" className={style.circle1}>•</p>
              <p title="24" className={style.circle1}>•</p> */}

          <p className={style.name} title="24"></p>
          <p className={style.name} title="24"></p>
          <p className={style.name} title="24"></p>
        </div>
        <div title="25" onClick={this.props.handle}>
          <h2 title="25">25</h2>
          <h5 title="25">Mañana</h5>

          {/* <p title="25" className={style.circle}>•</p>
              <p title="25" className={style.circle}>•</p>
              <p title="25" className={style.circle}>•</p> */}

          <p className={style.name} title="25">{this.state.day25[0]}</p>
          <p className={style.name} title="25">{this.state.day25[1]}</p>
          <p className={style.name} title="25">{this.state.day25[2]}</p>

          <hr title="25" />

          <h5 title="25">Tarde</h5>

          {/* <p title="25" className={style.circle1}>•</p>
              <p title="25" className={style.circle1}>•</p>
              <p title="25" className={style.circle1}>•</p> */}

          <p className={style.name} title="25"></p>
          <p className={style.name} title="25"></p>
          <p className={style.name} title="25"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="26">26</h2>
          <h5 title="26">Mañana</h5>

          {/* <p title="26" className={style.circle}>•</p>
              <p title="26" className={style.circle}>•</p>
              <p title="26" className={style.circle}>•</p> */}

          <p className={style.name} title="26">{this.state.day26[0]}</p>
          <p className={style.name} title="26">{this.state.day26[1]}</p>
          <p className={style.name} title="26">{this.state.day26[2]}</p>

          <hr title="26" />

          <h5 title="26">Tarde</h5>

          {/* <p title="26" className={style.circle1}>•</p>
              <p title="26" className={style.circle1}>•</p>
              <p title="26" className={style.circle1}>•</p> */}

          <p className={style.name} title="26"></p>
          <p className={style.name} title="26"></p>
          <p className={style.name} title="26"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="27">27</h2>
          <h5 title="27">Mañana</h5>

          {/* <p title="27" className={style.circle}>•</p>
              <p title="27" className={style.circle}>•</p>
              <p title="27" className={style.circle}>•</p> */}

          <p className={style.name} title="27">{this.state.day27[0]}</p>
          <p className={style.name} title="27">{this.state.day27[1]}</p>
          <p className={style.name} title="27">{this.state.day27[2]}</p>

          <hr title="27" />

          <h5 title="27">Tarde</h5>

          {/* <p title="27" className={style.circle1}>•</p>
              <p title="27" className={style.circle1}>•</p>
              <p title="27" className={style.circle1}>•</p> */}

          <p className={style.name} title="27"></p>
          <p className={style.name} title="27"></p>
          <p className={style.name} title="27"></p>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="28">28</h2>
          <h5 title="28">Mañana</h5>

          {/* <p title="28" className={style.circle}>•</p>
              <p title="28" className={style.circle}>•</p>
              <p title="28" className={style.circle}>•</p> */}

          <p className={style.name} title="28">{this.state.day28[0]}</p>
          <p className={style.name} title="28">{this.state.day28[1]}</p>
          <p className={style.name} title="28">{this.state.day28[2]}</p>

          <hr title="28" />

          <h5 title="28">Tarde</h5>

          {/* <p title="28" className={style.circle1}>•</p>
              <p title="28" className={style.circle1}>•</p>
              <p title="28" className={style.circle1}>•</p> */}

          <p className={style.name} title="28"></p>
          <p className={style.name} title="28"></p>
          <p className={style.name} title="28"></p>
        </div>
        <div
          onClick={this.props.handle}
          style={{ display: this.props.days31.dia29 }}
        >
          <h2 title="29" style={{ display: this.props.days29.dia29 }}>
            29
          </h2>
          <h5 title="29">Mañana</h5>

          {/* <p title="29" className={style.circle}>•</p>
              <p title="29" className={style.circle}>•</p>
              <p title="29" className={style.circle}>•</p> */}

          <p className={style.name} title="29">{this.state.day29[0]}</p>
          <p className={style.name} title="29">{this.state.day29[1]}</p>
          <p className={style.name} title="29">{this.state.day29[2]}</p>

          <hr title="29" />

          <h5 title="29">Tarde</h5>

          {/* <p title="29" className={style.circle1}>•</p>
              <p title="29" className={style.circle1}>•</p>
              <p title="29" className={style.circle1}>•</p> */}

          <p className={style.name} title="29"></p>
          <p className={style.name} title="29"></p>
          <p className={style.name} title="29"></p>
        </div>
        <div
          onClick={this.props.handle}
          style={{ display: this.props.days31.dia30 }}
        >
          <h2 title="30" style={{ display: this.props.days30.dia30 }}>
            30
          </h2>
          <h5 title="30">Mañana</h5>

          {/* <p title="30" className={style.circle}>•</p>
              <p title="30" className={style.circle}>•</p>
              <p title="30" className={style.circle}>•</p> */}

          <p className={style.name} title="30">{this.state.day30[0]}</p>
          <p className={style.name} title="30">{this.state.day30[1]}</p>
          <p className={style.name} title="30">{this.state.day30[2]}</p>

          <hr title="30" />

          <h5 title="30">Tarde</h5>

          {/* <p title="30" className={style.circle1}>•</p>
              <p title="30" className={style.circle1}>•</p>
              <p title="30" className={style.circle1}>•</p> */}

          <p className={style.name} title="30"></p>
          <p className={style.name} title="30"></p>
          <p className={style.name} title="30"></p>
        </div>
        <div
          onClick={this.props.handle}
          style={{ display: this.props.days31.dia31 }}
        >
          <h2 title="31" style={{ display: this.props.days31.dia31 }}>
            31
          </h2>
          <h5 title="31">Mañana</h5>

          {/* <p title="31" className={style.circle}>•</p>
              <p title="31" className={style.circle}>•</p>
              <p title="31" className={style.circle}>•</p> */}

          <p className={style.name} title="31">{this.state.day31[0]}</p>
          <p className={style.name} title="31">{this.state.day31[1]}</p>
          <p className={style.name} title="31">{this.state.day31[2]}</p>

          <hr title="31" />

          <h5 title="31">Tarde</h5>

          {/* <p title="31" className={style.circle1}>•</p>
              <p title="31" className={style.circle1}>•</p>
              <p title="31" className={style.circle1}>•</p> */}

          <p className={style.name} title="31"></p>
          <p className={style.name} title="31"></p>
          <p className={style.name} title="31"></p>
        </div>
      </div>
    );
  }
}

export default Day;
