/*

Deliverables
When our application loads, make a GET request to /toys to fetch the toy array. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard components on the page.

-Whenn the app loads, i need to make a GET request and load all the toys on the page
App
    initialize useEffect so i can make a fetch Get request
    Pass in toys into ToyContainer as a prop
ToyContainer
    map toys array and make a ToyCard for each toy
    pass in toy=> toycard as prop
ToyCard
    deconstruct toy att and apply where needed

When the ToyForm is submitted, make a POST request to /toys to save a new toy to the server. Using the ideas of controlled form and inverse data flow, think about how to render a new ToyCard for the toy that you created.
-I need to be able to add a new toy on the page
ToyForm
    make it a controlled form by initializing state 
    add a value = state
    add event handler onChange = value
    add event hanlder onSubmit to form
    create function to handle submit
        create a new toyObj to match toys in the array
App
    write a function that will make a POST request to add toy to array
    pass function in as props to ToyFirn
ToyFrom
    invoke the function in the handleSubmit function and pass the newToy object in


When the Donate to Goodwill button is clicked, make a DELETE request to /toys/:id with the ID of the toy that was clicked to delete the toy from the server. The ToyCard that you clicked on should also be removed from the DOM.
When i click on the Donate button, the toy should delete from the server

ToyCard
    add event handler onClick to handleDeleteClick

When the like button is clicked, make a PATCH request to /toys/:id with the id of the toy that was clicked, along with the new number of likes (this should be sent in the body of the PATCH request, as a object: { likes: 10 }), to update the toy on the server. Clicking on the button should also increase the number of likes on the DOM.

When i click ont he like button, it should update the nymber of likes

ToyCard
    add event hanlder on like button

App
write a fetch PATCH reqest

*/