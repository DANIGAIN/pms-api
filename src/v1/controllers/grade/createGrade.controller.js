const connect = require("../../../config/db.config");
const CustomError = require("../../../utils/Error");
const Grade = require("../../models/grade.model");

const createGrade = async (req, res) => {
    try {
        await connect();
        const { grade_name ,grade_letter } = req.body;
        await Grade.create({ grade_name ,grade_letter})
        return res.status(201).json({
             message: "Grade is create successfully",
             success: true
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = createGrade;