import React, {Component} from 'react'
import './Show.scss'

class Show extends Component {

  render(){
    return (
      <div className={`Show ${this.props.rating.average>=8.5 ? "Show-Good" : ""}`}>
        <img src={this.props.image.medium} alt="logo"
          onClick={() => this.props.onShowOpen(this.props.id)}/>
        <p className="Rating">{this.props.rating.average} </p>
        <p onClick={() => this.props.onShowOpen(this.props.id)}>{this.props.name}</p>
      </div>
    )
  }
}

export default Show
