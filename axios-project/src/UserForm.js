import React from 'react';

const UserForm = (props) => {
	return(
		<div className="User-form">
			<form onSubmit={props.getUser}>
				<input type="text" name="username"/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;

