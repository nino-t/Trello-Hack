import React, { Component } from 'react';
import Modal from "react-bootstrap-modal";

import Input from './Part/Input';

class ModalScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            favorite: false,
            background: ''
        }

        this.handleSaveChange = this.handleSaveChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleSaveChange(event){
        this.props.data(this.state);
        this.clearModal();
    }

    changeValue(target){
        this.setState({ [target.name]: target.value });
    }

    handleChecked(e){
        this.setState({favorite: !e.checked});
    }

    clearModal(){
        this.props.openModal(false);
        document.getElementsByName('name').value = '';
        document.getElementsByName('favorite').checked = false;
        document.getElementsByName('background').value = '';
    }

    render() {
        let closeModal = () => this.props.openModal(false)

        return (
            <div>
                <Modal
                    show={this.props.open}
                    onHide={closeModal}
                    aria-labelledby="ModalHeader">

                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>Create New Board</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="form-horizontal">
                            <Input
                                type="text"
                                placeholder="Board name..."
                                id="name"
                                label="B"
                                value={this.changeValue} />

                            <br />

                            <Input
                                type="color"
                                placeholder="Hex color..."
                                id="background"
                                label="C"
                                value={this.changeValue} />

                            <br />
                            <div className="col-md-12">                            
                                <div>
                                    <label htmlFor="favorite">Favorite?</label>
                                </div>                            
                                <div>
                                    <input type="checkbox"  id="favorite" name="favorite" onChange={this.handleChecked} />
                                    <p> Checked if you want this board placed at the top</p>
                                </div>                                                        
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
                        <button className='btn btn-primary' onClick={this.handleSaveChange}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalScreen;
