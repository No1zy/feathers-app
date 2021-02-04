const { Service } = require('feathers-sequelize');

exports.Users = class Users extends Service {
  create (data, params) {
    // This is the information we want from the user signup data
    const { email, password, name} = data;


    // Use the existing avatar image or return the Gravatar for the email
    const userData = {
      email,
      password,
      name
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }


};
