import React from 'react';
import Content from './Header';
import Header from './Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default App;
