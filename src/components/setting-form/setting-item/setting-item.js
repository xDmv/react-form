import React, { Component } from 'react';
import GenerateSettingItem from './generate-setting-item';

export default class SettingItem extends Component {
	constructor(props) {
		super(props);
		this.minId = 1;
		this.state = {
			itemselect: [
				{ id: 0, label: "Выбирите элимент для формы", value: "", subtype: "" },
				{ id: 1, label: "Однострочное поле (text)", value: "input", subtype: "text" },
				{ id: 2, label: "Однострочное поле только цифры (number)", value: "input", subtype: "number" },
				{ id: 3, label: "Однострочное поле номер телефона (tel)", value: "input", subtype: "tel" },
				{ id: 4, label: "Однострочное поле электронный адрес (email)", value: "input", subtype: "email" },
				{ id: 5, label: "Однострочное поле пароль (password)", value: "input", subtype: "password" },
				{ id: 6, label: "Однострочное поле дабавить файл (file)", value: "input", subtype: "file" },
				{ id: 7, label: "Многострочное поле", value: "texterea", subtype: "" },
				{ id: 8, label: "Поле выбора (select)", value: "select", subtype: "" },
				{ id: 9, label: "Поле выбора даты", value: "datapicker", subtype: "date" },
				{ id: 10, label: "Поле выбора веремени", value: "datapicker", subtype: "time" },
				{ id: 11, label: "Поле выбора даты и времени", value: "datapicker", subtype: "datetime-local" },
				{ id: 12, label: "Переключатели (radio)", value: "radio", subtype: "" },
				{ id: 13, label: "Флажки (checkbox)", value: "checkbox", subtype: "" },
			],
			options: [],
			typeselect: '',
			isShownSelect: true,
			InputType: false,
			TextereaType: false
		}

		this.SelectOptions = this.SelectOptions.bind(this);
	}

	SelectOptions(e) {
		let type = e.target.value;
		this.setState(
			{typeselect: type}
		);
	}

	GetSettingItem(array) {
		console.log('SettingItem array: ', array);
	}

	AddItem() {
		const { itemselect, typeselect } = this.state;
		let Items = itemselect;
		let optionsItems = Items.map((data, index) => {
			let type = data.value;
			let subtype = data.subtype
			return (
				<option
					key={index}
					id={data.id}
					value={ (subtype) ? subtype : type }
					label={data.label}>
						{data.label}
				</option>
			);
		});

		return (
			<div className="card border-secondary mb-3">
				<div className="card-header">
					<div className="form-group">
						<label htmlFor="exampleSelect1">Выберите тип элемента</label>
						<select
							className="form-control"
							id="exampleSelect1"
							onChange={this.SelectOptions
							}>
							{optionsItems}
						</select>
					</div>
					<GenerateSettingItem
						datatype={typeselect}
						GetSettingItem={this.GetSettingItem}
					/>
				</div>
			</div>
		);
	}

	render() {

		return this.AddItem();

		// return (
		// 	<form>
		// 		{ this.AddItem() }
		// 		{/* {isShownSelect && (
		// 		<select name="costum_element" value="" onChange={this.TypeSelect}>
		// 			{ default_options }
		// 		</select>
		// 		)}
		// 		<div>
		// 			{InputType && (<div>{this.SettingInput()}</div>)}
		// 			{TextereaType && (<div>{this.SettingTexterea()}</div>)}
		// 		</div> */}
		// 	</form>
		// );
	}
}