import React, { Component } from 'react';
import SettingItem from './setting-item';

export default class SettingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrform: [],
			isGenerateBtn: false
		}
	}

	GenerateForm(array) {
		console.log('Генерирую форму...')
	}

	render() {
		const { isGenerateBtn } = this.state
		return (
			<div className="text-center">
				<h3>Добавьте необходимые элементы для создания формы.</h3>
				<SettingItem addElement={() => console.log('add element array')} />
				{isGenerateBtn &&
					(<div className="col-sm-12 col-md-12 text-center">
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.GenerateForm} >
								Сгенерировать форму
						</button>
					</div>)
				}
			</div>
		);
	}
}