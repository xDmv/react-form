import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props) {
		super(props);
		this.minId = 100;
		this.Lable = '';
		this.state = {
			optionitems: [],
			isShownEdit: false,
			isSave: false,
			label: ''
		};

		this.onSave = this.onSave.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onButtonAdd = this.onButtonAdd.bind(this);
	}

	onSave() {
		this.setState((state) => {
			const item = this.createItem(this.Lable);
			if (state.optionitems) {
				return {
					isSave: true,
					isShownEdit: true,
					optionitems: [ item , ...state.optionitems ]
				}
			} else {
				return {
					isSave: true,
					isShownEdit: true,
					optionitems: [ item ]
				}
			}

		});
	}

	createItem(label) {
		return {
			id: ++this.minId,
			label,
		};
	}

	onChange(e) {
		this.Lable = e.target.value;
	}

	onEdit = (id)  => {

	}

	onDelete = (id)  => {
		
	}

	onAddItem() {
		return (
			<div className="form-group">
				<div className="input-group mb-3">
					<input
						key={++this.minId}
						id={this.minId}
						type="text"
						className="form-control"
						onChange={this.onChange}
					/>
					<div className="input-group-append">
						<button type="button" className="btn btn-success" onClick={this.onSave} >
							<i className="fa fa-save"></i>
						</button>
					</div>
				</div>
			</div>
		)
	}

	onShownItem() {
		const { optionitems } = this.state;
		let items = optionitems;
		console.log('opt items: ', items)
		let listOptions = items.map((data) => {
			return (
				<div key={++this.minId} className="form-group">
					<div className="input-group mb-3">
						<input
							key={++this.minId}
							id={this.minId}
							type="text"
							className="form-control"
							value = {data.label}
							disabled
						/>
						<div className="input-group-append">
							<button type="button" className="btn btn-secondary" onClick={this.onEdit} >
								<i className="fa fa-edit"></i>
							</button>
							<button type="button" className="btn btn-warning"onClick={this.onDelete} >
								<i className="fa fa-trash-o"></i>
							</button>
						</div>
					</div>
				</div>
			);
		})
		return listOptions;
	}

	onButtonAdd() {
		this.setState((state) => {
			return {
				isSave: false,
				isShownEdit: false
			}
		});
	}

	render() {
		//const { index, name, placeholder, onChange } = this.props;
		const { isShownEdit, isSave } = this.state;
		return (
			<div className="col-sm-12 col-md-12">
				<label className="control-label">Add options item</label>
				{this.onShownItem()}
				{!isShownEdit && this.onAddItem()}
				{isSave && (
					<button type="button" className="btn btn-primary"onClick={this.onButtonAdd} >
						<i className="fa fa-plus"> Еще добавить элимент выбора</i>
					</button>
				)}
			</div>
		)
	}
}