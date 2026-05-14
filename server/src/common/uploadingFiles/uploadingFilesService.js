import { Product } from "../../config/initModels.js";

class UploadingFilesService {
  async uploadProductList(...sanitizedData) {
   const product = await Product.bulkCreate(sanitizedData, {
      updateOnDuplicate: [
        "name",
        "voltage",
        "capacity",
        "startingcurrent",
        "dimensions",
        "polarity",
        "warranty",
        "capacity",
      ],
    });
    return product
  }

}

export const uploadingFilesService = new UploadingFilesService();
