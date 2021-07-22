import React, {Component} from 'react';

import Navbar from './components/navbar';
import Card from './components/card';
import shrimp from './img/shrimp.png';
import california from './img/california.png';
import dragon from './img/dragon.png';
import dynamite from './img/dynamite.png';
import philadelphia from './img/philadelphia.png';
import rainbow from './img/rainbow.png';

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        nome: 'California',
        prezzo: 1.99,
        immagine: california,
        quantita: 0,
      },
      {
        id: 1,
        nome: 'dragon',
        prezzo: 1.99,
        immagine: dragon,
        quantita: 0,
      },
      {
        id: 2,
        nome: 'dynamite',
        prezzo: 1.99,
        immagine: dynamite,
        quantita: 0,
      },
      {
        id: 3,
        nome: 'philadelphia',
        prezzo: 1.99,
        immagine: philadelphia,
        quantita: 0,
      },
      {
        id: 4,
        nome: 'rainbow',
        prezzo: 1.99,
        immagine: rainbow,
        quantita: 0,
      },
      {
        id: 5,
        nome: 'shrimp',
        prezzo: 1.99,
        immagine: shrimp,
        quantita: 0,
      },

    ]
  }
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantita++;
    this.setState({cards});

  }
  render(){

    return (
      <>
      <Navbar />
      <div className="container">

      <h1>Cosa desideri ordinare?</h1>
      <hr />
      <div className="row">
        {
          this.state.cards.map(card => (
            <Card
              key={card.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              card={card}
            />
          ))

        }
      </div>
      </div>
      </>
    );
  }
}

export default App;
