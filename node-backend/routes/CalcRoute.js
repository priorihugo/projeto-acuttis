

import express from "express";
import {CalcValue} from '../controllers/CalcValue.js'


const route = express.Router()

route.get('/' , CalcValue)

export default route;