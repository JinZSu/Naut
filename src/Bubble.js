import React from "react";

function reverse(str){
  var reversed = "";
  for (let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}


function getCharCounts(str) {
  var letters = {};
  str.replace(/\S/g, function(l){letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);});
  return letters;
}

const Bubble = (props) => {

  var letters = getCharCounts(props.inputstring);
  const pairs = Object.keys(letters).map((key, index) =>
    <div key={index}>{key}: {letters[key]}</div>
  );

  console.log(pairs);

  return(
    <div className="bubble-container">
      <p>string: {props.inputstring}</p>
      <p>reversed string: {reverse(props.inputstring)}</p>
      <div>unique char count:</div>
      {pairs}
		</div>
  );
}

export default Bubble;