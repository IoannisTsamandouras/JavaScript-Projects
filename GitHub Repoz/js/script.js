window.onload = function(){
	document.addEventListener("ready", onReady, false);
}

function onReady() {
    $('#saveContact').click(function(){
    	saveContact();
    });
}

function saveContact(){
	// Get form info
	var full_name = $('#first_name').val()+" "+$('#last_name').val();
	var note = $('#note').val();

	var myContact = navigator.contacts.create({"displayName": full_name});
	myContact.note = note;

	contact.save();

	console.log('Saved contact ' +full_name+'...');
}