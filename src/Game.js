import React from 'react';

export class Game extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            enteringNumber: true,
            enteredNumber: '',
            guessedNumber: '',
        }
    }
  
    setEnteredNumber(enteredNumber) {
        this.setState({ enteredNumber });
    }

    submitEnteredNumber() {
        this.setState({enteringNumber: false});
        // TODO: don't let this be empty string
    }

    setGuessedNumber(guessedNumber) {
        this.setState({ guessedNumber });
    }
  
    render() {
        const {enteringNumber, enteredNumber, guessedNumber} = this.state;

        const isGuessCorrect = guessedNumber.length === enteredNumber.length && guessedNumber.split('').reverse().join('') == enteredNumber;

        return (
            <div className="game">
                
                { enteringNumber && (
                    <div>
                        <h1>Guessing game</h1>

                        <h2>{ enteringNumber && 'Enter a number' }</h2>

                        <input type="text" onKeyUp={(event) => this.setEnteredNumber(event.target.value)} />

                        <button onClick={() => this.submitEnteredNumber()}></button>
                    </div>
                )}
                
                { !enteringNumber && (
                    <div>
                        <h2>{ !enteringNumber && 'Now enter it backwards' }</h2>

                        <input type="text" onKeyUp={(event) => this.setGuessedNumber(event.target.value)} />

                        <p>{isGuessCorrect ? 'Correct!' : 'Incorrect, try again'}</p>
                    </div>
                )}

            </div>
        );
    }

}
