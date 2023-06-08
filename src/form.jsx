import { useState } from "react";
import "./index.css";

/* Name
Email
Password
City from Dropdown
Gender from Radio
Hobbies from checkboxes
Rating from Slider
Radio -> 1-10 */

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    rating: 0,
  });

  const onClickFemale = () => {
    const maleSelc = document.getElementById("maleId");
    const femalSelc = document.getElementById("femaleId");
    const male = document.getElementById("radio1");

    male.checked = false;
    femalSelc.checked = true;
    maleSelc.checked = false;
  };
  const onClickMale = () => {
    const maleSelc = document.getElementById("maleId");
    const femalSelc = document.getElementById("femaleId");
    const female = document.getElementById("radio2");

    female.checked = false;
    femalSelc.checked = false;
    maleSelc.checked = true;
  };
  const onCheckBox1 = (ev) => {
    const ck1 = document.getElementById("checkBoxfirst");
    ck1.checked = ev.target.checked;
  };
  const onCheckBox2 = (ev) => {
    const ck2 = document.getElementById("checkBoxsecond");
    ck2.checked = ev.target.checked;
  };

  return (
    <>
      <main className="mainContainer">
        <div className="subContainer">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(ev) => setData({ name: ev.target.value })}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(ev) => setData({ email: ev.target.value })}
          />
          <label htmlFor="">Password.</label>
          <input
            type="password"
            onChange={(ev) => setData({ password: ev.target.value })}
          />
          <label htmlFor="city">Select City</label>
          <select
            name="city"
            onChange={(ev) => setData({ city: ev.target.value })}
            id="city"
          >
            <option>Bhopal</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
          </select>
          <label htmlFor="">Gender:</label>
          <div className="MF-options">
            <label htmlFor="">Male</label>
            <input id="radio1" type="radio" onChange={onClickMale} />
            <label htmlFor="">Female</label>
            <input id="radio2" type="radio" onChange={onClickFemale} />
          </div>
          <label htmlFor="">Hobbies:</label>
          <div className="MF-options">
            <label htmlFor="">Footbal</label>
            <input type="checkbox" onChange={onCheckBox1} />
            <label htmlFor="">Basketball</label>
            <input type="checkbox" onChange={onCheckBox2} />
          </div>
          <label htmlFor="">Rating between 1 to 10</label>
          <input
            type="range"
            min="0"
            max="10"
            value={data.rating}
            onChange={(ev) => setData({ rating: ev.target.value })}
          />
        </div>

        <img
          src="https://daveceddia.com/images/useState-hook-twitter.png"
          alt=""
          width="23%"
          height="205px"
        />

        <div className="subContainer">
          <label htmlFor="">Name</label>
          <input type="text" value={data.name} />
          <label htmlFor="">Email</label>
          <input type="email" value={data.email} />
          <label htmlFor="">Password.</label>
          <input type="password" value={data.password} />
          <label htmlFor="city">Select City</label>
          <select name="city" value={data.city} id="city">
            <option>Bhopal</option>
            <option>Hyderabad</option>
            <option>Delhi</option>
          </select>
          <label htmlFor="">Gender:</label>
          <div className="MF-options">
            <label htmlFor="">Male</label>
            <input id="maleId" type="radio" />
            <label htmlFor="">Female</label>
            <input id="femaleId" type="radio" />
          </div>
          <label htmlFor="">Hobbies:</label>
          <div className="MF-options">
            <label htmlFor="">Footbal</label>
            <input type="checkbox" id="checkBoxfirst" />
            <label htmlFor="">Basketball</label>
            <input type="checkbox" id="checkBoxsecond" />
          </div>
          <label htmlFor="">Rating between 1 to 10</label>
          <input type="range" min="0" max="10" value={data.rating} />
        </div>
      </main>
    </>
  );
}
export default Form;
