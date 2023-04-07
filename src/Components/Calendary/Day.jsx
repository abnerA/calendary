import React from "react";
import style from "./Day.module.css";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "carlos" };
  }

  render() {
    return (
      <div className={style.containerDays}>
        <div style={{ gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay}}
             onClick={this.props.handle}>
          <h2 title="1">1</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="2">2</h2>
          {/* <p title="2">Pedro</p>
          <p title="2">Juan</p>
          <p title="2">Mateo</p> */}
        </div>
        <div id="3" onClick={this.props.handle}>
          <h2 title="3">3</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="4">4</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="5">5</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="6">6</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="7">7</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="8">8</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="9">9</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="10">10</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="11">11</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="12">12</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="13">13</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="14">14</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="15">15</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="16">16</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="17">17</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="18">18</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="19">19</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="20">20</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="21">21</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="22">22</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="23">23</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="24">24</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="25">25</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="26">26</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="27">27</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="28">28</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="29" style={{ display: this.props.days29 }}>29</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="30" style={{ display: this.props.days30 }}>30</h2>
        </div>
        <div onClick={this.props.handle}>
          <h2 title="31" style={{ display: this.props.days31 }}>31</h2>
        </div>
      </div>
    );
  }
}

export default Day;
