import React from 'react';

const UserForm = (props) => {
	return(
		<div className="User-form">
			<h1>Do you know how many github repositories do you have?</h1>
			<form onSubmit={props.getUser}>
				<input type="text" name="username"/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;

