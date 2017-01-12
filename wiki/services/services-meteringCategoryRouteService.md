# baasicMeteringCategoryRouteService

Baasic Metering Category Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Category Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.



* * *

### baasicMeteringCategoryRouteService.find() 

Parses find metering category route which can be expanded with additional options. Supported items are: 


**Example**:
```js
baasicMeteringCategoryRouteService.find.expand({searchQuery: '<search-phrase>'});               
```


### baasicMeteringCategoryRouteService.get() 

Parses get route; this route doesn't expose any properties.


**Example**:
```js
baasicMeteringCategoryRouteService.get.expand({});               
```


### baasicMeteringCategoryRouteService.create() 

Parses create metering category route; this URI template does not expose any additional options.


**Example**:
```js
baasicMeteringCategoryRouteService.create.expand({});              
```


### baasicMeteringCategoryRouteService.parse() 

Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.


**Example**:
```js
baasicMeteringCategoryRouteService.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});
```



* * *

**Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.

*(c) 2016 Mono*

**Author:** Mono

**License:** MIT 
