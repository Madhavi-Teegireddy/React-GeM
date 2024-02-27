
import React, { useState } from 'react';

const Otp = () => {
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const expectedOtp = '1234'

    const handleChange = (e, index) => {
        const value = e.target.value;

        const updatedOtpValues = [...otpValues];
        updatedOtpValues[index] = value;
        setOtpValues(updatedOtpValues);

        if (value && index < otpValues.length - 1) {
            document.getElementById(`otp-${index + 2}`).focus();
        }

        if (index === otpValues.length - 1 && value) {
            const enteredOtp = updatedOtpValues.join('');
            if (enteredOtp === expectedOtp) {
                alert('Success!');
            } else {
                alert('Incorrect OTP. Please try again.');
                setOtpValues(['', '', '', '']);
                document.getElementById(`otp-1`).focus();
            }
        }
    };


    return (
        <div>
            <form>
                {otpValues.map((value, index) => (
                    <input style={{width:"50px",  borderBottom:"1px solid black"}}
                        key={index}
                        id={`otp-${index + 1}`}
                        className="otp"
                        type="text"
                        value={otpValues.value}
                        onChange={(e) => handleChange(e,index)}
                        maxLength={1}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Otp;
