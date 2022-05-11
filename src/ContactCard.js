import React, { useState } from "react";

// taking the data from the parent component and placing incide the contactcard component
const ContactCard = (porps) => {
  // using the states to change the stuff on the UI of the page
  //   using the structural assignment
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={porps.avatarUrl} alt="profile-image"></img>
      <div className="user-details">
        <p>Name : {porps.name}</p>
        <p>Email : {porps.email}</p>
        <button
          onClick={() => {
            setShowAge(!showAge);
          }}
        >
          Show Age
        </button>
        {showAge ? <p>Age : {porps.age}</p> : null}
        {/* trick */}
        {/* showAge && <p>Age : 25 </p> */}
      </div>
    </div>
  );
};
export default ContactCard;
