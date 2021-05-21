import React,{Component} from 'react'
import './App.scss';
import loader from './Images/loader.gif'

import Header from './components/Header/Header'

import FirstPage from './pages/FirstPage/FirstPage'
import ClickedPage from './pages/ClickedPage/ClickedPage'
import Footer from './components/Footer/Footer'

const url = "http://api.tvmaze.com/shows?q="

class App extends Component{
  state={
    shows:[],
    active: null,
    filteredShows: [],
  };

  componentDidMount(){
    if (!this.state.shows.length)
    fetch(url)
        .then(response => response.json())
        .then(data => {
           // console.log(data);
           const obj = data.slice(0, 48)
          this.setState({
            shows: obj,
            filteredShows: obj
          });
        });
  };

  onSearch = searchValue => {
      const filtered = this.state.shows.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
      this.setState({ filteredShows: filtered })
      console.log(filtered)
    }

  onShowOpen = showId => {
    this.setState({ active: showId })
  }

  render(){
    const {shows, active} = this.state;

    return(
      <>
      <Header />
      {!shows.length && !active && <img src={loader} alt="logo"/>}
      {active
      ? <ClickedPage activeShow={active} />
      : <FirstPage shows={shows} onShowOpen={this.onShowOpen}
                    onSearch={this.onSearch} filteredShows={this.state.filteredShows}/>}

      <Footer />
      </>
    )
  }

}

export default App;
