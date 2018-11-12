import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  userPassword: '',

  actions: {
    signIn: function () {
      const email = this.get('emailAddress');
      const password = this.get('userPassword');

      this.get('session').open('firebase', { provider: 'password', email: email, password: password }).then(function (data) {
        return data;
      });
    },

    signOut: function () {
      this.get('session').close();
    }
  }
});
