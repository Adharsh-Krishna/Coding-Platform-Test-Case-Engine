const mongoose=require('mongoose');
const schema=mongoose.Schema({
        problem_id:
            {   type: String ,
                unique : true,
                index:true
            },

        counts: Number,
        inputs:[{
            input_id:String,
            testcase:{type:String}
        }],
        outputs: [{
            output_id:String,
            testcase:{type:String}
        }]
    },
    {
        timestamps: true
    },
    {
        collection:'tests'
    });

exports.instance=function (mon) {
    return mon.model('tests',schema);
};

