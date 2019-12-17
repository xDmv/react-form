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
			<div>
				<h3>Добавте необходимые элименты для создания формы.</h3>
				<SettingItem addElement={() => console.log('add element array')}/>
				<div>
					<button type="button" >Add element +</button>
				</div>
			</div>
		);
	}
}