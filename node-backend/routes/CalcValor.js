

import express from "express";
import Calc from '../controllers/Calc'


const route = express.Router()

route.get('/' , Calc)

export default route;