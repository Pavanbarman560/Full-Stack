
const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`


const UploadImage = async (image) => {

    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "mern_products")

    const dataResponce = await fetch(url, {

        method: "post",
        body: formData

    })
return dataResponce.json()

}

export default UploadImage