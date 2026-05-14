import { observer } from 'mobx-react-lite';
import React from 'react';
import PriceStore from '../../store/PriceStore';
import classes from './downloadButton.module.scss'

const DownloadButton = () => {
  const { downloadTemplate, isDownloading } = PriceStore;

  return (
    <button 
      onClick={downloadTemplate} 
      disabled={isDownloading}
      className={classes.button}
    >
      {isDownloading ? 'Скачивание...' : 'Скачать шаблон прайс-листа.xlsx'}
    </button>
  );
};

export default observer(DownloadButton);