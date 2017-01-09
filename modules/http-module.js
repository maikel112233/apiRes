function handle_GET_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('Se ha solicitado request Get');
	console.log('peticioón Get');
}

function handle_POST_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('Se ha solicitado request POST');
	console.log('peticioón POST');
}

function handle_PUT_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('Se ha solicitado request PUT');
	console.log('peticioón PUT');
}

function handle_HEAD_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('Se ha solicitado request HEAD');
	console.log('peticioón HEAD');
}

function handle_DELETE_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('Se ha solicitado request DELETE');
	console.log('peticioón DELETE');
}

function handle_BAD_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('RESPUESTA INCORRECTA');
	console.log('INCORRECTA');
}

function handle_BAD_request( response) {
	response.writeHead(200, {
		'content-Type': 'text/plain'
	});

	response.end('RESPUESTA INCORRECTA');
	console.log('INCORRECTA');
}

module.exports= function handle_request(request, response) {
	switch (request.method) {
		case 'GET':
			handle_GET_request(response);
			break;
		case 'POST':
			handle_POST_request(response);
			break;
		case 'PUT':
			handle_PUT_request(response);
			break;
		case 'DELETE':
			handle_DELETE_request(response);
			break;
		case 'HEAD':
			handle_HEAD_request(response);
			break;
		default:
			handle_BAD_request(response);
			break;


	}

}