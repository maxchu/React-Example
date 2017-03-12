import request from '../request';

let baseURL = "http://localhost:5000";

export let getJSON = (values) => {
	return request({url: baseURL + "/content"})
    .then(data => data = JSON.parse(data))
}
