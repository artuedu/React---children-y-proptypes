import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Box extends Component{
  render(){
    return(
      <div style={{border: '1px solid #097', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component{

  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render(){
    const {author, children, date, title} = this.props;

    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    );
  }
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <h4>Children props</h4>
        <Article title="Articulo soblre la prop children" author="Arturo"  date={new Date().toLocaleDateString()}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, modi. Assumenda neque accusantium ducimus enim ex recusandae commodi tenetur, amet totam, voluptate doloremque facere pariatur minus quisquam optio necessitatibus officiis.</p>
        </Article>
      </div>
    );
  }
}

export default App;
