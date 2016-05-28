import DS from 'ember-data';
import ENV from 'alpha-mobile/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_HOST
});
