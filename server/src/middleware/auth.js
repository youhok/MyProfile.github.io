function auth(req, res, next) {
    if (req.user?.id) {
        // User is authenticated, so pass control to the next middleware
        next();
    } else {
        // User is not authenticated, send a 401 Unauthorized status
        res.sendStatus(401);
    }
}

// function auth(req, res, next) {
//     if (req.user?.id) next()

//     return res.sendStatus(401)
// }



export default auth