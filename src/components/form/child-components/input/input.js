import React, { Component } from 'react';

export default class Input extends Component {

	render() {
		return (
			<div className="form-group">
				<label className="form-label">{this.props.title}</label>
				<input
					className="form-control"
					key={this.props.index}
					id={this.props.name}
					name={this.props.name}
					type={this.props.inputType}
					placeholder={this.props.placeholder}
					onChange={this.props.handleInput}
				/>
			</div>
		);
	}
}