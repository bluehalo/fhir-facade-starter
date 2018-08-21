/*eslint no-unused-vars: "warn"*/

const { RESOURCES } = require('@asymmetrik/node-fhir-server-core').constants;
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let getOrganization = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.ORGANIZATION));};

let getMeta = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.META));};

module.exports.search = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> search');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let active = args['active'];
	let address = args['address'];
	let address_city = args['address-city'];
	let address_country = args['address-country'];
	let address_postalcode = args['address-postalcode'];
	let address_state = args['address-state'];
	let address_use = args['address-use'];
	let endpoint = args['endpoint'];
	let identifier = args['identifier'];
	let name = args['name'];
	let partof = args['partof'];
	let PHONETIC = args['PHONETIC'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Organization = getOrganization(base_version);

	// Cast all results to Organization Class
	let organization_resource = new Organization();
	// TODO: Set data with constructor or setter methods
	organization_resource.id = 'test id';

	// Return Array
	resolve([organization_resource]);
});

module.exports.searchById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> searchById');

	let { base_version, id } = args;

	let Organization = getOrganization(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Organization Class
	let organization_resource = new Organization();
	// TODO: Set data with constructor or setter methods
	organization_resource.id = 'test id';

	// Return resource class
	// resolve(organization_resource);
	resolve();
});

module.exports.create = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> create');

	let { base_version, id, resource } = args;

	let Organization = getOrganization(base_version);
	let Meta = getMeta(base_version);

	// TODO: determine if client/server sets ID

	// Cast resource to Organization Class
	let organization_resource = new Organization(resource);
	organization_resource.meta = new Meta();
	// TODO: set meta info

	// TODO: save record to database

	// Return Id
	resolve({ id: organization_resource.id });
});

module.exports.update = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> update');

	let { base_version, id, resource } = args;

	let Organization = getOrganization(base_version);
	let Meta = getMeta(base_version);

	// Cast resource to Organization Class
	let organization_resource = new Organization(resource);
	organization_resource.meta = new Meta();
	// TODO: set meta info, increment meta ID

	// TODO: save record to database

	// Return id, if recorded was created or updated, new meta version id
	resolve({ id: organization_resource.id, created: false, resource_version: organization_resource.meta.versionId });
});

module.exports.remove = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> remove');

	let { id } = args;

	// TODO: delete record in database (soft/hard)

	// Return number of records deleted
	resolve({ deleted: 0 });
});

module.exports.searchByVersionId = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> searchByVersionId');

	let { base_version, id, version_id } = args;

	let Organization = getOrganization(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Organization Class
	let organization_resource = new Organization();

	// Return resource class
	resolve(organization_resource);
});

module.exports.history = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> history');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let active = args['active'];
	let address = args['address'];
	let address_city = args['address-city'];
	let address_country = args['address-country'];
	let address_postalcode = args['address-postalcode'];
	let address_state = args['address-state'];
	let address_use = args['address-use'];
	let endpoint = args['endpoint'];
	let identifier = args['identifier'];
	let name = args['name'];
	let partof = args['partof'];
	let PHONETIC = args['PHONETIC'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Organization = getOrganization(base_version);

	// Cast all results to Organization Class
	let organization_resource = new Organization();

	// Return Array
	resolve([organization_resource]);
});

module.exports.historyById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Organization >>> historyById');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let active = args['active'];
	let address = args['address'];
	let address_city = args['address-city'];
	let address_country = args['address-country'];
	let address_postalcode = args['address-postalcode'];
	let address_state = args['address-state'];
	let address_use = args['address-use'];
	let endpoint = args['endpoint'];
	let identifier = args['identifier'];
	let name = args['name'];
	let partof = args['partof'];
	let PHONETIC = args['PHONETIC'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Organization = getOrganization(base_version);

	// Cast all results to Organization Class
	let organization_resource = new Organization();

	// Return Array
	resolve([organization_resource]);
});

