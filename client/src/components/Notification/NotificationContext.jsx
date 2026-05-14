import React, { createContext, useContext, useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';
import classes from './Notification.module.scss';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notif, setNotif] = useState({ open: false, message: '', severity: 'success' });

  const showNotification = useCallback((message, severity = 'success') => {
    setNotif({ open: true, message, severity });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setNotif((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      
      <Snackbar 
        open={notif.open} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className={classes.snackbar}
      >
        <Alert 
          onClose={handleClose} 
          severity={notif.severity} 
          variant="filled"
          className={classes[notif.severity]} // Динамический класс: success, error или info
        >
          {notif.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
