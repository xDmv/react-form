import React, { Component } from 'react';

export default class Input extends Component {

	state = {
		value: ''
	}

	Validate(e) {
		console.log('e: ', e.target.value);
		console.log('regexp: ', e.target.pattern);
		let value = new RegExp(e.target.value);
		let pattern = e.target.pattern;
		console.log('value: ', value);
		if (pattern) {
			if (pattern === value) {
				console.log('Ok!');
			} else {
				console.log('Not!');
			}
		}
	}

	render() {
		const { title, index, type, name, regexp, error, placeholder } = this.props;
		
		return (
			<div className="form-group">
				<label className="form-label">{title}</label>
				<input
					className="form-control"
					key={index}
					id={index}
					name={name}
					type={type}
					pattern={regexp}
					placeholder={placeholder}
					onChange={this.Validate}

				/>
				<div className="valid-feedback" id={index + 'error'}>{error}</div>
			</div>
		);
	}
}