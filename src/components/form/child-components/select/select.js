import React, { Component } from 'react';

export default class Select extends Component {

	render() {

		return (
			<div className="form-group">
				<label htmlFor={this.props.name}> {this.props.title} </label>
				<select
					id = {this.props.index}
					name={this.props.name}

					onChange={this.props.onchange}
					className="form-control">
					{this.props.options.map((data, index) => {
						return (
							<option
								key={index}
								value={data.value}
								label={data.option}>
									{data.option}
							</option>
							);
						})
					}
				</select>
			</div>
		);
	}
}