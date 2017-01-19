import axios from "axios";

export function getEndpoint() {
	return function(dispatch) {
		axios({
            method: 'GET',
            url: 'http://frontend-exercise.apps.staging.digital.gov.au/bars'
        }).then((response) => {
            dispatch({
                type: 'GET_ENDPOINT_SUCCESS', 
                buttons: response.data.buttons,
                bars: response.data.bars,
                limit: response.data.limit
            });
        }).catch((err) => {
            dispatch({
                type: 'GET_ENDPOINT_FAIL', 
                payload: err
            });
        })
	}
}