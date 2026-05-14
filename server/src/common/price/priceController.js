import * as PriceService from './priceService.js';

export const downloadTemplate = async (req, res) => {
  
  try {
  const workbook = await PriceService.generateEmptyPriceTemplate();

    const buffer = await workbook.xlsx.writeBuffer();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=prices_template.xlsx'
    );

    return res.status(200).send(buffer);

  } catch (error) {
  
    
   
    if (!res.headersSent) {
      return res.status(500).json({ 
        message: 'Ошибка при генерации файла', 
        details: error.message 
      });
    }
  }
};



