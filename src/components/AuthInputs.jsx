import { useState } from 'react';

import { styled } from 'styled-components';

import Button from './BUTTON.JSX';

import Input from './Input.jsx';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
// TAGGED TEMPLATES è possibile creare un componente in un altro componente con style già integrato




export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>

        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          // style={{
          //   backgroundColor : emailNotValid ? '#fed2d2' : '#d2d5db'
          //   // se emailNotValid è true, ovvero l'email inserita non è valida, applica lo style per il not valid
          //   // se invece è false, quindi l'email è valida applica il background per la validazione corretta
          // }}
          // className={emailNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          // style={{
          //   backgroundColor : passwordNotValid ? '#fed2d2' : '#d2d5db'
          // }}
          // className={passwordNotValid ? 'invalid' : undefined}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />

      </ControlContainer>
      <div className="actions">
        <button
          type="button"
          className="text-button"
        >
          Create a new account
        </button>
        <Button
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
