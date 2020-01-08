import React, { Component } from 'react';
import InputDisabled from './input-disabled/';

export default class Options extends Component {

	constructor(props) {
		super(props);
		this.minId = 100;
		this.editid = 1;
		this.Lable = '';
		this.state = {
			optionitems: [],
			isShownAdd: false,
			isShownEdit: false,
			isShownItem: false,
			isSave: true,
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
					isShownAdd: false,
					isShownItem: true,
					optionitems: [ item , ...state.optionitems ]
				}
			} else {
				return {
					isSave: true,
					isShownItem: true,
					isShownAdd: false,
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

	EditSave = (id) => {
		console.log(`__ id: ${id}`);
		this.setState(({ optionitems }) => {
			const item = this.createItem(this.Lable);
			const idx = optionitems.findIndex((element) => element.id === id);
			const before = optionitems.slice(0, idx);
			const after = optionitems.slice(idx + 1);
			const newArray = [...before, item,...after];
			return {
				optionitems: newArray
			}
		});
	}

	onEdit = (id) => {
		console.log('onEdit id :: == ', id);
		this.setState((state) => {
			return {
				isShownItem: false,
				isShownEdit: true
			}
		});
		this.editid = id;
		this.EditShown();
	}

	EditShown() {
		const { optionitems } = this.state;
		let items = optionitems;
		let listOptions2 = items.map((data) => {
			console.log(`this.editid == ${this.editid}  data.id == ${data.id}`);
			if(this.editid === data.id) {
				return (
					<div key={101+data.id} className="form-group">
						<div className="input-group mb-3">
							<input
								key={data.id}
								id={data.id}
								type="text"
								value={ data.label }
								className="form-control"
								
							/>
							<div className="input-group-append">
								<button type="button" className="btn btn-success"  >
									<i className="fa fa-save"></i>
								</button>
							</div>
						</div>
					</div>
				);
			}
			if(this.editid !== data.id) {
				return (
					<div key={++this.minId} className="form-group">
						<InputDisabled 
							id={data.id}
							value={data.label}
							disabled='true'
							onEdit={ () => this.onEdit(data.id) }
							onDelete={ () => this.onDelete(data.id) }
						/>
					</div>
				);
			}

		})
		return listOptions2;
	}

	onDelete(id){
		this.setState(({ optionitems }) => {
			const idx = optionitems.findIndex((element) => element.id === id);
			const before = optionitems.slice(0, idx);
			const after = optionitems.slice(idx + 1);
			const newArray = [...before, ...after];
			return {
				optionitems: newArray
			}
		});
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
						<button type="button" className="btn btn-success" onClick={ this.onSave }>
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
					<InputDisabled 
						id={ data.id }
						value={ data.label }
						disabled='true'
						onEdit={ () => this.onEdit(data.id) }
						onDelete={ () => this.onDelete(data.id) }
					/>
				</div>
			);
		})
		return listOptions;
	}

	onButtonAdd() {
		this.setState((state) => {
			return {
				isSave: false,
				isShownEdit: false,
				isShownItem: true,
				isShownAdd: true
			}
		});
	}

	render() {
		//const { index, name, placeholder, onChange } = this.props;
		const { isShownEdit, isSave, isShownAdd, isShownItem } = this.state;
		console.log(`isShownEdit: ${isShownEdit} isSave: ${isSave} isShownAdd: ${isShownAdd} isShownItem: ${isShownItem}`);
		return (
			<div className="col-sm-12 col-md-12">
				<label className="control-label"> Список элиментов выбора: </label>
				{ isShownItem && ( this.onShownItem() ) }
				{ isShownEdit && (this.EditShown()) }
				{ isShownAdd && ( this.onAddItem() ) }
				{ isSave &&
					(
					<button type="button" className="btn btn-primary m-2"onClick={this.onButtonAdd} >
						<i className="fa fa-plus"> Еще добавить элимент выбора</i>
					</button>
					)
				}
			</div>
		)
	}
}