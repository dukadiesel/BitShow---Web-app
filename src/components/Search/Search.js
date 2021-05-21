import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
  state = {
    searchValue:"",
  }

onSearchValue = e =>
 {
   this.setState({searchValue: e.target.value})
   this.props.onSearch(e.target.value)

 }
  render(){
  return (
    <div className='Search'>
      <input  type="text"
              value={this.state.searchValue}
              onChange={this.onSearchValue}/>
    </div>
  )
}
}

export default Search
