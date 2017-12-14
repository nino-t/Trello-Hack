import React, { Component } from 'react';

class Input extends Component {
  onChange(e){
    const target = document.getElementById(e);
    this.props.value(target);
  }

  render() {
    const { placeholder, id, label, type } = this.props;
    const idInput = 'input-'+id;
    return (
        <div className="input-group">
            <span className="input-group-addon" id={id}>{label}</span>
            <input 
                type={type}
                name={id}
                id={idInput}
                className="form-control" 
                placeholder={placeholder}
                aria-describedby={id}
                onChange={() => this.onChange(idInput)} />
        </div>    
    );
  }
}

export default Input;