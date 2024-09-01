const student = {
    name: "Shilulu",
    rollNumber: "21311A0549",
    subject : "WT"
}
//destructuring of the object student : we can use obj properties and assign it to variables and use directly instead of dot notation

const {rollNumber : rNo} = student;

console.log(rNo);
console.log(student.rollNumber); //dot notation


//concept of destructuring in React :
/*
    function UserProfile({ name, age, location }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// Usage
<UserProfile name="John Doe" age={30} location="New York" />

*/