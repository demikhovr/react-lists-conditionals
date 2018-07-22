import React, {Component} from 'react';
import './App.css';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

class App extends Component {
	state = {
		text: ''
	};

	inputChangeHandler = (evt) => {
		this.setState({
			text: evt.target.value
		});
	};

	charDeleteHandler = (index) => {
		let text = [...this.state.text];
		text.splice(index, 1);
		this.setState({text: text.join('')});
	};

	render() {
		const {text} = this.state;
		const textLength = text.length;

		let outputLength = textLength
			? textLength === 1 ? `${textLength} letter` : `${textLength} letters`
			: 'No letters';

		const charList = text.split('').map((char, i) => {
			return <Char clicked={() => this.charDeleteHandler(i)} key={i} char={char}/>;
		});

		return (
			<div className="App">
				<input type="text" onChange={this.inputChangeHandler} value={text}/>
				<p className="output">{outputLength}</p>
				<Validation textLength={textLength}/>
				{charList}
			</div>
		);

	}
}

export default App;
