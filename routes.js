const routes = require('next-routes')();

routes
	.add('/bountyhubs/new', '/bountyhubs/new')
	.add('/bountyhubs/:address', '/bountyhubs/show')
	.add('/bountyhubs/:address/requests', '/bountyhubs/requests/index')
	.add('/bountyhubs/:address/requests/new', '/bountyhubs/requests/new');

module.exports = routes;
