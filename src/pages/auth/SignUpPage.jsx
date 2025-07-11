import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSignUpInput";
const SignUpPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form style={{ width: "450px" }} className="card p-5 mt-5 mb-5 shadow-lg">
        <h1>Join our Library Community!</h1>
        <hr />
        {signUpInputs.map((input, index) => (
          <CustomInput key={input.name} {...input} />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
