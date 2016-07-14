# baasicMeteringRouteService

Baasic Metering Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.



* * *

### baasicMeteringRouteService.find() 

Parses find metering route which can be expanded with additional options. Supported items are: - `applicationId` - The application identifier.- `categories` - The metering categories  in CSV format.- `from` - The from date.- `to` - The to date.- `names` - The name of the resource inside the category in CSV format.- `moduleNames` - The name of the resource inside the category in CSV format.- `statuses` - The operation status in CSV format.- `endpoints` - The back-end endpoint in CSV format.- `sources` - The metering collector source in CSV format.- `searchQuery` - A string value used to identify metering resources using the phrase search.- `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.- `rpp` - A value used to limit the size of result set per page.- `sort` - A string used to set the metering property to sort the result collection by.- `embed` - Comma separated list of resources to be contained within the current representation.


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

Parses find metering route which can be expanded with additional options. Supported items are: - `category` - The metering category.- `applicationId` - The application identifier.- `rateBy` - The sampling rate by minute,hour,day,week, month or year.- `from` - The from date.- `to` - The to date.- `names` - The name of the resource inside the category in CSV format.- `moduleNames` - The name of the resource inside the category in CSV format.- `statuses` - The operation status in CSV format.- `endpoints` - The back-end endpoint in CSV format.- `sources` - The metering collector source in CSV format.                    - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.- `rpp` - A value used to limit the size of result set per page.- `sort` - A string used to set the metering property to sort the result collection by.- `embed` - Comma separated list of resources to be contained within the current representation.


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

Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:- `id` - Id of the metering.- `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and metering resource.- `user` - A value which uniquely identifies user for which ACL policy needs to be removed.


**Example**:
```js
baasicMeteringRouteService.acl.deleteByUser.expand({
    id: '<id>', 
    accessAction: '<access-action>', 
    user: '<username>'
});
```


### baasicMeteringRouteService.acl.deleteByRole() 

Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:- `id` - Id of the metering.- `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and metering resource.- `role` - A value which uniquely identifies role for which ACL policy needs to be removed.


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

