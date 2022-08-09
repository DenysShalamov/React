import React from 'react';

class ColorPicker extends React.Component {
  pickerOver(color) {
    document.querySelector('.picker__title').textContent = color;
  }
  pickerOut() {
    document.querySelector('.picker__title').textContent = '';
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
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
