const { default: summaryapi } = require("../common")

const fetchCategoryWiseProduct = async (category) => {

    const response = await fetch(summaryapi.categorywiseproduct.url, {

        method: summaryapi.categorywiseproduct.method,

        headers: {

            "content-type": "application/json"

        },
        body: JSON.stringify({

            category: category

        })
    })

    const dataResponse = await response.json()

    return dataResponse

}

export default fetchCategoryWiseProduct