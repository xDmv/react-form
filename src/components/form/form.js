import React, { Component } from 'react';
import Input from './child-components/input';
import Textarea from './child-components/textarea';

export default class Form extends Component {

	state = {
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
				inputType: "textarea",
				id: "3",
				name: "textarea",
				value: "textarea",
				rows: "5",
				cols: "25",
				maxlength: "2000",
				placeholder: "Input textarea",
				error: "Incorrect First Name!"
			}
		]
	}

	GenerateForm() {
		let array = this.state.arrform;
		const todoItems = array
			.map((arrform, index) => {
				if (arrform.type === "input") {
					return(
						<Input
							key={index}
							type={arrform.inputType}
							title= {arrform.title} 
							name= {arrform.name}
							placeholder={arrform.placeholder}
							error={arrform.error}
						/>
					);
				}
				if (arrform.type === "textarea") {
					return(
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