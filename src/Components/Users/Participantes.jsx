import React from "react";
// import { savedPersonName, getPersons } from "../../firebase/app";
import { writeUserData, dataB } from "../../firebase/firebase";
import { ref, onValue } from "firebase/database";

const tasksRef = ref(dataB, "users");

class Participantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', anotados: ''};
    this.sendPerson = this.sendPerson.bind(this);
    this.getPersonsData = this.getPersonsData.bind(this);

  }

  // componentDidMount()  {
  // //   // const p = await getPersons();
  // //   // console.log(p.docs[0].data().name);
  // //   // this.setState({
  // //   //     anotados: p.docs[0].data().name
  // //   // });
  //   onValue(tasksRef, (snapshot) => {
  //     const data = snapshot.val().day1.name;
  //     console.log(data);
  //     this.setState({
  //       anotados: data
  //     });
  //   });
  // }

  // Add name
  sendPerson(e) {
    let nombre1 = e.target.value;
    
    // savedPersonName(e.target.value);
    console.log(nombre1);
    // writeUserData("andreawu", `${nombre1}`, "nerpa.c@hotmail.com", "myImageUrl");

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val().day1.name;
      this.setState({
        anotados: data
      });
    });
    
  }

  // Get name
  getPersonsData = async () => {
    // const p = await getPersons();
    // console.log(p.docs[0].data().name);
    // this.setState({
    //     anotados: this.state.anotados
    // });
  }

  render() {
    return (
      <div>
        <h3>Participantes:</h3>
        {/* <button key='1' onClick={this.sendPerson} value='Abner'>Abner</button>
        <button key='2' onClick={this.sendPerson} value='Juan'>Juan</button>
        <button key='3' onClick={this.sendPerson} value='Manuel'>Manuel</button>
        <button key='4' onClick={this.getPersonsData}>Get</button>
        <h3>{this.state.name}</h3>
        <h2>Anotados:</h2>
        <h3>{this.state.anotados}</h3> */}
      </div>
    );
  }
}


export default Participantes;
