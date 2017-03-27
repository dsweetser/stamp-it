import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('shop', function() {
    this.route('history');
  });
  this.route('order', { path: 'orders/:order_id' });
});

export default Router;
