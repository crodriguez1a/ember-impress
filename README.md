# Ember-impress

This README outlines the details of collaborating on this Ember addon.

## Setting up the consuming application

//TODO: Find a better way to say this
Impress uses the `#` when updating the browser location, by default Ember's location is set to auto and will strip out the `#`. To avoid this conflict, set the location to `none`;

    Router.reopen({
      location: 'none'
    });

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
