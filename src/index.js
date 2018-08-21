const FHIRServer = require('@asymmetrik/node-fhir-server-core');

const {
	fhirServerConfig
} = require('./config');

let main = async function () {

	// TODO: Setup database connection and save connection somewhere that can
	// be accessible to the services.

	// Start our FHIR server
	let server = FHIRServer.initialize(fhirServerConfig);
	server.listen(fhirServerConfig.server.port, () => server.logger.verbose('Server is up and running!'));
};

main();
