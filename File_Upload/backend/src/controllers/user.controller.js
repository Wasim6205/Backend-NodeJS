const create = async (req,res) => {
    try {
        console.log("hello");
        console.log(req.body);
        console.log(req.files);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create
}