import React,{Component} from 'react'
import './Cast.scss'
import uuid from 'react-uuid';

const url = "http://api.tvmaze.com/shows/";

class Cast extends Component {
  state={
      cast:null,
      active: false,
  };

toggleClass =()=> {
  const currentState = this.state.active;
  this.setState({active: !currentState})
  localStorage.setItem("currentState", currentState);
}

renderCast = () => {

  const active = localStorage.getItem("currentState") === 'true'
  return (
    <div className="Cast">
      <div className="Cast-Header">
        <h3>Cast</h3>
        <button onClick={this.toggleClass}>Grid</button>
      </div>
      <div className={active ? "Cast-Pics-Line" : "Cast-Pics-Grid"}>
      {this.state.cast.map((e)=>{
        return(<div className="Cast-Wrapper"
                    key={uuid()}>
                  <img src={e.person.image.medium}
                  className="Cast-Single-Pic"
                  alt="logo.jpg"/>
                  <p className="Cast-Name">{e.person.name}</p>
              </div>)
      })}
      </div>
    </div>
)
}
  componentDidMount(){
    fetch(url + this.props.clickedShow.id + "/cast")
        .then(response => response.json())
        .then(data => {
           // console.log(data);
           var newdata = data.slice(0,6)
           this.setState({
            cast: newdata
          });
        });
  }

  render(){

    return(
      <>
    <div className="Main">
      {this.state.cast && this.renderCast()}
    </div>
    </>)
  }}

export default Cast
