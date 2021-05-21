import './Footer.scss'
import React, {Component} from 'react'



class Footer extends Component {

getCurrentDate = () => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}/${month<10?`0${month}`:`${month}`}/${year}`
  }
render(){
  return (
    <footer className="Footer">
      <div className='wrapper'>
      <p>BIT SHOW &copy;</p>
      <p>{this.getCurrentDate()}</p>
      </div>
    </footer>
  )
}}

export default Footer
