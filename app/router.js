import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', { path: '/' }, function() {
    this.route('accounts', function() {
      this.route('new');

      this.route('edit', {
        path: ':account_id/edit'
      });

      this.route('show', {
        path: ':account_id'
      });
    });
  });

  this.route('auth', function() {
    this.route('login');
  });
});

export default Router;
