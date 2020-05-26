import * as React from "react";
import ReactDOM from "react-dom";
import YouTubeComponent from './youtubeComponent'
export default class TaskDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
        this.getYouTubeVideos= this.getYouTubeVideos.bind(this)
        
    }
    getYouTubeVideos(){
        console.log("in the function"); 
        this.setState({show:true});
       
        
    }
    render(){
        console.log(this.props.match)
        return(
            <div>
                <h1>Hi you are in {this.props.match.params.id} component</h1>
                <p>
                    Lets do something interesting
                </p>
                <button onClick={this.getYouTubeVideos}>Get YouTube Videos </button>
                {
                    this.state.show==true ?<YouTubeComponent/>:null
                }
            </div>
        )
    }
}