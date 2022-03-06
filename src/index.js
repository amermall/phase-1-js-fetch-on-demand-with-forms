const init = () => {
  // 1. In our case, we want to add an event listener to the form element. We would first target the DOM element we want:
  const inputForm = document.querySelector('form');
  
  // 2. Event listeners require two arguments: the type of event, a string, and the listener, a callback function. In our case, we'll want to pass in 'submit' as the type. For the listener, we need to provide a callback function that will be called to 'handle' the event.
  inputForm.addEventListener('submit', (event) => {
    // 3. At this point, the form will still refresh automatically, as we haven't done anything to override that yet. The event object that gets passed in to our callback contains a particular method we need in order to override our form's behavior — preventDefault().
    event.preventDefault();
    // console.log(event);

    // 4. To get the value from our event object, we first want to access event.target (Links to an external site.). event.target returns the DOM element targeted by our event, a <form> in our case.
    // => event.target
    // => console.log(event.target);
    // 5. event.target has a property, children, that returns an HTMLCollection (Links to an external site.) containing all the nested elements of the event.target element.
    // => console.log(event.target.children);
    // Looking at the form, we can see we want to access the second element:
    // So we access this element via its index:
    // => console.log(event.target.children[1]);
    // 6. And to get the input value, we use the value attribute
    // => console.log(event.target.children[1].value);

    // 7. Instead of 4 through 6, We can access input value directly...
    const input = document.querySelector('input#searchByID');
    console.log(input.value);

    // 8. Fetch Data Based on User Input
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      // 9. Display Fetched Data on the Page
      // ===================================
      // - We've captured some user input and used it to customize a fetch request to our JSON server. The final step in our code-along is to display some of the retrieved data on the page. In the HTML, we have a section element with an id, "movieDetails", that contains some filler content.
      // - Let's replace Title and Summary with data we retrieved from our server. To do this, we'll work inside the second then of our fetch request. First, we'll access the DOM and store the two elements in JavaScript:
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      // 10. Next, we want to change the contents of our title and summary elements based on the retrieved data. We can do this by setting their innerText values to the appropriate values in our data:
      // console.log(data);
      title.innerText = data.title;
      summary.innerText = data.summary;
    });




  });
}

document.addEventListener('DOMContentLoaded', init);
// We want to make sure the JavaScript we write executes when the DOM is fully loaded. Any code related to DOM manipulation should either go in init or in a function called within init.