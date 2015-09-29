function Thermostat(temperature) {
    this.temperature = (typeof temperature !== 'undefined' ? temperature : 20);
    this.powerSavingMode = true;
}
//Thermostat.prototype.temperature = function (temperature) {
//    return temperature;
//};

//Thermostat.prototype.increase = function()

Thermostat.prototype.increaseTemperature = function (value) {
    if (this.temperature < this.maxTemp()) {
        this.temperature = this.temperature + value;
    }
    else
        throw new Error('No can do!');

};

Thermostat.prototype.sub = function (value) {
    this.temperature = this.temperature - value;
};

Thermostat.prototype.maxTemp = function () {
    //25 eller 32
    if (this.powerSavingMode === true) {
        return 25;
    } else {
        return 32;
    }
};

//Thermostat.prototype.powerSavingMode.add = function(value) {
//if (this.temperature)


//}

Thermostat.prototype.changePowerSavingMode = function (boolean) {
    this.powerSavingMode = boolean;
}


