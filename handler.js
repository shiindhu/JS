const pg = require('pg');
const pool = new pg.Pool({
    user: 'register',
    host: 'localhost',
    database: 'register',
    password: 'lathika1976',
    port: '5432'
});

function query_handler(query_string){
    return new Promise ((resolve,reject)=>{
        pool.query(query_string,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = query_handler;