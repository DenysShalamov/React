import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  pickerOver(color) {
    this.setState({
      colorName: color,
    });
  }

  pickerOut() {
    this.setState({
      colorName: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.pickerOver('Coral')}
            onMouseOut={() => this.pickerOut()}
          />
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.pickerOver('Aqua')}
            onMouseOut={() => this.pickerOut()}
          />
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.pickerOver('Bisque')}
            onMouseOut={() => this.pickerOut()}
          />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
