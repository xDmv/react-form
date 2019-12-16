import React, { Component } from 'react';
import Input from './child-components/input';
import Textarea from './child-components/textarea';
import Select from './child-components/select';


export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrform: [
				{
					title: "Email",
					type: "input",
					inputType: "email",
					id: "email",
					name: "email",
					value: "dix@gmail.com",
					onChange: "",
					placeholder: "Input email",
					regexp: /^[\w-\.+]+@[\w-]+\.[a-z]{2,4}(\.[a-z]{2,4})?(\.[a-z]{2,4})?$/i,
					error: "Incorrect E-mail"
				},
				{
					title: "First Name",
					type: "input",
					inputType: "text",
					id: "2",
					name: "text",
					value: "Ditrix",
					onChange: "",
					regexp: /\S{4, 48}/,
					placeholder: "Input text",
					error: "Incorrect First Name!"
				},
				{
					title: "List Group",
					type: "textarea",
					id: "3",
					name: "textarea",
					value: "textarea",
					rows: "5",
					cols: "25",
					maxlength: "2000",
					placeholder: "Input textarea",
					error: "Incorrect text!"
				},
				{
					title: "Выбирите пол",
					type: "select",
					id: "4",
					name: "select",
					defaultvalue: "Мужской",
					options: [
						{ option: "Мужской", value: "male" },
						{ option: "Женский", value: "female" },
						{ option: "Другой", value: "other" }
					]
				},
				{
					title: "Выбирите date",
					type: "datapicker",
					subtype: "date",
					inputType: "datetime-local",
					id: "5",
					name: "datapicker",
					value: '20.05.2015',
					mindate: '',
					maxdate: '',
					dateFormat: "DD.MM.YYYY"
				}
			],
			exportArray: [],
			editArray: ""
		}
		this.handleInput = this.handleInput.bind(this);
		this.expArray = [];
	}

	handleInput(e) {
		console.log(e)
		let value = e.event.target.value;
		let name = e.event.target.name;
		let jsonItem = {
			type: name,
			value: value
		};
		this.setState(({ exportArray }) => {
				const arrA = [
					...exportArray,
					jsonItem
				];
				return {
					exportArray: arrA
				}
			}
		);
	}

	SaveForm = (e) => {
		e.preventDefault();
		const { exportArray } = this.state;
		console.log('exportArray :== ', JSON.stringify(exportArray));
	}

	GenerateForm() {
		let array = this.state.arrform;
		const ItemsForm = array.map((arrform, index) => {
				if (arrform.type === "input") {
					return(
						<Input
							key={index}
							id={index}
							type={arrform.inputType}
							title= {arrform.title} 
							name= {arrform.name}
							placeholder={arrform.placeholder}
							regexp={arrform.regexp}
							error={arrform.error}
							onChange={this.handleInput}
						/>
					);
				}
				if (arrform.type === "textarea") {
					return (
						<Textarea
							key={index}
							type={arrform.inputType}
							title= {arrform.title} 
							name= {arrform.name}
							placeholder={arrform.placeholder}
							rows={arrform.rows}
							cols={arrform.cols}
							maxlength={arrform.maxlength}
							error={arrform.error}
						/>
					);
				}
				if (arrform.type === "select") {
					return (
						<Select
							key={index}
							title={arrform.title}
							name={arrform.name}
							options={arrform.options}
							defaultvalue={arrform.defaultvalue}
							onChange={onchange = (event) => { this.handleInput({event})}}
						/>
					);
				}
				if (arrform.type === "radio") { }
				if (arrform.type === "checkbox") { }
				if (arrform.type === "datapicker") {
					return (
						<Input
						key={index}
						type={arrform.subtype}
						title= {arrform.title} 
						name= {arrform.name}
						placeholder={arrform.placeholder}
						error={arrform.error}
						onChange={onchange = (event) => { this.handleInput({ event })}}
					/>
					);
				}
			}
		);
		console.log('ItemsForm: ', ItemsForm)
		return ItemsForm;
	}

	render() {
		console.log();
		return (
			<div>
				<h1>Generate Form</h1>
				<form onSubmit={this.SaveForm}>
					<fieldset>
					{ this.GenerateForm() }
					</fieldset>
					<button className="btn btn-success" type="submit">Отправить</button>
				</form>
			</div>
		);
	}
}