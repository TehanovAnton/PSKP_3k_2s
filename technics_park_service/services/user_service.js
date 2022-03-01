const User = require('../models/user').User()

const userService = {
    userAttributes: Object.keys(User.getAttributes()),

    updateAttributes: function(params) {
        let paramsKeys = Object.keys(params);

        for(let i = 0; i < paramsKeys.length; i++) {
            if(!this.userAttributes.includes(paramsKeys[i])) {
                delete params[paramsKeys[i]];
            }
        }

        return params;
    },

    update: async function(userId, params) {
        let updates = userService.updateAttributes(params);
        
        let result = await User.update(
            updates, { where: { id:params['id']}, returning: true, plain: true}
        )
        .catch(error => { res.json(error) });
        
        console.log(result);
        return result;
    }
}

module.exports = { userService, User }