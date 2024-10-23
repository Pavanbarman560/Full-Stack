const productModel = require("../../models/productModel")

const getCategoryproduct = async (req, res) => {
    try {

        const productCategory = await productModel.distinct("category")
    

        //this is arrey for storing all type of category product 

        const productByCategory = []

        for (const category of productCategory) {

            const product = await productModel.findOne({category})

            if (product) {

                productByCategory.push(product)
            }


        }

        res.json({

            message : "category products",
            data : productByCategory,
            success : true,
            error : false,

        })


    } catch (err) {


        res.status(400).json({
            message: err.message,
            error: true,
            success: false

        })

    }
}

module.exports = getCategoryproduct