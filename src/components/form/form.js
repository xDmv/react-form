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
					error: "Incorrect First Name!"
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
					title: "Выбирите пол",
					type: "datapicker",
					inputType: "date",
					id: "5",
					name: "datapicker",
					value: '20.05.2015',
					mindate: '',
					maxdate: '',
					dateFormat: "DD.MM.YYYY"
				}
			],
			exportArray: []
		}
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		console.log(e)
		let value = e.event.target.value;
		let name = e.event.target.name;
		console.log(`name: ${name} value: ${value}`)
		// validation:
	// this.setState( prevState => ({ newUser : 
	// 	 {...prevState.newUser, [name]: value
	// 	 }
	//    }), () => console.log(this.state.newUser))
	}

	GenerateForm() {
		let array = this.state.arrform;
		const todoItems = array.map((arrform, index) => {
				if (arrform.type === "input") {
					return(
						<Input
							key={index}
							type={arrform.inputType}
							title= {arrform.title} 
							name= {arrform.name}
							placeholder={arrform.placeholder}
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
						<p key={index}>DatePicker</p>
					);
				}
			}
		);
		console.log('todoItems', todoItems)
		return todoItems;
	}

	render() {
		return (
			<div>
				<h1>Generate Form</h1>
				{ this.GenerateForm() }
			</div>
		);
	}
}