import React from "react";
import style from "./Days.module.css";

class Days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dia29: "block",
      dia30: "block",
      dia31: "block"
    };
  }

// Para saber la cantidad total de días que tienes el mes, en el primer Render.
  componentDidMount() {
    const days = this.props.dias;
    if (days === 28) {
      this.setState({
        dia29: "none",
        dia30: "none",
        dia31: "none",
      });
    } else if (days === 29) {
      this.setState({
        dia29: "block",
        dia30: "none",
        dia31: "none",
      });
    } else if (days === 30) {
      this.setState({
        dia29: "block",
        dia31: "none",
      });
    } else if (days === 31) {
      this.setState({
        dia29: "block",
        dia30: "block",
        dia31: "block",
      });
    }
  }

// Para actualizar el Render una vez cambie el valor que tiene la Props
  componentDidUpdate(prevProps) {
    if (this.props.dias !== prevProps.dias) {
      const days = this.props.dias;
      if (days === 28) {
        this.setState({
          dia29: "none",
          dia30: "none",
          dia31: "none",
        });
      } else if (days === 29) {
        this.setState({
          dia29: "block",
          dia30: "none",
          dia31: "none",
        });
      } else if (days === 30) {
        this.setState({
          dia29: "block",
          dia31: "none",
        });
      } else if (days === 31) {
        this.setState({
          dia29: "block",
          dia30: "block",
          dia31: "block",
        });
      }
    }
  }

  render() {
    return (
      <div className={style.containerDays}>
        <li style={{ gridColumnStart: this.props.firstDay === 0 ? 7 : this.props.firstDay }}>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li style={{ display: this.state.dia29 }}>29</li>
        <li style={{ display: this.state.dia30 }}>30</li>
        <li style={{ display: this.state.dia31 }}>31</li>
      </div>
    );
  }
}

export default Days;
