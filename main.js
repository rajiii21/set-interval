// "Robin, a  small boy from Wonderland, loves to eat pizza. One morning he picks up his mother's phone and orders pizza using the PizzaHub app. Robin selects his favorite cheese barbeque pizza and press the order button.

// The PizzaHub app registers the order and informs Robin that it will notify him when the pizza is ready and on the way. Robin, the happy boy, waits for a while and finally gets a notification confirming that the pizza is on its way!                So, if we break down the story, the sequence of events goes like this:


// Robin orders the pizza
// The app notes down the order
// PizzaHub prepares the pizza, and it is ready after a while.
// The app notifies Robin, confirming the pizza is on the way.
// The mechanism of notifying Robin about the pizza works by using the callback function."



function order(name,callback) {
    setTimeout(function () {
        alert(`${name} is placed order`);
		callback();
    }, 3000);
}
order('pizza',function(ans){
})


function prepare(name,callback) {
    setTimeout(function msg() {
        alert(`${name} is prepared`);
		callback();
    }, 7000);
}
prepare('pizza',function(){
})


function delivery(name,callback) {
    setTimeout(function () {
        alert(`${name} is ready to delivery and the bill is $20`);
		callback();
    }, 10000);
}
delivery('pizza',function(){
})