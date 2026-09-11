export const registerUser = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}