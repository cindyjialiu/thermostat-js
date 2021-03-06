describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature limits', function(){
    it('default is 20 degrees', function(){
      expect(thermostat._temp).toBe(20)
    });

    it('minimum is 10 degrees', function(){
      expect(thermostat._min).toBe(10)
    });
  });

  describe('changes the temperature', function(){
    it('increases the temperature', function(){
      thermostat.up(1)
      expect(thermostat._temp).toBe(21)
    });

    it('decreases the temperature', function(){
      thermostat.down(1)
      expect(thermostat._temp).toBe(19)
    });
  });

  describe('power saving mode is on', function(){
    it('is on by default', function(){
      expect(thermostat._powerSav).toEqual(true)
    });

    it('maximum temperature is 25 degrees', function(){
      thermostat._powerSav = true
      expect(thermostat.maximum()).toBe(25)
    });
  });

  describe('power saving mode is off', function(){
    it('maximum temperature is 32 degrees', function(){
      thermostat.psmSwitchOff()
      thermostat.maximum()
      expect(thermostat._max).toBe(32)
    });
  });

  describe('reset the thermostat', function(){
    it('resets to 20 degrees', function() {
      thermostat._temp = 23
      thermostat.reset()
      expect(thermostat._temp).toBe(20)
    });
  });

  describe('thermostat current energy usage', function(){
    it('is low useage', function() {
      thermostat._temp = 17
      expect(thermostat.energyUsage()).toBe('Low Usage')
    });

    it('is medium usage', function() {
      thermostat._temp = 18
      expect(thermostat.energyUsage()).toBe('Medium Usage')
    });

    it('is medium usage', function() {
      thermostat._temp = 24
      expect(thermostat.energyUsage()).toBe('Medium Usage')
    });

    it('is high usage', function() {
      thermostat._temp = 25
      expect(thermostat.energyUsage()).toBe('High Usage')
    });
  });
});
