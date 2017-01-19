import React from 'react';

export default class ProgressBar extends React.Component {

	constructor(props) {
		super();
		this.state = {
			value: props.value,
			limit: props.limit
		}
	}

	componentWillReceiveProps(props) {
        this.setState({
            value: props.value,
            limit: props.limit
        });
    }

	render () {

		const style = {
			position: 'absolute',
		    display: 'block',
		    width: '100%',
		    color: 'black'
		}

		const { limit } = this.state;
		const value = this.state.value >= 0 ? this.state.value : 0;
		const percent = parseInt(( 100 * value ) / limit);
		const classDanger = value > limit ? "progress-bar-danger" : null;

		return (
	
			<div class="progress" style={{position: 'relative'}}>

				<div 
					class={"progress-bar " + classDanger}
					role="progressbar" 
					aria-valuenow={value}
					aria-valuemin="0"
					aria-valuemax={limit}
					style={{width: percent+'%'}}>

					<span class="percent" style={style}>{percent}%</span>

    			</div>

    		</div>

		)

	}

}
