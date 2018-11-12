import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service(),
  
  beforeModel() {
    let authenticated = this.session.get('isAuthenticated');

    if (!authenticated) {
      this.transitionTo('login');
    }
  }
});