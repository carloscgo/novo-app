import { Toast as BToast, ToastContainer } from 'react-bootstrap'
import { useState, useEffect } from 'react';

import { PropsToast } from "../../utils/interfaces";

const Toast = ({ open, message, onClose }: PropsToast) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open)
  }, [open])

  return (
    <ToastContainer position="top-end">
      <BToast show={show} delay={3000} autohide onClose={onClose} bg="danger">
        <BToast.Body className='text-white'>{message}</BToast.Body>
      </BToast>
    </ToastContainer>
  )
}

export default Toast