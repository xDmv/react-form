import React, { Component } from 'react';

export default class AddInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Label: ''
		}
	}

	SaveValue = (e) => {
		let val = e.target.value;
		console.log('val::', val);
		const {exportData, name } = this.props;
		this.setState({ Label: val });
		const expData = exportData || (() => { });
		expData(val, name);
	}

	render() {
		const { title, index, placeholder} = this.props;
		// console.log('this.state.Label:', this.state.Label);
		return (
			<div className="form-group col-sm-12 col-md-6">
				<label className="control-label">{title}</label>
				<input
					key={index}
					type="text"
					className="form-control"
					id={index}
					placeholder={(placeholder) ? `${placeholder}` : "Введите значение"}
					value={this.state.Label}
					onChange={this.SaveValue} />
			</div>
		);
	}
}