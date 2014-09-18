/*
	Author - Dipin Behl
	Comments - Defines a custom middleware to check for token for every route, with exceptions routes listed in unprotectedRoutes[]
*/



module.exports = function(req, res, next){
	if(req.path.substring(0,4) == '/api'){
		if(unprotectedRoutes.indexOf(req.path.replace('/api', '').trim('/')) > -1)
			next();
		else{
			if(req.get('token')){
				//Check for token
			}
			else{
				res.send(401, 'Your token has expired');
			}
		}
	}
	else
		next()
}

var unprotectedRoutes = [
		'/',
		'/login',
		'/runonce',
		'/runonce/createAdmin'
]