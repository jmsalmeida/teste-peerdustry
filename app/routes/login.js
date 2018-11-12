import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service(),
  beforeModel: function () {
    return this.get('session').fetch().catch(function () {});
  }
});