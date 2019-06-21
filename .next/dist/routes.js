'use strict';

var routes = require('next-routes')();

routes.add('/bountyhubs/new', '/bountyhubs/new').add('/bountyhubs/:address', '/bountyhubs/show').add('/bountyhubs/:address/requests', '/bountyhubs/requests/index').add('/bountyhubs/:address/requests/new', '/bountyhubs/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNFLEFBREYsSUFDTSxBQUROLG1CQUN5QixBQUR6QixtQkFFRSxBQUZGLElBRU0sQUFGTix3QkFFOEIsQUFGOUIsb0JBR0UsQUFIRixJQUdNLEFBSE4saUNBR3VDLEFBSHZDLDhCQUlFLEFBSkYsSUFJTSxBQUpOLHFDQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWNoYWVsc2ljaWxpYW5vL0Rlc2t0b3AvSW1tZXJzaXZlL1N0YWNrYXRob24vSHVudGVyLVNlZWtlciJ9