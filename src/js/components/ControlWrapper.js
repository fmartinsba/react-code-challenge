import React from "react";
import ProgressBar from "./ProgressBar";

export default class ControlWrapper extends React.Component {

	constructor(props) {
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

	render () {

		const { buttons } = this.state;
		const { bars } = this.state;
		const { limit } = this.state;

		return (

			<div class="control-wrapper">

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
									<button key={index} class="btn btn-default" onClick={() => this.updateValue(button)}>{button}</button>
								)}
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