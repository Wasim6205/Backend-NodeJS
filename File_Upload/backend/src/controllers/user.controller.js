const create = (req,res) => {
    console.log("hello");
    console.log(req.body);
    console.log(req.file);
}

module.exports = {
    create
}