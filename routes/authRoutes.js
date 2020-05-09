// require npm module
const passport = require('passport');


// export below as function and call with app object
module.exports = (app) => {
	// 'google' recognized as GoogleStrategy
	app.get('/auth/google',passport.authenticate('google', {
		scope: ['profile','email']
		})
	);

	// called when google has authenticated and returning
	app.get('/auth/google/callback',passport.authenticate('google'));	
}
