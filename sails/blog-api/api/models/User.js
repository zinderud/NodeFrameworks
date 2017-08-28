module.exports={

    tableName:"users",
    atributes:{
        first_name:{type:"string",required:true},
        last_name:{ type:"string",required:true},
        posts:{collection:'post',
    via:'user'}
    }
};