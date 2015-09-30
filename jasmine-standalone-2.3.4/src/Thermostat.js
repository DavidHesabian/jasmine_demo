function Thermostat(temp) {
	this.temp = (typeof temp !== 'undefined' ? temp : 20)
	this.powerSavingMode = true;
}
Thermostat.prototype.increaseTemp = function (value) {
	if (this.temp < this.maxTemp()) {
		this.temp = this.temp + value;
	}
	else
		throw new Error('you cant do that');
};

Thermostat.prototype.decreaseTemp = function (value) {
	if (this.temp > this.minTemp()) {
		this.temp = this.temp - value;
	}
	else {
		throw new Error('you cant do that');
	}
};

Thermostat.prototype.decreaseTemp = function (value) {
	this.temp = this.temp - value;
};

Thermostat.prototype.changePowerSavingMode = function (boolean) {
	this.powerSavingMode = boolean;
};

Thermostat.prototype.maxTemp = function () {
	if (this.powerSavingMode === true) {
		return 25;
	} else {
		return 32;
	}
};

Thermostat.prototype.minTemp = function () {
	return 10;
};


















//	this.maxtemp = 35;
//	this.mintemp = 10;
//	this.psm = true; //power saving mode
//};
//
//Thermostat.prototype.temp = function() {
//	this.temp = this.temp
//
//
//Thermostat.prototype.maxtemp = function() {
//	if (this.powerSavingMode === true) {
//		return 25;
//	} else {
//		return 32;
//	};
//};
//
//Thermostat.prototype.mintemp = function() {
//	return 10;
//};





////Thermostat.prototype.colorStatus = function() {
//	if(this.temp <18) {
//		 return "Green";
//	}
//		else if (this.temp <25) {
//			return "Orange"
//		}
//		else {
//			return "Red"
//		}


