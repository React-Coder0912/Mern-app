import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid &&
          formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: '', isValid: false }
        },
        false
      );
    }
    setIsLoginMode(prev => !prev);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    /* Full screen center wrapper */
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      
      <Card className="
        w-full 
        max-w-sm 
        sm:max-w-md 
        bg-white 
        p-6 
        sm:p-8 
        rounded-2xl 
        shadow-xl
      ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {isLoginMode ? 'Welcome Back' : 'Create Account'}
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          {isLoginMode
            ? 'Login to continue'
            : 'Sign up to get started'}
        </p>

        <form onSubmit={authSubmitHandler} className="space-y-4">
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}

          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email."
            onInput={inputHandler}
          />

          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Minimum 5 characters."
            onInput={inputHandler}
          />

          <Button
            type="submit"
            disabled={!formState.isValid}
            className="w-full mt-2"
          >
            {isLoginMode ? 'LOGIN' : 'SIGN UP'}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        <Button
          inverse
          onClick={switchModeHandler}
          className="w-full text-sm"
        >
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </div>
  );
};

export default Auth;