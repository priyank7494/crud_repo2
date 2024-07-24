var Model = require('../model/Model');

exports.insert_data = async(req,res) =>{
    var data = await Model.create(req.body);
    res.json({
        message : "data inserted successfully!!!",
        data
    });
}


exports.select_data = async(req,res) =>{
    var data = await Model.find();
    res.json({
        message : "data retrived successfully!!!",
        data
    });
}



exports.select_data_ByID = async(req,res) =>{
    var data = await Model.findById(req.params.id);
       res.json({
        message : "data fetched successfully!!!",
        data
    });
}



exports.update_data = async(req,res) =>{
    var data = await Model.findByIdAndUpdate(req.params.id , req.body);
    res.json({
        message : "data update successfully!!!",
        data
    });
}



exports.delete_data = async(req,res) =>{
    var data = await Model.findByIdAndDelete(req.params.id);
    res.json({
        message : "data deleted !!! ",
        data
    });
}