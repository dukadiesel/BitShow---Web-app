import React, {Component} from 'react';
import './ClickedPage.scss';
import uuid from 'react-uuid';
import Show from '../../components/Show/Show';
import Cast from '../../components/Cast/Cast'

const url = "http://api.tvmaze.com/shows/"

class SecondPage extends Component {
  state = {
      show: null,
    };

componentDidMount(){
  fetch( url + this.props.activeShow)
      .then(response => response.json())
      .then(info => {
         console.log(info);
        this.setState({
          show: info
        });
      });
}

renderShow = () => (
  <div className="Main">
  <div className="Single-Show">
      <img className="Single-Picture" src={this.state.show.image.medium} alt="logo"/>
      <div className="Single-Text">
          <h1>{this.state.show.name}</h1>
          <ul className="Genres">{this.state.show.genres.map((e)=>{
            return (<li className="Genre" key={uuid()}>{e}</li>)
          })}</ul>
          <div className="Description" dangerouslySetInnerHTML={{__html:  `${this.state.show.summary}`}}></div>
      </div>
  </div>
  </div>
)

render() {
      return(
        <>
      <div className="Main">
        {this.state.show && this.renderShow()}
      </div>
      {this.state.show && <Cast clickedShow={this.state.show}/>}
      </>
    );
    }
  };
export default SecondPage
