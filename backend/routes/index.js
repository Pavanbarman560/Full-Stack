const express = require('express')

const router = express.Router()

const usersignupcontroller = require("../controller/user/usersignup")
const usersignincontroller = require('../controller/user/usersignin')
const userdetailcontroller = require('../controller/user/userdetail')
const authtoken = require('../middleware/authtoken')
const userlogout = require('../controller/user/userlogout')
const allusers = require('../controller/user/allusers')
const updateUser = require('../controller/user/updateUser')
const uploadProductControllar = require('../controller/product/uploadProduct')
const getProductsController = require('../controller/product/getProducts')
const updateProductControllar = require('../controller/product/updateProduct')
const getCategoryproduct = require('../controller/product/getCategoryProduct')
const getCategorywiseProduct = require('../controller/product/getCategorywiseProduct')



router.post("/signup", usersignupcontroller)
router.post("/signin", usersignincontroller)
router.get("/user-details", authtoken, userdetailcontroller)
router.get("/userlogout", userlogout)

// admin pannel

router.get("/all-users", authtoken, allusers)
router.post("/update-user", authtoken, updateUser)

//products

router.post("/upload-product", authtoken, uploadProductControllar)
router.get("/get-product", getProductsController)
router.post("/update-product", authtoken, updateProductControllar)
router.get("/get-categoryporduct", getCategoryproduct)
router.post("/category-product", getCategorywiseProduct)

module.exports = router
