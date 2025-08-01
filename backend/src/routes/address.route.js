import { Router } from "express";
import { getCommune, getDistrict, getProvince, getUserAddress, getVillage } from "../controllers/address.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const addressRoute = Router();

addressRoute.get('/user', authUser, getUserAddress)
addressRoute.get('/provinces', getProvince);
addressRoute.get('/districts', getDistrict);
addressRoute.get('/communes', getCommune);
addressRoute.get('/villages', getVillage);

export default addressRoute