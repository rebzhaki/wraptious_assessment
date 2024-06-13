/*
    Event delegation is "delegating" the handling of a certain event to a different element which 
    is the parent element instead of the actual element.This helps in writing cleaner code and have 
    less event listeners with similar implementation.
*/
<div>
  <button>Click Me!</button>
</div>;

const div = document.getElementsByTagName("div")[0];

div.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button has been clicked");
  }
});
