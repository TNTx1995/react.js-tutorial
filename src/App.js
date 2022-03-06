
import './App.css';
import React,{Component} from 'react';
import Greet from './components/Greet';
import Greet2 from './components/Greet2';
import {Greet3} from './components/Greet3';
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Actor from './components/Actor';
import Queen from './components/Queen';
import Message from './components/Message';
import Aynun from './components/Aynun';
import Aynundetail  from './components/Aynundetail';
import Counter from './components/Counter';
class App extends Component {
  render(){
    return(
      <div className='App'>
        <Welcome2/>
        <Queen name="Aynun Jariya Mariyam Binte Ashraf " type="Queen" />
        <Actor name="Aynun Jariya " heroName = "Super Woman">
          <h1>HY Aynun is a Super Queen!</h1>
        </Actor>
       <Greet name="Ruhul Amin"/>
       <Greet2 name= "Aynun"/>
       <Greet3 name = "mariyam"/>
       <Welcome/>
       <Greet/>
       <Message/>
       <Aynun/>
       <Aynundetail/>
       <Counter/>
      </div>
    )
  }
}
export default App;
