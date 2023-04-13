import './Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
function Modal({active}) {
    const modal = useRef()
    const handleClose = () =>{
        console.log(modal.current)

    }
    return ( <div ref={modal} className={`wrapper${active ? 'active' : ''}`}>



    <div className='btn-close'>
        <iframe src="https://www.youtube.com/embed/wvEegfJ9tJg" height="300" width="400"></iframe>  
        <FontAwesomeIcon  icon={faXmark} onClick = {handleClose}/>
    </div>
    </div> );
}

export default Modal;