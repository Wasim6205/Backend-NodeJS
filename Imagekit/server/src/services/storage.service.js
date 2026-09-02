import Imagekit from "@imagekit/nodejs"
import dotenv from "dotenv"
dotenv.config()

const storageInstance = new Imagekit({
    urlEndpoint: process.env.IK_URL,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY
})

export const sendFiles = async (file,fileName) => {
    const obj = {
        file: file.toString("base64"),
        fileName,
        folder:'cohort-3'
    }

    return await storageInstance.files.upload(obj)
}