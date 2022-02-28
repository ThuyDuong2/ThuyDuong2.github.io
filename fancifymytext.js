//make the text become bigger
function Bigger() {
  alert("Text Become Bigger!");
  document.getElementById("text").style.fontSize = "24pt";
}
// function for FancyShmancy and BorringBetty radio button
function fancyboringHandler() {

  if (document.getElementById("fancy").checked) {
    alert("FancyShmancy Text!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";

  } else {
    alert("BoringBetty Text!");
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "10pt";
  }
}
//upper case the text and a suffix of "-Moo" to the last word of the senctence
function moo() {
  alert("Upper Case Text!, and Add a Suffix of -Moo");
  document.getElementById("text").style.textTransform = "uppercase";
  var parts = document.getElementById("text").value.split(".");
  document.getElementById("text").value = parts.join("-Moo");
}
