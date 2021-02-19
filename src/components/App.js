import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

import bison from '../img/bison.JPG';
import balloon from '../img/balloon.JPG';
import bike from '../img/bike.JPG';
import candle from '../img/candle.JPG';
import guitar from '../img/guitar.JPG';

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Bicycle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum lorem. Donec porttitor turpis id dolor vestibulum gravida. Sed viverra lacus tortor, iaculis tristique quam venenatis eget. Nunc a sagittis magna. Nullam dignissim eros nec neque posuere, ac pulvinar magna euismod. Curabitur vel egestas diam. Aliquam congue, arcu eget faucibus sollicitudin, purus metus feugiat turpis, sed hendrerit arcu erat eget nisi. Ut mi nisi, porttitor quis fringilla quis, fringilla nec nisl. Sed nulla quam, convallis vitae massa a, tempor viverra velit.",
        price: "250",
        img: bike,
        inventory: 5,
        quantity: 0
      },
      {
        id: 2,
        name: "Bison",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum lorem. Donec porttitor turpis id dolor vestibulum gravida. Sed viverra lacus tortor, iaculis tristique quam venenatis eget. Nunc a sagittis magna. Nullam dignissim eros nec neque posuere, ac pulvinar magna euismod. Curabitur vel egestas diam. Aliquam congue, arcu eget faucibus sollicitudin, purus metus feugiat turpis, sed hendrerit arcu erat eget nisi. Ut mi nisi, porttitor quis fringilla quis, fringilla nec nisl. Sed nulla quam, convallis vitae massa a, tempor viverra velit.",
        price: "2000",
        img: bison,
        inventory: 3,
        quantity: 0
      },
      {
        id: 3,
        name: "Balloon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum lorem. Donec porttitor turpis id dolor vestibulum gravida. Sed viverra lacus tortor, iaculis tristique quam venenatis eget. Nunc a sagittis magna. Nullam dignissim eros nec neque posuere, ac pulvinar magna euismod. Curabitur vel egestas diam. Aliquam congue, arcu eget faucibus sollicitudin, purus metus feugiat turpis, sed hendrerit arcu erat eget nisi. Ut mi nisi, porttitor quis fringilla quis, fringilla nec nisl. Sed nulla quam, convallis vitae massa a, tempor viverra velit.",
        price: "5",
        img: balloon,
        inventory: 300,
        quantity: 0
      },
      {
        id: 4,
        name: "Candle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum lorem. Donec porttitor turpis id dolor vestibulum gravida. Sed viverra lacus tortor, iaculis tristique quam venenatis eget. Nunc a sagittis magna. Nullam dignissim eros nec neque posuere, ac pulvinar magna euismod. Curabitur vel egestas diam. Aliquam congue, arcu eget faucibus sollicitudin, purus metus feugiat turpis, sed hendrerit arcu erat eget nisi. Ut mi nisi, porttitor quis fringilla quis, fringilla nec nisl. Sed nulla quam, convallis vitae massa a, tempor viverra velit.",
        price: "12",
        img: candle,
        inventory: 8,
        quantity: 0
      },
      {
        id: 5,
        name: "guitar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum lorem. Donec porttitor turpis id dolor vestibulum gravida. Sed viverra lacus tortor, iaculis tristique quam venenatis eget. Nunc a sagittis magna. Nullam dignissim eros nec neque posuere, ac pulvinar magna euismod. Curabitur vel egestas diam. Aliquam congue, arcu eget faucibus sollicitudin, purus metus feugiat turpis, sed hendrerit arcu erat eget nisi. Ut mi nisi, porttitor quis fringilla quis, fringilla nec nisl. Sed nulla quam, convallis vitae massa a, tempor viverra velit.",
        price: "600",
        img: guitar,
        inventory: 2,
        quantity: 0
      },
    ]
  };

  txtPreview = (input) => {
    if (input.length > 180) {
      return input.substring(0, 180) + '...';
   }
   return input;
  }

  handleCartChange = (index, delta) => {
    this.setState( prevState => ({
      quantity: prevState.products[index].quantity += delta
    }));
    console.log('index: ' + index, 'delta: ' + delta);
  }

  render() {
    return (
      <div>

        <Header />

        <div id="list" className="row">
          <h2>Products List</h2>

          {/* Item list */}
          {this.state.products.map( (item, index) =>
            <Item
              changeQuantity={this.handleCartChange}
              key={index}
              index={index}
              id={item.id}
              name={item.name}
              description={this.txtPreview(item.description)}
              price={item.price}
              img={item.img}
              inventory={item.inventory}
              quantity={item.quantity}
            />
          )}
                
                

               

        </div>

      </div>
    );
  }
}

export default App;
