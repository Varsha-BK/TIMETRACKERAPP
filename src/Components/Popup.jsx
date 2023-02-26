import React, { useState} from 'react'
import { Modal } from 'reactstrap'
import ModalHeader from 'reactstrap/types/lib/ModalHeader'

const Popup = () => {
const [modal,setModal] = useState(false)

  return (
    <div>
      <Modal
      size='lg'
      isOpen={modal}
      toggle={()=>setModal(!modal)}>
        <ModalHeader
        toggle={()=>setModal(!modal)}>
          New Project
        </ModalHeader>
      </Modal>

      <button className="btn btn-info" onClick={()=>setModal(true)}>Create New Project</button> 
    </div>
  )
}

export default Popup