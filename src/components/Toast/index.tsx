import { useState, useEffect } from 'react';
import { Toast as BToast, ToastContainer } from 'react-bootstrap'

import { PropsToast } from "../../utils/interfaces";

const Toast = ({ open, message, onClose }: PropsToast) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open)
  }, [open])

  return (
    <ToastContainer position="middle-center">
      <BToast show={show} delay={3000} autohide onClose={onClose} bg="info">
        <BToast.Body>{message}</BToast.Body>
      </BToast>
    </ToastContainer>
  )
}

export default Toast