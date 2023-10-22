import React from 'react'
import { Box, Modal, Typography } from '@mui/material';
import RegisterUserForm from './RegisterForm';
import LoginUserForm from './LoginForm';
import { useLocation, useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
   outline : "none",
    boxShadow: 24,
    p: 4,
  };

function AuthModal({handleClose, open, }) {
  const location = useLocation();
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
    >
      <Box className="rounded-md" sx={style}>
        {location.pathname === "/login" ? (
          <LoginUserForm />
        ) : (
          <RegisterUserForm />
        )}
      </Box>
    </Modal>
    
    </>
  );
}

export default AuthModal