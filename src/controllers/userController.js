const colors = require ('../data/colors');




module.exports = {

    principal: (req,res) => {
        if (req.session.userLogin) {
            return res.render('home', {user:req.session.userLogin})
        }
       return res.redirect('/')
    },

    olvidar : (req, res) =>{
        const user = req.session.userLogin
        return res.send(req.session)
        req.session.userLogin.color = null
        return res.redirect('principal')
    },
}