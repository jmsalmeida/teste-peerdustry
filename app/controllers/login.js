import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  userPassword: '',

  actions: {
    signIn() {
      const email = this.get('emailAddress');
      const password = this.get('userPassword');
      

      this.get('session').open('firebase', { provider: 'password', email: email, password: password }).then(() => {
        let previousTransition = this.previousTransition;
        if (previousTransition) {
          this.set('previousTransition', null);
          previousTransition.retry();
        } else {
          this.transitionToRoute('admin');
        }
      });
    },

    signOut: function () {
      this.get('session').close();
      this.transitionToRoute('index');
    }
  }
});
