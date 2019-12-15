import React, { Component } from 'react';

export default class SettingItem extends Component {

	state = {
		itemsselect: [
			{ id: 1, label: "Однострочное поле", value: "input" },
			{ id: 2, label: "Многострочное поле", value: "texterea" },
			{ id: 3, label: "Поле выбора", value: "select" },
			{ id: 4, label: "Поле выбора даты или времени", value: "datapicker" },
			{ id: 5, label: "Поле rediobox", value: "rediobox" },
			{ id: 6, label: "Поле checkbox", value: "checkbox" }
		],
		setting: [
			{
				"input": ['text', 'number', 'password', 'tel', 'email', 'file'],
				"texterea": "text",
				"select": "item",
				"datapicker": ['date', 'time', 'datetime'],
				"rediobox": "title",
				"checkbox": "title"
			}
		],
		isShownSelect: true,
		InputType: false,
		TextereaType: false
	}

	TypeSelect = (e) => {
		console.log("value select: ", e.target.value);
		console.log("setting select: ", this.state.setting[0][e.target.value]);
		if (e.target.value === "") {
			return
		} else {
			this.setState({
				isShownSelect: false
			})
		}
		if (e.target.value === "input") {
			this.setState({
				InputType: true
			})
		}
		if (e.target.value === "texterea") {
			this.setState({
				TextereaType: true
			})
		}
		if (e.target.value === "select") {

		}
		if (e.target.value === "datapicker") {

		}
		if (e.target.value === "rediobox") {

		}
		if (e.target.value === "checkbox") {
		}
	}

	SettingInput(){
		return (
			<div onChange={this.setGender.bind(this)}>
				<button type="radio" name='file'>file</button>
				<input type="radio" name="text" value="text" /> String
				<input type="radio" name="password" value="password" /> Password
				<input type="radio" name="tel" value="tel" /> Phone number
				<input type="radio" name="email" value="email" /> Email
				<input type="radio" name="number" value="number" /> Number
			</div>
		);
	}
	setGender(event) {
		console.log(event.target.value);
	}

	SaveElement() {
		//console.log('array element: ', e);
		console.log('form: ', document.getElementById('title').value);
		//e.preventDefault();
		// let form = document.createElement('form');
		
		
	}

	SettingSelect = () => {
		return (
			<form id="forms" onSubmit={this.SaveElement}>
				<p>Заголовок элимента: <input id="title" type="text" name="title" placeholder="Title"/></p>
				<p>Ширина поля: <input id="cols" type="number" name="cols" placeholder="5" /></p>
				<p>Высота поля: <input id="rows" type="number" name="rows"  placeholder="5" /></p>
				<p>Максимальное количество символов: <input type="number" name="maxlength" min='1000' max='4000'/></p>
				<button onClick={console.log('title', document.getElementById('title').value)}>Сохранить</button>
			</form>
		)
	}

	SettingTexterea = () => {
		return (
			<form id="forms">
				<p>Заголовок элимента: <input type="text" id="title" name="title"/></p>
				<p>Ширина поля: <input type="number" id="cols" name="cols" /></p>
				<p>Высота поля: <input type="number" id="rows" name="rows"  /></p>
				<p>Максимальное количество символов: <input type="number" name="maxlength" min='100' /></p>
				<button onClick={console.log('title')}>Сохранить</button>
			</form>
		)
	}

	// CreateSelect() {
	// 	let select = [];
	// 	this.state.itemsselect.map(
	// 		(data) => { select.push(<option key={data.id} value={data.value} >{data.label}</option>) }
	// 	);
	// 	return select;
	// }

	render() {
		let default_options = (<option key="e12" value="">Выбирите элимент для формы</option>);
		const { isShownSelect, InputType, TextereaType } = this.state
		return (
			<div>
				{isShownSelect && (
				<select name="costum_element" value="" onChange={this.TypeSelect}>
					{ default_options }
					{/* { this.CreateSelect() } */}
				</select>
				)}
				<div>
					{InputType && (<div>{this.SettingInput()}</div>)}
					{TextereaType && (<div>{this.SettingTexterea()}</div>)}
				</div>
			</div>
		);
	}
}