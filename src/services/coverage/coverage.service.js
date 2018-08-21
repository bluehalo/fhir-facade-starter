/*eslint no-unused-vars: "warn"*/

const { RESOURCES } = require('@asymmetrik/node-fhir-server-core').constants;
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let getCoverage = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.COVERAGE));};

let getMeta = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.META));};

module.exports.search = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> search');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let beneficiary = args['beneficiary'];
	let _class = args['_class'];
	let dependent = args['dependent'];
	let group = args['group'];
	let identifier = args['identifier'];
	let payor = args['payor'];
	let plan = args['plan'];
	let policy_holder = args['policy-holder'];
	let sequence = args['sequence'];
	let subclass = args['subclass'];
	let subgroup = args['subgroup'];
	let subplan = args['subplan'];
	let subscriber = args['subscriber'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Coverage = getCoverage(base_version);

	// Cast all results to Coverage Class
	let coverage_resource = new Coverage();
	// TODO: Set data with constructor or setter methods
	coverage_resource.id = 'test id';

	// Return Array
	resolve([coverage_resource]);
});

module.exports.searchById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> searchById');

	let { base_version, id } = args;

	let Coverage = getCoverage(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Coverage Class
	let coverage_resource = new Coverage();
	// TODO: Set data with constructor or setter methods
	coverage_resource.id = 'test id';

	// Return resource class
	// resolve(coverage_resource);
	resolve();
});

module.exports.create = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> create');

	let { base_version, id, resource } = args;

	let Coverage = getCoverage(base_version);
	let Meta = getMeta(base_version);

	// TODO: determine if client/server sets ID

	// Cast resource to Coverage Class
	let coverage_resource = new Coverage(resource);
	coverage_resource.meta = new Meta();
	// TODO: set meta info

	// TODO: save record to database

	// Return Id
	resolve({ id: coverage_resource.id });
});

module.exports.update = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> update');

	let { base_version, id, resource } = args;

	let Coverage = getCoverage(base_version);
	let Meta = getMeta(base_version);

	// Cast resource to Coverage Class
	let coverage_resource = new Coverage(resource);
	coverage_resource.meta = new Meta();
	// TODO: set meta info, increment meta ID

	// TODO: save record to database

	// Return id, if recorded was created or updated, new meta version id
	resolve({ id: coverage_resource.id, created: false, resource_version: coverage_resource.meta.versionId });
});

module.exports.remove = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> remove');

	let { id } = args;

	// TODO: delete record in database (soft/hard)

	// Return number of records deleted
	resolve({ deleted: 0 });
});

module.exports.searchByVersionId = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> searchByVersionId');

	let { base_version, id, version_id } = args;

	let Coverage = getCoverage(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Coverage Class
	let coverage_resource = new Coverage();

	// Return resource class
	resolve(coverage_resource);
});

module.exports.history = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> history');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let beneficiary = args['beneficiary'];
	let _class = args['_class'];
	let dependent = args['dependent'];
	let group = args['group'];
	let identifier = args['identifier'];
	let payor = args['payor'];
	let plan = args['plan'];
	let policy_holder = args['policy-holder'];
	let sequence = args['sequence'];
	let subclass = args['subclass'];
	let subgroup = args['subgroup'];
	let subplan = args['subplan'];
	let subscriber = args['subscriber'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Coverage = getCoverage(base_version);

	// Cast all results to Coverage Class
	let coverage_resource = new Coverage();

	// Return Array
	resolve([coverage_resource]);
});

module.exports.historyById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Coverage >>> historyById');

	// Common search params
	let { base_version, _content, _format, _id, _lastUpdated, _profile, _query, _security, _tag } = args;

	// Search Result params
	let { _INCLUDE, _REVINCLUDE, _SORT, _COUNT, _SUMMARY, _ELEMENTS, _CONTAINED, _CONTAINEDTYPED } = args;

	// Resource Specific params
	let beneficiary = args['beneficiary'];
	let _class = args['_class'];
	let dependent = args['dependent'];
	let group = args['group'];
	let identifier = args['identifier'];
	let payor = args['payor'];
	let plan = args['plan'];
	let policy_holder = args['policy-holder'];
	let sequence = args['sequence'];
	let subclass = args['subclass'];
	let subgroup = args['subgroup'];
	let subplan = args['subplan'];
	let subscriber = args['subscriber'];
	let type = args['type'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Coverage = getCoverage(base_version);

	// Cast all results to Coverage Class
	let coverage_resource = new Coverage();

	// Return Array
	resolve([coverage_resource]);
});

