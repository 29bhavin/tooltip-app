import React from 'react';
class App extends React.Component {
  render(){
    const position = this.props.position;
    console.log(position);
    return (
      <div className="App">
        <div className='tooltip-container'>
          Hover Over Me!!
          <span className={`tooltip ${position}`}>Thanks for hovering! I'm a tooltip</span>
        </div>
      </div>
    );
  }

}

export default App;
