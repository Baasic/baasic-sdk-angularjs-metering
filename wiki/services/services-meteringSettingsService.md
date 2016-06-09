# baasicMeteringSettingsService

Baasic Metering Settings Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringSettingsService` uses `baasicMeteringSettingsRouteService`.



* * *

### baasicMeteringSettingsService.get() 

Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.


**Example**:
```js
baasicMeteringSettingsService.get()
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringSettingsService.update() 

Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringSettingsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
```
var params = baasicApiService.removeParams(meteringSettings);
var uri = params['model'].links('put').href;
```


**Example**:
```js
// meteringSettings is a resource previously fetched using get action.
meteringSettings.dataRetentionPeriod = 60;
baasicMeteringSettingsService.update(meteringSettings)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringSettingsService.routeService() 

Provides direct access to `routeService`.


**Example**:
```js
baasicMeteringSettingsService.routeService.get.expand(expandObject);
```



* * *

**Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.

*(c) 2016 Mono*

**Author:** Mono

**License:** MIT 

