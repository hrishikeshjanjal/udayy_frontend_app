import React, { useState } from "react";
import "../assets/Display.css";

import { useHistory, Route, Redirect, Link } from "react-router-dom";
function Display() {
  const history = useHistory();
  const [textboxOne, setTextboxOne] = useState("");
  const [textboxTwo, setTextboxTwo] = useState("");

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  const visitUrl1 = (e) => {
    if (validURL(textboxOne)) {
      console.log("valid url 1");
      window.open(`${textboxOne}`);
      document.getElementById("view1").style.visibility = "visible";
    }
  };
  const visitUrl2 = (e) => {
    if (validURL(textboxTwo)) {
      console.log("valid url 2");
      window.open(`${textboxTwo}`);
    }
  };

  return (
    <div className="display">
      <div className="displayTextbox">
        <div className="display_textbox1">
          <label>Enter Url to visit</label>
          <input
            type="url"
            value={textboxOne}
            onChange={(e) => {
              setTextboxOne(e.target.value);
            }}
          />
          <button onClick={visitUrl1}>Visit</button>
          {/* <button onClick={visitUrl1}>Visit</button>*/}
        </div>
        <div className="display_textbox2">
          <label>Enter Url to Visit</label>
          <input
            type="url"
            value={textboxTwo}
            onChange={(e) => {
              setTextboxTwo(e.target.value);
            }}
          />
          <button onClick={() => window.open(`${textboxOne}`)}>Visit</button>
        </div>
      </div>
      <br />
      <div className="display_Content">
        <div id="view1">Content1</div>
        <div id="view2">Content2</div>
      </div>
    </div>
  );
}

export default Display;
