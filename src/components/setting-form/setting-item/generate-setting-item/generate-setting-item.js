import React, { Component } from 'react';
import AddInput from '../../add-input';
import Options from '../../add-options';

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
		this.onCancel = this.onCancel.bind(this);
	}

	GenerateItems() {
		const { datatype } = this.props;
		const typeItem = datatype;
		if ((typeItem === "text") ||
			(typeItem === "tel") ||
			(typeItem === "email") ||
			(typeItem === "password") ||
			(typeItem === "file") ||
			(typeItem === "date") ||
			(typeItem === "time") ||
			(typeItem === "datetime-local")
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
					<div className="col-sm-12 col-md-12 text-center">
						<button type="submit" className="btn btn-primary">Сохранить</button>
						<button type="button" className="btn btn-secondary ml-2" onClick={this.onCancel} >Отмена</button>
					</div>
				</div>
			);
		}
		if ((typeItem === "number") ||
			(typeItem === "texterea")
		) {
			return (
				<div className="row">
					<div className="form-group col-sm-12 col-md-6">
						<fieldset disabled>
							<label className="control-label" htmlFor="disabledInput">Тип поля</label>
							<input className="form-control" id="type" type="text" defaultValue={typeItem} disabled />
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
					<AddInput
						title="Максимальное количество символов"
						index='4'
						name='maxlength'
						placeholder="2000"
						exportData={this.SaveOnChange}
					/>
					<div className="col-sm-12 col-md-12 text-center">
						<button type="submit" className="btn btn-primary">Сохранить</button>
						<button type="button" className="btn btn-secondary ml-2" onClick={this.onCancel} >Отмена</button>
					</div>
				</div>
			);
		}
		if ((typeItem === "select") ||
			(typeItem === "radio") ||
			(typeItem === "checkbox")
		) { 
			return (
				<div className="row">
					<div className="form-group col-sm-12 col-md-6">
						<fieldset disabled>
							<label className="control-label" htmlFor="disabledInput">Тип поля</label>
							<input key={typeItem} className="form-control" id="type" type="text" defaultValue={typeItem} disabled />
						</fieldset>
					</div>
					<AddInput
						title="Наименование поля"
						index='1'
						name='title'
						placeholder="Input title"
						exportData={this.SaveOnChange}
					/>
					<Options
						index='2'
						Getarray={this.GetOptions}
					/>
					<div className="col-sm-12 col-md-12 text-center">
						<button type="submit" className="btn btn-primary">Сохранить</button>
						<button type="button" className="btn btn-secondary ml-2" onClick={this.onCancel} >Отмена</button>
					</div>
				</div>
			)
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

	GetOptions(array) {
		console.log('array options: ', array);
		
	}

	SaveSetting (e) {
		e.preventDefault();
		const { datatype, GetSettingItem } = this.props;
		let type = datatype;
		let inputType = '';
		if (
			(datatype === "text") ||
			(datatype === "number") ||
			(datatype === "tel") ||
			(datatype === "email") ||
			(datatype === "password") ||
			(datatype === "file") 
		) {
			type = 'input';
			inputType = datatype;
		}
		if (
			(datatype === "date") ||
			(datatype === "time") ||
			(datatype === "datetime-local")
		) {
			type = 'datapicker';
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

	onCancel() {
		const { Cancel } = this.props;
		const clear = Cancel || (() => { });
		clear();
	}

	render() {

		return (
			<form onSubmit={this.SaveSetting} >
				{this.GenerateItems()}
			</form>
		)
	}
}