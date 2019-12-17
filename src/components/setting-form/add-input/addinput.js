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
		const { title, index, placeholder, name } = this.props;
		let type = (name === 'maxlength') ? "number" : "text";
		console.log(`name: ${name} type: ${type}`);
		return (
			<div className="form-group col-sm-12 col-md-6">
				<label className="control-label">{title}</label>
				<input
					key={index}
					type={type}
					className="form-control"
					id={index}
					placeholder={(placeholder) ? `${placeholder}` : "Введите значение"}
					value={this.state.Label}
					onChange={this.SaveValue} />
			</div>
		);
	}
}