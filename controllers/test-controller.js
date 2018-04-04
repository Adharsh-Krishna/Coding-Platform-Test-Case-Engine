let db=require('../bin/db/db.js');

exports.post_test=async function (req,res) {
    try {
        console.log(req.body);
        let new_test=new db.test(req.body);
        await new_test.save(function (err, data) {
            if (err || data===undefined)
            {
                res.status(500);
            res.end(err.message);
            }
            console.log("new test created"+data);
        });
        res.status(200);
        res.end("created");
    }
    catch(err)
    {
        res.status(500);
        res.end(err.message);
    }

};

exports.get_input_test=async function (req,res) {
    try{
        let id=req.params.id
        let num=req.params.num
        let data=await db.test.findOne({problem_id:id,'inputs.input_id':num});
        console.log(data);
        res.status(200);
        res.end(String(data['inputs'][num-1].testcase));
    }
    catch(err){
        res.status(500);
        res.end("nothing");
    }
}

exports.get_output_test=async function (req,res) {
    try{
        let id=req.params.id
        let num=req.params.num
        let data=await db.test.findOne({problem_id:id,'outputs.output_id':num});
        console.log(data);
        res.status(200);
        res.end(String(data['outputs'][num-1].testcase));
    }
    catch(err){
        res.status(500);
        res.end("nothing");
    }
}


exports.get_test_count=async function(req,res) {
      try {
          let id=req.params.id;
          let data= await db.test.findOne({problem_id:id},"counts");/*.then(function (data)*/
          console.log(data);
          res.status(200);
            res.end(JSON.stringify(data.counts))
      }
      catch(err)
      {
          res.status(500);
                  console.log(err.message);
                  res.end();
      }
};

exports.update_test=function (req,res) {
        let id=req.params.id;
        db.test.update({problem_id:id},{ $set: req.body}).then(function (data) {
            if(data===undefined)
            {
                throw new Error("problem id does not exist");
            }
            else {
                res.status(200);
                res.end("updated");
            }
        }).catch(function (err) {
            res.status(500);
            res.end(err.message);
        })


};