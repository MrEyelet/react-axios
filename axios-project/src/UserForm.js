import React, {Component} from 'react';

class UserForm extends Component {
	render(){
		return(
			<div className="User-form">
				<form>
					<input type="text" name="username"/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default UserForm;

