import {
  UserDto,
} from "../../common/dtos/userDto.js";
import ApiError from "../../common/error/apiError.js";
import {
  CustomerGroup,
  Organization,
  User,
} from "../../config/initModels.js";
import * as bcrypt from "bcrypt";
import { makeHash } from "../../utils/crypto.js";

class UserService {

}
export const userService = new UserService();
