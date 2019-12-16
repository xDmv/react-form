import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Label: ''
		}
	}

	Validate = (e) => {
		let val = e.target.value;
		this.setState({ Label: val });
	}

	render() {
		const { title, index, type, name, regexp, error, placeholder } = this.props;
		let patter = new RegExp(regexp);
		let st = patter.test(this.state.Label);
		let form_control = (!this.state.Label) ? 'form-control' :
			(st) ? 'form-control is-valid' : 'form-control is-invalid';
		let message =(!this.state.Label) ? 'invalid-feedback' :
			(st) ? 'invalid-feedback' : 'invalid-feedback shown';
		return (
			<div className="form-group">
				<label className="form-label">{title}</label>
				<input
					className={form_control}
					key={index}
					id={index}
					name={name}
					type={type}
					pattern={regexp}
					value={this.state.value}
					placeholder={placeholder}
					onChange={this.Validate}
				/>
				<div className={message} id={index + 'error'}>{error}</div>
			</div>
		);
	}
}