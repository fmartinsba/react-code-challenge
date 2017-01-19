import React from "react";
import { connect } from "react-redux";
import { getEndpoint } from "../actions/endpointActions";
import ControlWrapper from "../components/ControlWrapper";

@connect((store) => {
	return {
		buttons: store.endpoint.buttons,
		bars: store.endpoint.bars,
		limit: store.endpoint.limit
	};
})
export default class Page extends React.Component {

	componentDidMount() {
    	this.props.dispatch(getEndpoint());
	}

	render () {

		const { buttons } = this.props;
		const { bars } = this.props;
		const { limit } = this.props;

		return (
			<div class="container">
				<div class="row">
					<div class="col-lg-12" style={{paddingTop: '50px'}}>
						
						<ControlWrapper 
							buttons={buttons}
							bars={bars}
							limit={limit} />

					</div>
				</div>
			</div>
		)

	}

}