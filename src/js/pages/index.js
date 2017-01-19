import React from "react";
import { connect } from "react-redux";
import { getEndpoint, updateBarsValues } from "../actions/endpointActions";
import ProgressBar from "../components/ProgressBar";

@connect((store) => {
	return {
		buttons: store.endpoint.buttons,
		bars: store.endpoint.bars,
		limit: store.endpoint.limit
	};
})
export default class Page extends React.Component {

	constructor() {
		super();
		this.state = {
			buttons: [],
			bars: [],
			limit: 100,
			currentBar: 0
		}
	}

	componentWillReceiveProps(props) {
        this.setState({
        	buttons: props.buttons,
			bars: props.bars,
			limit: props.limit
        })
    }

	componentDidMount() {
    	this.props.dispatch(getEndpoint());
	}

	render () {

		const { buttons } = this.state;
		const { bars } = this.state;
		const { limit } = this.state;

		return (
			<div class="container">
				<div class="row">
					<div class="col-lg-12" style={{paddingTop: '50px'}}>
						
						{bars.map((bar, index) => 
							<ProgressBar key={index} value={bar} limit={limit} />
						)}

						<div className="form-horizontal">
							<div class="form-group">
								<div class="col-sm-4">

									<select class="form-control" onChange={(e) => this.selectBar(e)}>
										{bars.map((bar, index) =>
											<option key={index} value={bar}>Progress bar {index + 1}</option>
										)}
									</select>

								</div>
								<div class="col-sm-4">

									<div class="btn-group" role="group">
										{buttons.map((button, index) =>
											<button key={index} class={"btn btn-default btn-" + index} onClick={() => this.updateValue(button)}>{button}</button>
										)}
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		)

	}

	selectBar(e) {
		this.setState({
			currentBar: e.target.selectedIndex
		});
	}

	updateValue(value) {
		var bars = this.state.bars;
		var value = bars[this.state.currentBar] + value;
		bars[this.state.currentBar] = value >= 0 ? value : 0;

		this.setState({
			bars: bars
		});
	}

}