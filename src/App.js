import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchPokemons } from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    return (
      <div className="App">
        <ul className="list-group">
          {
            this.props.pokemons.map((pokemon, index) => {
              return (
                <li key={index} className="list-group-item">
                  <a href={pokemon.url}>
                    {pokemon.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemonReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemons: () => dispatch(fetchPokemons())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
