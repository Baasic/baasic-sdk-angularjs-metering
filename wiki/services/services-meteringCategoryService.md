# baasicMeteringCategoryService

Baasic Metering Category Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringCategoryService` uses `baasicMeteringCategoryRouteService`.



* * *

### baasicMeteringCategoryService.find() 

Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.


**Example**:
```js
baasicMeteringCategoryService.find({
  pageNumber : 1,
  pageSize : 10,
  orderBy : '<field>',
  orderDirection : '<asc|desc>',
  search : '<search-phrase>'
})
.success(function (collection) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});    
```


### baasicMeteringCategoryService.get() 

Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.


**Example**:
```js
baasicMeteringCategoryService.get()
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringCategoryService.create() 

Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.


**Example**:
```js
baasicMeteringCategoryService.create({
  category : '<category-name>',
  unitName : 'Kb',
  unitFactor: 1,
  defaultSamplingRate: '<value>', - Defaults: Minute = 1,Hour = 2,Day = 3,Week = 4,Month = 5,Year = 6
  aggregateFunction: '<value>' - Defaults: None = 0,Count = 1,Avg = 2,Max = 3,Min = 4,Sum = 5
})
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringCategoryService.update() 

Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
```
var params = baasicApiService.removeParams(meteringCategory);
var uri = params['model'].links('put').href;
```


**Example**:
```js
// meteringCategory is a resource previously fetched using get action.
meteringCategory.defaultSamplingRate = 'Day';
baasicMeteringCategoryService.update(meteringCategory)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringCategoryService.remove() 

Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
```
var params = baasicApiService.removeParams(meteringCategory);
var uri = params['model'].links('delete').href;
```


**Example**:
```js
// meteringCategory is a resource previously fetched using get action.				 
baasicMeteringCategoryService.remove(meteringCategory)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});		
```


### baasicMeteringCategoryService.routeService() 

Provides direct access to `routeService`.


**Example**:
```js
baasicMeteringCategoryService.routeService.get.expand(expandObject);
```



* * *

**Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.

*(c) 2016 Mono*

**Author:** Mono

**License:** MIT 

