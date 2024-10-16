const mongoose = require('mongoose');
const User = require("../models/User")

    //Create user
    const createUser = async (req,res) => {
        try {
            const { first_name, last_name, email, phone_number } = req.body;
            const user = await User.create({ first_name, last_name, email, phone_number });

            res.status(200).json({
                success: true,
                message: "User created successfully",
                data: user
            })
        } catch (error) {
            console.log(error);
            console.log("ERROR OCCURED WHILE CREATING USER");
            res.status(500).json({
                success: false,
                message: "USER CAN NOT CREATED"
            })
        }
    }

    //Get all users
    const getAllUsers = async (req, res) => {
        try {
            const allUsers = await User.find();

            if (!allUsers) {
                return res.status(404).json({
                    success: false,
                    message: "User not found in database"
                })
            }

            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data : allUsers

            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somthing went wrong"
            })
        }
    }


    //Get single user
    const getSingleUser = async (req,res) => {
        try {
            const id = req.params.id;
            console.log(id);
            const user = await User.findOne({ _id:id })

            if (!User) {
                return res.status(404).json({
                    success: true,
                    message: "User not sound"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User data",
                data: user
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somthing went wrong"
            })
        }
    }

    // Update User
    const updateUser = async (req,res) => {
        try {
            const userId = req.params.id;

            const updateUser = new User.findByIdAndUpdate(userId,req.body,{ new:true })


            if (!userUpdate) {
                return res.status(404).json({
                    success: false,
                    message: "User update failed"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User update successfully",
                userUpdate
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somthing went wrong"
            })
        }
    }

    //Delete user
    const deleteUser = async (req,res) => {
        try {
            const userId = req.parms.id;
            const userDelete = await User.findByIdAndDelete(userId);

            if (!userDelete) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "User deleted successfully",
                userDelete
            })
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: "Somthing went wrong"
            })
        }
    }

module.exports = { createUser, getAllUsers, updateUser, deleteUser, getSingleUser };