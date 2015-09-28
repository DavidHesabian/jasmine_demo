var Thermostat = function(temprature) {
  this.Temprature = (typeof temprature !== 'undefined' ? temprature : 20);
};

Thermostat.prototype.has = function(temprature) {
	return temprature;
};

Thermostat.prototype.add = function(temprature) {
  return '' + temprature;
};
