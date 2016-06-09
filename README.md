# Baasic Metering AngularJS SDK

Baasic AngularJS Metering library provides access to [Baasic REST API](https://api.baasic.com/beta) metering end-points.

## Dependencies

Baasic AngularJS Metering library has the following dependencies:

* [Baasic Core AngularJS SDK](../../../baasic-sdk-angularjs-core)

## Usage

This section will describe how to add the Baasic AngularJS Metering library to your project.

### Adding the Library to your Project

Please add the _Baasic Metering include after the _Baasic Angular Core_ include:

```html
<script src='/js/baasic-angular-core-1.0.0.min.js'></script>
<script src='/js/baasic-angular-metering-1.0.0.min.js'></script>
```
### Initialization

To be able to use the library you will need to add the Baasic (_baasic.metering_) dependency to your AngularJS module.

```javascript
angular.module('my-module', ["baasic.api", "baasic.metering"])
```

## Build Process

1. Install [NodeJs](http://nodejs.org/download/)
2. Open Shell/Command Prompt in the Baasic AngularJS folder
3. Run `npm install`
4. Install gulp globally: `npm install -g gulp`
5. Run `gulp`

## Contributing

* [Pull requests are always welcome](../../../baasic-sdk-angularjs-metering/pulls)
* Please [report](../../../baasic-sdk-angularjs-metering/issues) any issues you might have found
* Help us write the documentation
* Create interesting apps using SDK
* Looking for something else to do? Get in <u>touch</u> ...
