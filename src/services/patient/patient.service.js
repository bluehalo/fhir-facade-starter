/*eslint no-unused-vars: "warn"*/

const { RESOURCES } = require('@asymmetrik/node-fhir-server-core').constants;
const FHIRServer = require('@asymmetrik/node-fhir-server-core');

let getPatient = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.PATIENT));};

let getMeta = (base_version) => {
	return require(FHIRServer.resolveFromVersion(base_version, RESOURCES.META));};

module.exports.search = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> search');

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
	let animal_breed = args['animal-breed'];
	let animal_species = args['animal-species'];
	let birthdate = args['birthdate'];
	let death_date = args['death-date'];
	let deceased = args['deceased'];
	let email = args['email'];
	let family = args['family'];
	let gender = args['gender'];
	let general_practitioner = args['general-practitioner'];
	let given = args['given'];
	let identifier = args['identifier'];
	let language = args['language'];
	let link = args['link'];
	let name = args['name'];
	let organization = args['organization'];
	let phone = args['phone'];
	let phonetic = args['phonetic'];
	let telecom = args['telecom'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Patient = getPatient(base_version);

	// Cast all results to Patient Class
	let patient_resource = new Patient();
	// TODO: Set data with constructor or setter methods
	patient_resource.id = 'test id';

	// Return Array
	resolve([patient_resource]);
});

module.exports.searchById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> searchById');

	let { base_version, id } = args;

	let Patient = getPatient(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Patient Class
	let patient_resource = new Patient();
	// TODO: Set data with constructor or setter methods
	patient_resource.id = 'test id';

	// Return resource class
	// resolve(patient_resource);
	resolve();
});

module.exports.create = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> create');

	let { base_version, id, resource } = args;

	let Patient = getPatient(base_version);
	let Meta = getMeta(base_version);

	// TODO: determine if client/server sets ID

	// Cast resource to Patient Class
	let patient_resource = new Patient(resource);
	patient_resource.meta = new Meta();
	// TODO: set meta info

	// TODO: save record to database

	// Return Id
	resolve({ id: patient_resource.id });
});

module.exports.update = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> update');

	let { base_version, id, resource } = args;

	let Patient = getPatient(base_version);
	let Meta = getMeta(base_version);

	// Cast resource to Patient Class
	let patient_resource = new Patient(resource);
	patient_resource.meta = new Meta();
	// TODO: set meta info, increment meta ID

	// TODO: save record to database

	// Return id, if recorded was created or updated, new meta version id
	resolve({ id: patient_resource.id, created: false, resource_version: patient_resource.meta.versionId });
});

module.exports.remove = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> remove');

	let { id } = args;

	// TODO: delete record in database (soft/hard)

	// Return number of records deleted
	resolve({ deleted: 0 });
});

module.exports.searchByVersionId = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> searchByVersionId');

	let { base_version, id, version_id } = args;

	let Patient = getPatient(base_version);

	// TODO: Build query from Parameters

	// TODO: Query database

	// Cast result to Patient Class
	let patient_resource = new Patient();

	// Return resource class
	resolve(patient_resource);
});

module.exports.history = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> history');

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
	let animal_breed = args['animal-breed'];
	let animal_species = args['animal-species'];
	let birthdate = args['birthdate'];
	let death_date = args['death-date'];
	let deceased = args['deceased'];
	let email = args['email'];
	let family = args['family'];
	let gender = args['gender'];
	let general_practitioner = args['general-practitioner'];
	let given = args['given'];
	let identifier = args['identifier'];
	let language = args['language'];
	let link = args['link'];
	let name = args['name'];
	let organization = args['organization'];
	let phone = args['phone'];
	let phonetic = args['phonetic'];
	let telecom = args['telecom'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Patient = getPatient(base_version);

	// Cast all results to Patient Class
	let patient_resource = new Patient();

	// Return Array
	resolve([patient_resource]);
});

module.exports.historyById = (args, context, logger) => new Promise((resolve, reject) => {
	logger.info('Patient >>> historyById');

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
	let animal_breed = args['animal-breed'];
	let animal_species = args['animal-species'];
	let birthdate = args['birthdate'];
	let death_date = args['death-date'];
	let deceased = args['deceased'];
	let email = args['email'];
	let family = args['family'];
	let gender = args['gender'];
	let general_practitioner = args['general-practitioner'];
	let given = args['given'];
	let identifier = args['identifier'];
	let language = args['language'];
	let link = args['link'];
	let name = args['name'];
	let organization = args['organization'];
	let phone = args['phone'];
	let phonetic = args['phonetic'];
	let telecom = args['telecom'];

	// TODO: Build query from Parameters

	// TODO: Query database

	let Patient = getPatient(base_version);

	// Cast all results to Patient Class
	let patient_resource = new Patient();

	// Return Array
	resolve([patient_resource]);
});

