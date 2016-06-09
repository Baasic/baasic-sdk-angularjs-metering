(function (angular, undefined) { /* exported module */
    /** 
     * @description The angular.module is a global place for creating, registering or retrieving modules. All modules should be registered in an application using this mechanism.  An angular module is a container for the different parts of your app - services, directives etc. In order to use `baasic.metering` module functionality it must be added as a dependency to your app.
     * @copyright (c) 2015 Mono
     * @license MIT
     * @author Mono
     * @module baasic.metering
     * @example
     (function (Main) {
     'use strict';
     var dependencies = [
     'baasic.api',
     'baasic.membership',
     'baasic.security',
     'baasic.appSettings',
     'baasic.metering',
     'baasic.dynamicResource',
     'baasic.keyValue',
     'baasic.valueSet'
     ];
     Main.module = angular.module('myApp.Main', dependencies);
     }
     (MyApp.Modules.Main = {})); 
     */
    var module = angular.module('baasic.metering', ['baasic.api']);

    /* globals module */
    /**
     * @module baasicMeteringCategoryRouteService
     * @description Baasic Metering Category Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Category Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringCategoryRouteService', ['baasicUriTemplateService', function (uriTemplateService) {
            return {
                /**
                 * Parses find metering category route which can be expanded with additional options. Supported items are: 
                 * - `searchQuery` - A string value used to identify metering resources using the phrase search.
                 * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.
                 * - `rpp` - A value used to limit the size of result set per page.
                 * - `sort` - A string used to set the metering property to sort the result collection by.
                 * - `embed` - Comma separated list of resources to be contained within the current representation.
                 * @method        
                 * @example baasicMeteringCategoryRouteService.find.expand({searchQuery: '<search-phrase>'});               
                 **/
                find: uriTemplateService.parse("metering/categories/{?searchQuery,page,rpp,sort,embed,fields}"),
                /**
                 * Parses get route; this route doesn't expose any properties.
                 * @method        
                 * @example baasicMeteringCategoryRouteService.get.expand({});               
                 **/
                get: uriTemplateService.parse('metering/categories/{id}/{?embed,fields}'),
                /**
                 * Parses create metering category route; this URI template does not expose any additional options.
                 * @method        
                 * @example baasicMeteringCategoryRouteService.create.expand({});              
                 **/
                create: uriTemplateService.parse("metering/categories"),
                /**
                 * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.
                 * @method
                 * @example baasicMeteringCategoryRouteService.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});
                 **/
                parse: uriTemplateService.parse
            };
        }]);
    }(angular, module));
    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
     - All end-point objects are transformed by the associated route service.
     */


    /* globals module */
    /**
     * @module baasicMeteringCategoryService
     * @description Baasic Metering Category Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringCategoryService` uses `baasicMeteringCategoryRouteService`.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringCategoryService', ['baasicApiHttp', 'baasicApiService', 'baasicConstants', 'baasicMeteringCategoryRouteService', function (baasicApiHttp, baasicApiService, baasicConstants, routeService) {
            return {
                /**
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.
                 * @method        
                 * @example 
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
                 **/
                find: function (options) {
                    return baasicApiHttp.get(routeService.find.expand(baasicApiService.findParams(options)));
                },
                /**
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.
                 * @method        
                 * @example 
                 baasicMeteringCategoryService.get()
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                get: function (id, options) {
                    return baasicApiHttp.get(routeService.get.expand(baasicApiService.getParams(id, options)));
                },
                /**
                 * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.
                 * @method        
                 * @example 
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
                 **/
                create: function (data) {
                    return baasicApiHttp.post(routeService.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                },
                /**
                 * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 ```
                 var params = baasicApiService.removeParams(meteringCategory);
                 var uri = params['model'].links('put').href;
                 ```
                 * @method        
                 * @example 
                 // meteringCategory is a resource previously fetched using get action.
                 meteringCategory.defaultSamplingRate = 'Day';
                 baasicMeteringCategoryService.update(meteringCategory)
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                update: function (data) {
                    var params = baasicApiService.updateParams(data);
                    return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                },
                /**
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 ```
                 var params = baasicApiService.removeParams(meteringCategory);
                 var uri = params['model'].links('delete').href;
                 ```
                 * @method        
                 * @example 
                 // meteringCategory is a resource previously fetched using get action.
                 baasicMeteringCategoryService.remove(meteringCategory)
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                remove: function (data) {
                    var params = baasicApiService.removeParams(data);
                    return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                },
                /**
                 * Provides direct access to `routeService`.
                 * @method        
                 * @example baasicMeteringCategoryService.routeService.get.expand(expandObject);
                 **/
                routeService: routeService
            };
        }]);
    }(angular, module));

    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - All end-point objects are transformed by the associated route service.
     */

    /* globals module */
    /**
     * @module baasicMeteringRouteService
     * @description Baasic Metering Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringRouteService', ['baasicUriTemplateService', function (uriTemplateService) {
            return {
                /**
                 * Parses find metering route which can be expanded with additional options. Supported items are: 
                 * - `applicationId` - The application identifier.
                 * - `categories` - The metering categories.
                 * - `from` - The from date.
                 * - `to` - The to date.
                 * - `names` - The name of the resource inside the category.
                 * - `statuses` - The operation status.
                 * - `endpoints` - The back-end endpoint.
                 * - `sources` - The metering collector source.
                 * - `searchQuery` - A string value used to identify metering resources using the phrase search.
                 * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.
                 * - `rpp` - A value used to limit the size of result set per page.
                 * - `sort` - A string used to set the metering property to sort the result collection by.
                 * - `embed` - Comma separated list of resources to be contained within the current representation.
                 * @method        
                 * @example baasicMeteringRouteService.find.expand({searchQuery: '<search-phrase>'});               
                 **/
                find: uriTemplateService.parse("metering/data/{?applicationId,searchQuery,categories,from,to,names,statuses,endpoints,sources,page,rpp,sort,embed,fields}"),
                /**
                 * Parses get route; this route doesn't expose any properties.
                 * @method        
                 * @example baasicMeteringRouteService.get.expand({});               
                 **/
                get: uriTemplateService.parse('metering/data/{id}/{?embed,fields}'),
                /**
                 * Parses create metering route; this URI template does not expose any additional options.
                 * @method        
                 * @example baasicMeteringRouteService.create.expand({});              
                 **/
                create: uriTemplateService.parse("metering/data"),
                /**
                 * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.
                 * @method
                 * @example baasicMeteringRouteService.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});
                 **/
                parse: uriTemplateService.parse,
                statistics: {
                    /**
                     * Parses find metering route which can be expanded with additional options. Supported items are: 
                     * - `category` - The metering category.
                     * - `applicationId` - The application identifier.
                     * - `rateBy` - The sampling rate by minute,hour,day,week, month or year.
                     * - `from` - The from date.
                     * - `to` - The to date.
                     * - `names` - The name of the resource inside the category.
                     * - `statuses` - The operation status.
                     * - `endpoints` - The back-end endpoint.
                     * - `sources` - The metering collector source.                    
                     * - `page` - A value used to set the page number, i.e. to retrieve certain metering subset from the storage.
                     * - `rpp` - A value used to limit the size of result set per page.
                     * - `sort` - A string used to set the metering property to sort the result collection by.
                     * - `embed` - Comma separated list of resources to be contained within the current representation.
                     * @method        
                     * @example baasicMeteringRouteService.statistics.find.expand({category: '<category-name-or-id>'});               
                     **/
                    find: uriTemplateService.parse("metering/statistics/{category}/{?applicationId,rateBy,from,to,names,statuses,endpoints,sources,page,rpp,sort,embed,fields}"),
                },
                acl: {
                    /**
                     * Parses get metering acl route; this URI template should be expanded with the Id of the metering.					
                     * @method acl.get       
                     * @example 
                     baasicMeteringRouteService.acl.get.expand(
                     {id: '<id>'}
                     );
                     **/
                    get: uriTemplateService.parse('metering/data/{id}/acl/{?fields}'),
                    /**
                     * Parses update metering acl route; this URI template should be expanded with the Id of the metering.					
                     * @method acl.update       
                     * @example 
                     baasicMeteringRouteService.acl.update.expand(
                     {id: '<id>'}
                     );
                     **/
                    update: uriTemplateService.parse('metering/data/{id}/acl/{?fields}'),
                    /**
                     * Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:
                     * - `id` - Id of the metering.
                     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and metering resource.
                     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.					
                     * @method acl.deleteByUser       
                     * @example 
                     baasicMeteringRouteService.acl.deleteByUser.expand({
                     id: '<id>', 
                     accessAction: '<access-action>', 
                     user: '<username>'
                     });
                     **/
                    deleteByUser: uriTemplateService.parse('metering/data/{id}/acl/actions/{accessAction}/users/{user}/'),
                    /**
                     * Parses deleteByUser metering acl route which can be expanded with additional options. Supported items are:
                     * - `id` - Id of the metering.
                     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and metering resource.
                     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.					
                     * @method acl.deleteByRole       
                     * @example 
                     baasicMeteringRouteService.acl.deleteByRole.expand({
                     id: '<id>', 
                     accessAction: '<access-action>', 
                     role: '<role-name>'
                     });
                     **/
                    deleteByRole: uriTemplateService.parse('metering/data/{id}/acl/actions/{accessAction}/roles/{role}/')
                }
            };
        }]);
    }(angular, module));
    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
     - All end-point objects are transformed by the associated route service.
     */

    /* globals module */
    /**
     * @module baasicMeteringService
     * @description Baasic Metering Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringService` uses `baasicMeteringRouteService`.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringService', ['baasicApiHttp', 'baasicApiService', 'baasicConstants', 'baasicMeteringRouteService', function (baasicApiHttp, baasicApiService, baasicConstants, routeService) {
            return {
                /**
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.
                 * @method        
                 * @example 
                 baasicMeteringService.find({
                 pageNumber : 1,
                 pageSize : 10,
                 orderBy : '<field>',
                 orderDirection : '<asc|desc>',
                 categories: 'Storage,Requests,Bandwidth',
                 search : '<search-phrase>'
                 })
                 .success(function (collection) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                find: function (options) {
                    return baasicApiHttp.get(routeService.find.expand(baasicApiService.findParams(options)));
                },
                /**
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.
                 * @method        
                 * @example 
                 baasicMeteringService.get()
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                get: function (id, options) {
                    return baasicApiHttp.get(routeService.get.expand(baasicApiService.getParams(id, options)));
                },
                /**
                 * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.
                 * @method        
                 * @example 
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
                 **/
                create: function (data) {
                    return baasicApiHttp.post(routeService.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                },
                /**
                 * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 ```
                 var params = baasicApiService.removeParams(meteringData);
                 var uri = params['model'].links('put').href;
                 ```
                 * @method        
                 * @example 
                 // meteringData is a resource previously fetched using get action.
                 meteringData.value = '<some-new-value>';
                 baasicMeteringService.update(meteringData)
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                update: function (data) {
                    var params = baasicApiService.updateParams(data);
                    return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                },
                /**
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 ```
                 var params = baasicApiService.removeParams(meteringData);
                 var uri = params['model'].links('delete').href;
                 ```
                 * @method        
                 * @example 
                 // meteringData is a resource previously fetched using get action.
                 baasicMeteringService.remove(meteringData)
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                remove: function (data) {
                    var params = baasicApiService.removeParams(data);
                    return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                },
                /**
                 * Provides direct access to `routeService`.
                 * @method        
                 * @example baasicMeteringService.routeService.get.expand(expandObject);
                 **/
                routeService: routeService,
                statistics: {
                    /**
                     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.
                     * @method        
                     * @example 
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
                     **/
                    find: function (options) {
                        return baasicApiHttp.get(routeService.statistics.find.expand(baasicApiService.findParams(options)));
                    }
                },
                acl: {
                    /**
                     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified metering resource.
                     * @method acl.get       
                     * @example 
                     baasicMeteringService.acl.get({id: '<id>'})
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     **/
                    get: function (options) {
                        var params = angular.copy(options);
                        return baasicApiHttp.get(routeService.acl.get.expand(params));
                    },
                    /**
                     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified metering resource.
                     * @method acl.update      
                     * @example 
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
                     **/
                    update: function (options) {
                        var params = angular.copy(options);
                        return baasicApiHttp.put(routeService.acl.get.expand(params), params[baasicConstants.modelPropertyName]);
                    },
                    /**
                     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and metering resource.
                     * @method acl.deleteByUser      
                     * @example 
                     baasicMeteringService.acl.removeByUser('<id>', '<access-action>', '<username>')
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     **/
                    removeByUser: function (id, action, user, data) {
                        var params = baasicApiService.removeParams(data);
                        params.id = id;
                        params.user = user;
                        params.accessAction = action;
                        return baasicApiHttp.delete(routeService.acl.deleteByUser.expand(params));
                    },
                    /**
                     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and metering resource.
                     * @method acl.deleteByRole      
                     * @example 
                     baasicMeteringService.acl.removeByRole('<id>', '<access-action>', '<role-name>')
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     **/
                    removeByRole: function (id, action, role, data) {
                        var params = baasicApiService.removeParams(data);
                        params.id = id;
                        params.role = role;
                        params.accessAction = action;
                        return baasicApiHttp.delete(routeService.acl.deleteByRole.expand(params));
                    }
                }
            };
        }]);
    }(angular, module));

    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - All end-point objects are transformed by the associated route service.
     */

    /* globals module */
    /**
     * @module baasicMeteringSettingsRouteService
     * @description Baasic Metering Settings Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering settings Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringSettingsRouteService', ['baasicUriTemplateService', function (uriTemplateService) {
            return {
                /**
                 * Parses get route; this route doesn't expose any properties.
                 * @method        
                 * @example baasicMeteringSettingsRouteService.get.expand({});               
                 **/
                get: uriTemplateService.parse('metering/settings/{id}/{?embed,fields}'),
                /**
                 * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.
                 * @method
                 * @example baasicMeteringSettingsRouteService.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});
                 **/
                parse: uriTemplateService.parse
            };
        }]);
    }(angular, module));
    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
     - All end-point objects are transformed by the associated route service.
     */



    /* globals module */
    /**
     * @module baasicMeteringSettingsService
     * @description Baasic Metering Settings Service provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringSettingsService` uses `baasicMeteringSettingsRouteService`.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicMeteringSettingsService', ['baasicApiHttp', 'baasicApiService', 'baasicConstants', 'baasicMeteringSettingsRouteService', function (baasicApiHttp, baasicApiService, baasicConstants, routeService) {
            return {
                /**
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.
                 * @method        
                 * @example 
                 baasicMeteringSettingsService.get()
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                get: function (options) {
                    return baasicApiHttp.get(routeService.get.expand(baasicApiService.getParams(options)));
                },
                /**
                 * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringSettingsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 ```
                 var params = baasicApiService.removeParams(meteringSettings);
                 var uri = params['model'].links('put').href;
                 ```
                 * @method        
                 * @example 
                 // meteringSettings is a resource previously fetched using get action.
                 meteringSettings.dataRetentionPeriod = 60;
                 baasicMeteringSettingsService.update(meteringSettings)
                 .success(function (data) {
                 // perform success action here
                 })
                 .error(function (response, status, headers, config) {
                 // perform error handling here
                 });
                 **/
                update: function (data) {
                    var params = baasicApiService.updateParams(data);
                    return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                },
                /**
                 * Provides direct access to `routeService`.
                 * @method        
                 * @example baasicMeteringSettingsService.routeService.get.expand(expandObject);
                 **/
                routeService: routeService
            };
        }]);
    }(angular, module));

    /**
     * @copyright (c) 2016 Mono
     * @license MIT
     * @author Mono
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - All end-point objects are transformed by the associated route service.
     */

})(angular);