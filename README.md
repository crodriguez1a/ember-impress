# Ember-impress

An ember addon for [impress.js](https://github.com/impress/impress.js/)


## Installation

`ember install ember-impress`

## Setup

Impress.js uses hash location to step between slides, so you'll have to configure your consuming Ember app to allow for that,

    //config/environment.js

    module.exports = function(environment) {
      var ENV = {
        locationType: 'none',
        //...

*Note: Although, Impress will generate a location history for each slide, no actual routes are created in the Ember Router. This addon is not intended to transition between routes, but simply to provide a wrapper for Impress.js. For animated transitions, you'll want to use [Liquid Fire](https://github.com/ember-animation/liquid-fire)*

## Documentation

#### Ember Impress
<http://demos.evolutionaryapps.com/EmberImpress>

#### Impress.js
<https://github.com/impress/impress.js/>