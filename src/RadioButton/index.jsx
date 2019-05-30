import React from 'react';
import './RadioButton.scss';

class RadioButton extends React.Component {

  state = {
    checked: false
  };

  componentWillMount = () => {
    const { checked } = this.props;
    this.setState({ checked });
  };

  componentWillReceiveProps (nextProps){
    const { checked } = nextProps;
    this.setState({ checked });
  }

  render(){
    const { value, onChange } = this.props;
    const { checked } = this.state;
    return (
      <div
        className={`input-radio-button ${ checked ? 'checked': ''}`}
        onClick={() => {
          this.setState((prevState) => ({ checked: !prevState.checked}), () => {
            const { checked } = this.state;
            onChange({ target: { ...this.props, checked, value : checked ? value : null }})
          });
        }}
      />
    )
  }
}

export default RadioButton;
