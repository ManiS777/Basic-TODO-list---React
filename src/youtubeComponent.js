import * as React from "react";
import ReactDOM from "react-dom";
const API= "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA";
const channelID="UCXgGY0wkgOzynnHvSEVmE3A";
const result=10;
var finalURL= `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`
export default class YouTubeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videoResult:[]
        }
        this.displayVideo=this.displayVideo.bind(this)
        
    }
displayVideo(){
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log("display response json", responseJson)
      const videoResult=responseJson.items.map(item=>"https://www.youtube.com/embed/"+item.id.videoId);
      this.setState({videoResult:videoResult})
    })
    .catch((error) => {
      console.error(error);
    });
}
    render(){
        console.log("in youtube component ", finalURL)
      console.log("array of videos id", this.state.videoResult)

        return(
            <div>
              <h1>You can click the button for youtube video</h1>
              {
                  this.state.videoResult.map((item,index)=>{
                      var frame=<div><iframe width="560" height="315" src={item} frameBorder="0" 
                      allowFullScreen></iframe></div>
                        return frame
                  })
              }
              <button onClick={this.displayVideo}>Display videos </button>
              {this.frame}
              
            </div>
        )
    }
}   
