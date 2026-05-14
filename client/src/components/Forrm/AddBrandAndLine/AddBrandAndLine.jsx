import React, { useState, useEffect, useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Box,
  Chip
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import classes from './addbrandandline.module.scss';
import CatalogStore from '../../../store/CatalogStore';
import { observer } from 'mobx-react-lite';


const AddBrandAndLine = observer(({ open, onClose }) => {
  

});

export default AddBrandAndLine;