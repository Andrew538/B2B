import ExcelJS from 'exceljs';
import fs from "fs";
import { validationResult } from "express-validator";
import validator from "validator";
import { uploadingFilesService } from "./uploadingFilesService.js";
import logger from "../logs/logger.js";
import path from 'path';

const sanitize = (val) => {
  if (val === undefined || val === null) return "";
  const str = String(val.result !== undefined ? val.result : val).trim();
  return validator.escape(str);
};

const parseNum = (val) => {
  if (val === undefined || val === null) return null;
  const str = String(val.result !== undefined ? val.result : val);
  const cleaned = str.replace(/\D/g, "");
  return cleaned ? parseInt(cleaned, 10) : null;
};

