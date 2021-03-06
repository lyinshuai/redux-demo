import React from 'react';
import { connect } from './react-redux';
import { increase, decrease, asyncIncrease } from './action';
import { bindActionCreators } from './redux';


const mapStateToProps = state => ({
  number: state.number,
  logs: state.logs,
});

const mapDisplayToProps = dispatch => bindActionCreators({
  increase, decrease, asyncIncrease,
}, dispatch);

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
        <button onClick={this.props.asyncIncrease}>async +</button>
        <ul>
          {this.props.logs.map(log => (
            <li>{log}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDisplayToProps)(MyComponent);
