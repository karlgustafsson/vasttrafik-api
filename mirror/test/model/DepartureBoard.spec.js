/**
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Reseplaneraren);
  }
}(this, function(expect, Reseplaneraren) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Reseplaneraren.DepartureBoard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DepartureBoard', function() {
    it('should create an instance of DepartureBoard', function() {
      // uncomment below and update the code to test DepartureBoard
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be.a(Reseplaneraren.DepartureBoard);
    });

    it('should have the property errorText (base name: "errorText")', function() {
      // uncomment below and update the code to test the property errorText
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

    it('should have the property departure (base name: "Departure")', function() {
      // uncomment below and update the code to test the property departure
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

    it('should have the property serverdate (base name: "serverdate")', function() {
      // uncomment below and update the code to test the property serverdate
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

    it('should have the property servertime (base name: "servertime")', function() {
      // uncomment below and update the code to test the property servertime
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

    it('should have the property noNamespaceSchemaLocation (base name: "noNamespaceSchemaLocation")', function() {
      // uncomment below and update the code to test the property noNamespaceSchemaLocation
      //var instane = new Reseplaneraren.DepartureBoard();
      //expect(instance).to.be();
    });

  });

}));