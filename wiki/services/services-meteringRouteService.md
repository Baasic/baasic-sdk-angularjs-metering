# baasicMeteringRouteService

Baasic Metering Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.



* * *

### baasicMeteringRouteService.find() 

Parses find metering route which can be expanded with additional options. Supported items are: 


**Example**:
```js
baasicMeteringRouteService.find.expand({searchQuery: '<search-phrase>'});               
```


### baasicMeteringRouteService.get() 

Parses get route; this route doesn't expose any properties.


**Example**:
```js
baasicMeteringRouteService.get.expand({});               
```


### baasicMeteringRouteService.create() 

Parses create metering route; this URI template does not expose any additional options.


**Example**:
```js
baasicMeteringRouteService.create.expand({});              
```


### baasicMeteringRouteService.parse() 

Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.


**Example**:
```js
baasicMeteringRouteService.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});
```


### baasicMeteringRouteService.statistics.find() 

Parses find metering route which can be expanded with additional options. Supported items are: 


**Example**:
```js
baasicMeteringRouteService.statistics.find.expand({category: '<category-name-or-id>'});               
```


### baasicMeteringRouteService.acl.get() 

Parses get metering acl route; this URI template should be expanded with the Id of the metering.


**Example**:
```js
baasicMeteringRouteService.acl.get.expand(
	{id: '<id>'}
);
```


### baasicMeteringRouteService.acl.update() 

Parses update metering acl route; this URI template should be expanded with the Id of the metering.


**Example**:
```js
baasicMeteringRouteService.acl.update.expand(
	{id: '<id>'}
);
```


### baasicMeteringRouteService.acl.deleteByUser() 

Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:


**Example**:
```js
baasicMeteringRouteService.acl.deleteByUser.expand({
    id: '<id>', 
    accessAction: '<access-action>', 
    user: '<username>'
});
```


### baasicMeteringRouteService.acl.deleteByRole() 

Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:


**Example**:
```js
baasicMeteringRouteService.acl.deleteByRole.expand({
    id: '<id>', 
    accessAction: '<access-action>', 
    role: '<role-name>'
});
```



* * *

**Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.

*(c) 2016 Mono*

**Author:** Mono

**License:** MIT 
