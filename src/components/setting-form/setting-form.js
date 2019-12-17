import React, { Component } from 'react';
import SettingItem from './setting-item';

export default class SettingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrform: []
		}
	}

	render() {
		return (
			<div className="text-center">
				<h3>Добавьте необходимые элементы для создания формы.</h3>
				<SettingItem addElement={() => console.log('add element array')}/>
			</div>
		);
	}
}