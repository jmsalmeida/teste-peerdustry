import Route from '@ember/routing/route';
import { inject } from '@ember/service';


export default Route.extend({
  session: inject(),

  beforeModel(transition) {
    let authenticated = this.session.get('isAuthenticated');

    if (!authenticated) {
      let loginController = this.controllerFor('login');
      loginController.set('previousTransition', transition)
      this.transitionTo('login')
    }
  }
});