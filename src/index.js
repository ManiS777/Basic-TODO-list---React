import * as React from "react";
import ReactDOM from "react-dom";
import TaskDetails from "./taskDetails"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// const App=()=>(
//     <div>
//         <h1>Hello World asqwed</h1>
//     </div>
// )
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task:"",
            taskArray:[]
        }
        this.inputChange=this.inputChange.bind(this);
        this.handleAddButton=this.handleAddButton.bind(this);
        this.displayList=this.displayList.bind(this);
        this.removeTask=this.removeTask.bind(this);
    }
    inputChange(e){
        this.setState({task:e.target.value})
    }
    handleAddButton(){
        this.setState({taskArray:this.state.taskArray.concat(this.state.task)},()=>{
            this.setState({task:""})
        })
        
        this.displayList();

    }
    displayList(){
        const listItems = this.state.taskArray.map((item,index) =>
        <li key={index}><Link to={`/taskDetails/${item}`}>{item} </Link><FontAwesomeIcon icon={faTimes} 
                                onClick={()=>this.removeTask(index)} color="green"/></li>
      );
      return (
         
          <div className="body">
              
              <Router>
        <ul>{listItems}</ul>
        <Switch>
            <Route path="/taskDetails/:id" component={TaskDetails}>
                
            </Route>
        </Switch>
        </Router>
        
        </div>
        
      );
    }
    removeTask(i){
        var arr=this.state.taskArray.splice(i,1)
            this.setState({taskArray:this.state.taskArray})
    }
    render(){
        return(
            <div>
                <div>
                <h1>Hello </h1>
                <label>
                    Enter a task 
                    <input type="text" name="task" value={this.state.task} onChange={this.inputChange}/>
                </label>
                 <button type="button" onClick={this.handleAddButton}>Add Task</button>
                 </div>
                 {this.displayList()}
            
            </div>

        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));