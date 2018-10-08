import React from "react";

const DisplayQuote = ({ simpsonQuote }) => {
  return (
    <div className="DisplayQuote">
      <h1>{simpsonQuote.character}</h1>
      <figure><img src= {simpsonQuote.image} alt={simpsonQuote.character}/></figure>
      <figcaption>
        <quote>{simpsonQuote.quote}</quote>
      </figcaption>
      {/* <img  src={employee.picture.medium}  alt="picture"  />
            <ul>
                <li>Gender : {employee.gender}</li>
                <li>
                    Name : {employee.name.title}  {employee.name.last}{' '}
                    {employee.name.first}
                </li>
                <li>E-mail : {employee.email}</li>
                <li>
                    Location : {employee.location.street},
                    {employee.location.postcode}{' '}{employee.location.city}
                </li>
            </ul> */}
    </div>
  );
};

export default DisplayQuote;
