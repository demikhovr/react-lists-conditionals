import React from 'react';

const validation = ({textLength}) => {
	let validationMessage = 'Text long enough';

	if (textLength <= 5) {
		validationMessage = 'Text too short';
	}

	return (
		<div className="Validation">
			<p>
				{validationMessage}
			</p>
		</div>
	);
};

	export default validation;