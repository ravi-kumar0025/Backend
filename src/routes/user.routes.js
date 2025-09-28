import { Router } from "express";

import { loginUser, logOutuser, registerUser, refreshAccessToken, changePassword, getUser, updateTextdetails, updateavatar, updateCoverImage,} from "../controllers/user.controller.js";
const router =Router();

import { upload } from "../middlewares/multer.middleware.js";
import { verify_jwt } from "../middlewares/auth.middleware.js" 
import { get } from "mongoose";

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1,
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verify_jwt,logOutuser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/changePassword").post(verify_jwt,changePassword)

router.route("/getUser").get(verify_jwt,getUser)

router.route("/updateName").post(verify_jwt,updateTextdetails)

router.route("/updateavatar").post(verify_jwt,
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }]
    ),
    updateavatar)

router.route("/updatecoverImage").post(verify_jwt,
    upload.fields([
        {
            name:"coverImage",
            maxCount:1
        }]
    ),
    updateCoverImage)

export default router