import React from 'react';

const char = ({char, clicked}) => {
	const styles = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black',
		cursor: 'pointer'
	};

	return (
		<div onClick={clicked}
				 className="Char"
				 style={styles}>
			{char}
		</div>
	);
};

export default char;