import React, { Component } from 'react';

export default class Textarea extends Component {

	render() {
		return (
			<div className="form-group">
				<label className="form-label">{this.props.title}</label>
				<textarea
					className="form-control"
					key={this.props.index}
					id = {this.props.id}
					name={this.props.name}
					rows={this.props.rows}
					cols={this.props.cols}
					maxLength={this.props.maxlength}
					placeholder={this.props.placeholder} />
			</div>
		);
	}
}