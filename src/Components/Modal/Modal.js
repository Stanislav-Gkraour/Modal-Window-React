import React, {useState} from 'react'
import './Modal.css'

export default function Modal() {
    // create state always before return
    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <>
        {/* button to open the modal window */}
        <button className="btn-modal" onClick={toggleModal}>Open</button>
        {/* conditional render if the state is true with short circuit operator && */}
        {modal && (
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>Hello my name is Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum aut modi, quos  deserunt explicabo vitae ab, reprehenderit error fugit aperiam? Ipsa deserunt eum, adipisci at ?</p>
                        <button className='close-modal' onClick={toggleModal}>Close</button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
