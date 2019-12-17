import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props) {
		super(props);
		this.state = {
			optionitems: []
		}
	}

	render() {
		const { index, name, placeholder, onChange } = this.props;
		return (
			<p><input key={index} type="text" name={name} value={} placeholder={placeholder} onChange={onChange} /></p>
		)
	}
}