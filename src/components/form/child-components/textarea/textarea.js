import React, { Component } from 'react';

export default class Textarea extends Component {

	render() {
		const {title, name, index, id, rows, cols, placeholder, maxlength} = this.props;
		return (
			<div className="form-group">
				<label className="form-label">{title}</label>
				<textarea
					className="form-control"
					key={index}
					id = {id}
					name={name}
					rows={rows}
					cols={cols}
					maxLength={maxlength}
					placeholder={placeholder} />
			</div>
		);
	}
}