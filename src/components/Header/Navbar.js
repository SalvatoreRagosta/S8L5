import React, {Component} from 'react';
import './Header.css';

class Navbar extends Component {
    state = {
        color: '',
        searchBar: false
      }

      listenScrollEvent = e => {
        if (window.scrollY > 50) {
          this.setState({color: 'black'})
        } else {
          this.setState({color: ''})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
        return(
            <div className="ui text menu" style={{backgroundColor: this.state.color, position: "fixed", marginTop: -5, transition: "all 0.8s ease-in-out"}}>
                <a className="logo item" style={{fontSize: 40}}>
                    <img src="http://netflix-react-clone.surge.sh/8562b6565f5ae1db5e4af40d85b4ed2d.png" alt="img" />
                </a>
                <a className="link item">
                    Home
                </a>
                <a className="link item">
                    Serie TV
                </a>
                <a className="link item">
                    Film
                </a>
                <a className="link item">
                    Aggiunti di recenti
                </a>
                <a className="link item">
                    Preferiti
                </a>
                <div className="right menu" >
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Title, Genres, People..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <div className="ui simple dropdown item">
                        More <i className="dropdown icon"></i>
                        <div className="menu">
                            <a className="item">Scopri</a>
                            <a className="item">Impostazioni</a>
                            <a className="item">Aiuto</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;