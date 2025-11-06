import React, {useState} from "react";
import { OTP_SIZE } from "./utils/constants";
import OtpBox from "./components/OtpBox"

function App() {

  const otpSize = OTP_SIZE;
  const initialInputArr = new Array(otpSize).fill("");

  const [validOtp, setValidOtp] = useState(initialInputArr);

  console.log("valid otp in parent ", validOtp);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-3xl mt-10">OTP Component</h1>
      <OtpBox inputArr={validOtp} setInputArr={setValidOtp}/>
    </div>
  )
}

export default App
