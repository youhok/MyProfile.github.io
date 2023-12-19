
function auth(req, res, next) {
    if (req.user?.id) next()

    return res.sendStatus(401)
}

export default auth