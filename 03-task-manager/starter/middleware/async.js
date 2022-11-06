//! By default, all async functions return a promise. If the function throws an error, the promise will be rejected. If the function returns a value, the promise will be resolved.
const asyncWrapper = (callback)=>{
    // I wanna access the req and res objects from the callback
    // ! We return a function that will be called by express, so we can access the REQ and RES objects
    return async(req,res,next)=>{
        try{
            // callback is a promise, so we have to await it
            await callback(req,res,next);
        }catch(error){
            // ! next() will pass to the next middleware in the chain
            next(error);
        } 
    }

}

module.exports = asyncWrapper;

