import React from 'react';
import * as U from '../TuxComponents/UniversalComponents';
import * as L from '../TuxComponents/LoginComponents';

const EmailForm = ({ errors, values, handleChange, touched }) => {
  return (
    <>
      <U.FlexBox>
        <U.FlexBox>
          <L.TuxFlower src="/images/tuxFlower.png"></L.TuxFlower>
          <L.LoginBox flexStart>
            <U.Heading1 margin50>Enter an Email</U.Heading1>
            <U.Normal eighteen>
              We'll use this email to set up your account.
            </U.Normal>
            <U.Normal semiBold>Email Address</U.Normal>
            <U.SmallInput
              type="text"
              autoComplete="off"
              id="email"
              value={values.email}
              name="email"
              onChange={handleChange}
            ></U.SmallInput>
            {errors.email && <div>{errors.email}</div>}

            <U.WideBtn
              extraWide
              disabled={
                !errors.email && values.email && values.email.length > 0
                  ? false
                  : true
              }
              id="continue"
              name="continue"
              value={values.continue}
              onClick={handleChange}
            >
              Continue
            </U.WideBtn>
          </L.LoginBox>
        </U.FlexBox>
      </U.FlexBox>
      <U.FlexBox login>
        <U.Normal alignRight>Have an Account?&nbsp;</U.Normal>
        <U.LinkTo to="/login">Log In</U.LinkTo>
      </U.FlexBox>
    </>
  );
};

export default EmailForm;
