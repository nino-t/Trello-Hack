import React from 'react'
import Modal from 'react-bootstrap-modal'

class ModalScreen extends React.Component {
  render(){
    const { title } = this.props
    return(
       <div>          
            <Modal
                show={this.props.open}
                onHide={this.props.handleModal}
                aria-labelledby="ModalHeader">

                <Modal.Header closeButton>
                    <Modal.Title id='ModalHeader'>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-horizontal">                                             
                        {this.props.children}
                        <div className="clearfix"></div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-default' onClick={this.props.handleModal}>
                      Cancel
                    </button>
                    <button className='btn btn-primary' onClick={this.props.handleSubmit}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
  }  
}

export default ModalScreen
