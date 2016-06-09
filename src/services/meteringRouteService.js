﻿/* globals module */
/**
 * @module baasicMeteringRouteService
 * @description Baasic Metering Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Metering Route Service to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services.
*/
(function (angular, module, undefined) {
    'use strict';
    module.service('baasicMeteringRouteService', ['baasicUriTemplateService',
        function (uriTemplateService) {
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
