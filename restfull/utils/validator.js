module.exports = {
    user: (app, req, res ) => {

        req.assert('name', 'Nome é obrigatório').notEmpty();
        req.assert('email', 'Email inválido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors){
            
            app.utils.error.send(errors, req, res);

            return false;

        } else {

            return true;

        }
    }
} 