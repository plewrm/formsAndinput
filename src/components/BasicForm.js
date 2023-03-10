import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: FNameInputError,
    valueChangeHandler: FNameChangeHandler,
    inputBlurHandler: FNameBlurHandler,
    reset:resetFNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: LNameInputError,
    valueChangeHandler: LNameChangeHandler,
    inputBlurHandler: LNameBlurHandler,
    reset:resetLNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset:resetEmailInput,
  } = useInput(isEmail);

  let formIsValid= false;

  if(enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid){
    formIsValid= true;
  }

  const formSubmissionHandler =(event)=>{
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log("First Name",enteredFName);
    console.log("Last Name",enteredLName);
    console.log("Email Address",enteredEmail);
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  }
  const fnameInputClasses = FNameInputError
    ? "form-control invalid"
    : "form-control ";

    const lnameInputClasses = LNameInputError
    ? "form-control invalid"
    : "form-control ";

    const emailInputClasses = EmailInputError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fnameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFName}
            onChange={FNameChangeHandler}
            onBlur={FNameBlurHandler}
          />
          {FNameInputError && <p className="error-text">Please enter first name.</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLName}
            onChange={LNameChangeHandler}
            onBlur={LNameBlurHandler}
          />
          {LNameInputError && <p className="error-text">Please enter last name.</p>}

        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
        />
          {EmailInputError && <p className="error-text">Please enter valid email.</p>}

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
