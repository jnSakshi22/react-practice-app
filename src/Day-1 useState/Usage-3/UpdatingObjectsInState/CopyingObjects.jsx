import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  // These input fields don’t work because the onChange handlers mutate the state:

  //   function handleFirstNameChange(e) {
  //     person.firstName = e.target.value;
  //   }

  //   function handleLastNameChange(e) {
  //     person.lastName = e.target.value;
  //   }

  //   function handleEmailChange(e) {
  //     person.email = e.target.value;
  //   }

  //... spread syntax is “shallow”—it only copies things one level deep.

  //   const handleFirstNameChange = (e) => {
  //     setPerson({
  //       ...person, // Copy the old fields
  //       firstName: e.target.value, // But override this one
  //     });
  //   };
  //   const handleLastNameChange = (e) => {
  //     setPerson({
  //       ...person, // Copy the old fields
  //       lastName: e.target.value, // But override this one
  //     });
  //   };
  //   const handleEmailChange = (e) => {
  //     setPerson({
  //       ...person, // Copy the old fields
  //       email: e.target.value, // But override this one
  //     });
  //   };

  //single event handler for multiple fields

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setPerson({
      ...person,
      [name]: value,
    });

    console.log({ name, value });
  };

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={onInputChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={onInputChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={onInputChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default Form;
