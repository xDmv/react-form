import React, { Component } from 'react';

export default class Select extends Component {

	render() {
		const {title, name, index, onchange, options} = this.props;

		return (
			<div className="form-group">
				<label htmlFor={name}> {title} </label>
				<select
					id = {index}
					name={name}
					onChange={onchange}
					className="form-control">
					{options.map((data, index) => {
						return (
							<option
								key={index}
								id={index}
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