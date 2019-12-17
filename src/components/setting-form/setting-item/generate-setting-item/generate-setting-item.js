import React, { Component } from 'react';
import AddInput from '../../add-input';


export default class GenerateSettingItem extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			type: '',
			inputType: '',
			placeholder: '',
			regexp: '',
			error: '',
			maxlength: '',
			defaultvalue: '',
			options: []
		}
		this.SaveSetting = this.SaveSetting.bind(this);
	}

	GenerateItems() {
		const { datatype } = this.props;
		const typeItem = datatype;
		if ((typeItem === "text") ||
			(typeItem === "number") ||
			(typeItem === "tel") ||
			(typeItem === "email") ||
			(typeItem === "password")
		) {
			return (
				<div className="row">
					<div className="form-group col-sm-12 col-md-6">
						<fieldset disabled>
							<label className="control-label" htmlFor="disabledInput">Тип поля</label>
							<input className="form-control" id="type" type="text" defaultValue={typeItem} disabled/>
						</fieldset>
					</div>
					<AddInput
						title="Наименование поля"
						index='1'
						name='title'
						placeholder="Input title"
						exportData={this.SaveOnChange}
					/>
					<AddInput
						title="Введите паттерн для валидации поля"
						index='2'
						name='regexp'
						placeholder="regexp"
						exportData={this.SaveOnChange}
					/>
					<AddInput
						title="Напишите сообщение об ошибке"
						index='3'
						name='error'
						placeholder="error message"
						exportData={this.SaveOnChange}
					/>
				</div>
			);
		}
		if ((typeItem === "texterea")) {
			
		}
	}

	SaveOnChange = (val, name) => {
		console.log('val: ', val);
		console.log('name: ', name);
		if (name === "title") {
			this.setState({ title: val })
		}
		if (name === "regexp") {
			this.setState({ regexp: val })
		}
		if (name === "title") {
			this.setState({ error: val })
		}
	}

	SaveSetting (e) {
		e.preventDefault();
		const { datatype, GetSettingItem } = this.props;
		let type = '';
		let inputType = '';
		if (
			(datatype === "text") ||
			(datatype === "number") ||
			(datatype === "tel") ||
			(datatype === "email") ||
			(datatype === "password")
		) {
			type = 'input';
			inputType = datatype;
		}
		const { title, regexp, error } = this.state;
		console.log(`type: ${type} inputType: ${inputType} title: ${title}`);
		const ArrySetting = {
			title: title,
			type: type,
			inputType: inputType,
			placeholder: '',
			regexp: regexp,
			error: error,
			maxlength: '',
			defaultvalue: '',
			options: []
		}
		const pushObj = GetSettingItem || (() => { });
		pushObj(ArrySetting);
	}

	render() {

		return (
			<form onSubmit={this.SaveSetting} >
				{this.GenerateItems()}
				<div className="col-sm-12 col-md-12 text-center">
					<button type="submit" className="btn btn-primary">Подтвердить</button>
				</div>
			</form>
		)
	}
}