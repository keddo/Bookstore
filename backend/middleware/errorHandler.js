import { CustomError } from "../utils/index.js";

const errorHandler = (err, req, res, next) => {
    // console.log(err)
    if (err.name == "ValidationError") {
        return res.status(400).send({
            type: "ValidationError",
            details: err.details
        });
    }

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            errorCode: err.errorCode
        })
    }
    return res.status(500).send('Something went wrong');
}

export {errorHandler}