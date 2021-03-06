const { User } = require("../../models/");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");


exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();

        res.send({
            status: "success",
            data: {
                users: users
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "server error"
        });
    }
};

exports.getUserRestaurant = async (req, res) => {
    console.log("hitting get user restaurant");
    const { limitreq } = req.query;
    try {
        var users;
        if (limitreq) {
            users = await User.findAll({ limit: limitreq, where: { role: "Partner" } });
        }
        users = await User.findAll({ where: { role: "Partner" } });


        res.send({
            status: "success",
            data: {
                users: users
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "server error"
        });
    }
};

exports.registerUser = async (req, res) => {
    try {
        const { body } = req;
        const { emailregister, passwordregister } = body;

        console.log("serveruser", req.body);

        const schema = Joi.object({
            fullname: Joi.string().min(10).max(100).required(),
            emailregister: Joi.string().email().min(8).max(50).required(),
            phone: Joi.string().min(10).max(50).required(),
            // location: Joi.string().min(8).required(),
            role: Joi.string().required(),
            passwordregister: Joi.string().min(8).required(),

        });

        const { error } = schema.validate(req.body);

        if (error)
            return res.status(400).send({
                status: "validation failed",
                message: error.details[0].message,
            });

        const checkEmail = await User.findOne({
            where: {
                email: emailregister,
            },
        });

        if (checkEmail)
            return res.status(400).send({
                status: "Register failed",
                message: "Email already registered",
            });

        const hashStrength = 10;
        const hashedPassword = await bcrypt.hash(passwordregister, hashStrength);

        console.log(req.file);

        const user = await User.create({
            fullname: req.body.fullname,
            email: req.body.emailregister,
            phone: req.body.phone,
            location: "null",
            image: "null",
            role: req.body.role,
            password: hashedPassword,
        });

        const secretKey = "asdf1234";
        const token = jwt.sign(
            {
                id: user.id,
            },
            secretKey
        );

        const url = "http://localhost:5000/uploads/";

        res.send({
            status: "success",
            message: "User Succesfully Registered",
            data: {
                user: {
                    name: user.name,
                    email: user.email,
                    token,
                    role: user.role,
                    image: url + user.image,
                },
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: "error",
            message: "Server Error",
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("hitting login");

        const schema = Joi.object({
            email: Joi.string().email().min(8).max(50).required(),
            password: Joi.string().min(8).required(),
        });

        const { error } = schema.validate(req.body);

        if (error)
            return res.status(400).send({
                status: "validation failed",
                message: error.details[0].message,
            });

        const checkEmail = await User.findOne({
            where: {
                email,
            },
        });

        if (!checkEmail)
            return res.status(400).send({
                status: "Login Failed",
                message: "Your Credentials is not Valid",
            });

        const isValidPass = await bcrypt.compare(password, checkEmail.password);

        if (!isValidPass) {
            return res.status(400).send({
                status: "Login Failed",
                message: "Your Credentials is not Valid",
            });
        }

        const secretKey = "asdf1234";
        const token = jwt.sign(
            {
                id: checkEmail.id,
            },
            secretKey
        );

        res.send({
            status: "success",
            message: "Login Success",
            data: {
                user: {
                    name: checkEmail.name,
                    email: checkEmail.email,
                    token,
                },
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: "error",
            message: "Server Error",
        });
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const newUser = await User.destroy({ where: { id } });

        if (id !== req.userId.id) {

            return res.status(400).send({
                status: "Login Failed",
                message: "Your Credentials is not Valid",
            });
        }


        res.send({
            status: "successfully deleted",
            data: {
                id: id
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "server error"
        });
    }
};

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const schema = Joi.object({
//             email: Joi.string().email().min(10).max(50).required(),
//             password: Joi.string().min(8).required(),
//         });

//         const { error } = schema.validate(req.body);

//         if (error)
//             return res.status(400).send({
//                 status: "validation failed",
//                 message: error.details[0].message,
//             });

//         const checkEmail = await User.findOne({
//             where: {
//                 email,
//             },
//         });

//         if (!checkEmail)
//             return res.status(400).send({
//                 status: "Login Failed",
//                 message: "Your Credentials is not Valid",
//             });

//         const isValidPass = await bcrypt.compare(password, checkEmail.password);

//         if (!isValidPass) {
//             return res.status(400).send({
//                 status: "Login Failed",
//                 message: "Your Credentials is not Valid",
//             });
//         }

//         const secretKey = "asdf1234";
//         const token = jwt.sign(
//             {
//                 id: checkEmail.id,
//             },
//             secretKey
//         );

//         res.send({
//             status: "success",
//             message: "Login Success",
//             data: {
//                 user: {
//                     name: checkEmail.name,
//                     email: checkEmail.email,
//                     token,
//                 },
//             },
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({
//             status: "error",
//             message: "Server Error",
//         });
//     }
// };


exports.getUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const getUser = await User.findByPk(id);

        if (getUser) {

            res.send({
                status: "successfully deleted",
                data: {
                    id: id
                }
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "server error"
        });
    }
};

exports.checkAuth = async (req, res) => {
    console.log("hitting checkAuth");

    try {
        const user = await User.findOne({
            where: {
                id: req.userId.id,
            },
        });

        res.send({
            status: "success",
            message: "User Valid",
            data: {
                user,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: "error",
            message: "Server Error",
        });
    }
};