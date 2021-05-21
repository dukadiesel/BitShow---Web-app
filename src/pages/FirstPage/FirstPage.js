import React, {Component} from 'react';
import uuid from 'react-uuid';

import './FirstPage.scss';

import Show from '../../components/Show/Show'
import Search from '../../components/Search/Search'

class FirstPage extends Component {

render() {
      return(
      <div className="Main">
        <Search onSearch={this.props.onSearch}/>
      {!this.props.filteredShows.length ?
        <div className="Spinner">
        <p>U+1F631</p>
        <p>Sorry! We cound not find any people matching your search.</p>
        </div> :
        <>

        <div className="Show-Wrapper">
          {this.props.filteredShows.map((show) => (
            <Show
            {...show}
            onShowOpen={this.props.onShowOpen}
            key={uuid()}></Show>
          ))}
        </div>
        </>}
      </div>
    );
    }
  };
export default FirstPage
