# baasicMeteringService

Baasic Metering Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringService` uses `baasicMeteringRouteService`.



* * *

### baasicMeteringService.find() 

Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.


**Example**:
```js
baasicMeteringService.find({
  pageNumber : 1,
  pageSize : 10,
  orderBy : '<field>',
  orderDirection : '<asc|desc>',
  categories: 'Storage,Requests,Bandwidth'
})
.success(function (collection) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});    
```


### baasicMeteringService.get() 

Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.


**Example**:
```js
baasicMeteringService.get()
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.create() 

Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.


**Example**:
```js
baasicMeteringService.create({
  category : '<category-name>',
  name : '<sub-category-name>',
  value: '<value>' 
})
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.update() 

Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
```
var params = baasicApiService.removeParams(meteringData);
var uri = params['model'].links('put').href;
```


**Example**:
```js
// meteringData is a resource previously fetched using get action.
meteringData.value = '<some-new-value>';
baasicMeteringService.update(meteringData)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.remove() 

Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
```
var params = baasicApiService.removeParams(meteringData);
var uri = params['model'].links('delete').href;
```


**Example**:
```js
// meteringData is a resource previously fetched using get action.				 
baasicMeteringService.remove(meteringData)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});		
```


### baasicMeteringService.purge() 

Returns a promise that is resolved once the purge action has been performed. This action will remove all metering resources from the system if successfully completed.


**Example**:
```js
baasicMeteringService.purge()
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});		
```


### baasicMeteringService.routeService() 

Provides direct access to `routeService`.


**Example**:
```js
baasicMeteringService.routeService.get.expand(expandObject);
```


### baasicMeteringService.batch.create() 

Returns a promise that is resolved once the create data action has been performed; this action creates new data resources.


**Example**:
```js
baasicMeteringService.batch.create([{
    applicationId : '<applicationId>',
    category : '<category>',
    name: '<name>',
    value: '<value>' 
  }])
  .success(function (data) {
    // perform success action here
  })
  .error(function (response, status, headers, config) {
    // perform error handling here
  });
```


### baasicMeteringService.batch.update() 

Returns a promise that is resolved once the update data action has been performed; this action updates specified data resources.


**Example**:
```js
baasicMeteringService.batch.update(companies)
  .success(function (data) {
    // perform success action here
  })
  .error(function (response, status, headers, config) {
    // perform error handling here
  });
```


### baasicMeteringService.batch.remove() 

Returns a promise that is resolved once the remove action has been performed. This action will remove data resources from the system if successfully completed.


**Example**:
```js
baasicMeteringService.batch.remove(companyIds)
  .success(function (data) {
    // perform success action here
  })
  .error(function (response, status, headers, config) {
    // perform error handling here
  });		
```


### baasicMeteringService.statistics.find() 

Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.


**Example**:
```js
baasicMeteringService.statistics.find({
    pageNumber : 1,
    pageSize : 10,
    orderBy : '<field>',
    orderDirection : '<asc|desc>',
    category: 'Requests',
    rateBy : '<minute,hour,day,week,month,year>',
    from: '2 days ago',
    to: 'now'
  })
  .success(function (collection) {
    // perform success action here
  })
  .error(function (response, status, headers, config) {
    // perform error handling here
  });    
```


### baasicMeteringService.acl.get() 

Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified metering resource.


**Example**:
```js
baasicMeteringService.acl.get({id: '<id>'})
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.acl.update() 

Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified metering resource.


**Example**:
```js
var options = {id : '<id>'};
var aclObj =  {
 actionId: '<action-id'>,
 roleId: '<roleId>',
 userId: '<userId>'
};
options[baasicConstants.modelPropertyName] = aclObj;
baasicMeteringService.acl.update(options)
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.acl.deleteByUser() 

Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and metering resource.


**Example**:
```js
baasicMeteringService.acl.removeByUser('<id>', '<access-action>', '<username>')
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```


### baasicMeteringService.acl.deleteByRole() 

Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and metering resource.


**Example**:
```js
baasicMeteringService.acl.removeByRole('<id>', '<access-action>', '<role-name>')
.success(function (data) {
  // perform success action here
})
.error(function (response, status, headers, config) {
  // perform error handling here
});
```



* * *

**Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.

*(c) 2017 Mono Ltd*

**Author:** Mono Ltd

**License:** MIT 

