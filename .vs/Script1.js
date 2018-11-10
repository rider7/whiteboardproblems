// JavaScript source code

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given(or passed as an empty String).

function hello(name) {
    if (name == null || name == '') {
        return "Hello, World!";
    }
    else {
        var properName = name[0].toUpperCase() + name.substr(1).toLowerCase();  
        return "Hello, " + properName + "!";
    }
}

function hello(name) 
    if (name) {
        var properName = name[0].toUpperCase() + name.substr(1).toLowerCase(); 
        return "Hello, " + properName + "!"; 
    }
    else {
        return "Hello, World!";
    }
}
//Notes:
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter(Xxxx).
//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

//This method extracts the characters in a string between "start" and "end", not including "end" itself.

//    If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).

//If either "start" or "end" is less than 0, it is treated as if it were 0.
