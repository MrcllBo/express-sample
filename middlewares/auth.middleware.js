const authMiddleware=(request,response,next)=>{
    console.log(`Auth middleware:deve controllare se dentro l'eader esiste la chiave corretta`);

const {headers} = request;

if(headers['secret']===process.env.API_KEY){
    next();
}else {
    response
    .status(401)
    .json({
        status:'fail',
        code:403,
        error:'Unauthorized'
    });
}
}


export default authMiddleware