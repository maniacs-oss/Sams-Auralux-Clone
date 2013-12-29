// Generated by CoffeeScript 1.6.3
/*
A planet that produces units.
*/


(function() {
  window.Planet = (function() {
    Planet.MIN_PLANET_RADIUS = 10;

    Planet.MAX_PLANET_RADIUS = 30;

    Planet.UNIT_DISTANCE_FROM_PLANET = 40;

    Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE = 20;

    function Planet(x, y, size) {
      this.position = new Circle(x, y, size);
    }

    Planet.prototype.tick = function() {
      return this.position.renderWireframe();
    };

    Planet.prototype.getPosition = function() {
      return this.position;
    };

    Planet.prototype.spawnUnit = function() {
      var distance_from_planet, random_offset, random_offset_destination, random_unit_vector, unit;
      random_unit_vector = Position.randomUnitVector();
      random_offset = random_unit_vector.clone();
      random_offset.multiply(this.position.getR());
      distance_from_planet = Planet.UNIT_DISTANCE_FROM_PLANET + Random.integer(-Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE, Planet.UNIT_DISTANCE_FROM_PLANET_VARIANCE);
      random_offset_destination = random_unit_vector.clone();
      random_offset_destination.multiply(this.position.getR() + distance_from_planet);
      random_offset.add(this.position);
      random_offset_destination.add(this.position);
      unit = new Unit(random_offset.getX(), random_offset.getY());
      unit.setDestination(random_offset_destination);
      return unit;
    };

    return Planet;

  })();

}).call(this);
