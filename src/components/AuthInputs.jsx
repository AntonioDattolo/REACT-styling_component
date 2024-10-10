import { useState } from 'react';

import { styled } from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
// TAGGED TEMPLATES è possibile creare un componente in un altro componente con style già integrato

const Label = styled.label`
    display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:${({ invalid }) => invalid  ? '#f87171' : '#6b7280' } ;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ invalid }) => invalid ? '#fed2d2' : '#d1d5db' } ;
  color: ${({ invalid }) => invalid ? '#f87171' : '#374151' } ;
  border: 1px solid ${({ invalid }) => invalid ? '#f73f3f' : '#d1d5db' } ;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

`
const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  .&:hover {
    background-color: #f0920e;
  }

`

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
        <p>
          <Label 
            // className={`label ${emailNotValid ? 'invalid' : ''}`}
            $invalid={emailNotValid}
          >Email</Label>
          <Input
            type="email"
            // style={{
            //   backgroundColor : emailNotValid ? '#fed2d2' : '#d2d5db'
            //   // se emailNotValid è true, ovvero l'email inserita non è valida, applica lo style per il not valid
            //   // se invece è false, quindi l'email è valida applica il background per la validazione corretta
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
            $invalid={emailNotValid}
          />
        </p>
        <p>
          <Label 
            $invalid={passwordNotValid}

            // className={`label ${passwordNotValid ? 'invalid' : ''}`}
            // CON QUESTO APPROCCIO POSSO IMPOSTARE DINAMICAMENTE UNA CLASSE, AVENDONE SEMPRE COMUNQUE UNA DI BASE 'LABEL'
          >Password</Label>
          <Input
            type="password"
            // style={{
            //   backgroundColor : passwordNotValid ? '#fed2d2' : '#d2d5db'
            // }}
            // className={passwordNotValid ? 'invalid' : undefined}
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
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
        >Sign In</Button>
      </div>
    </div>
  );
}
