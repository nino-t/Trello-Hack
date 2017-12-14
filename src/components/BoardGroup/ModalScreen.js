import React, { Component } from 'react';
import Modal from "react-bootstrap-modal";

import Input from '../Part/Input';

class ModalScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            group_name: ''
        }

        this.handleSaveChange = this.handleSaveChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
   }

    handleSaveChange(event){
        this.props.newGroup(this.state);
        this.clearModal();
    }

    changeValue(target){
        this.setState({ [target.name]: target.value });
    }

    clearModal(){
        this.props.openModal(false);
        document.getElementsByName('group_name').value = '';
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
                        <Modal.Title id='ModalHeader'>Create New Group Board</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="form-horizontal">
                            <Input
                                type="text"
                                placeholder="Board name..."
                                id="group_name"
                                label="G"
                                value={this.changeValue} />

                            <br />
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
