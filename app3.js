let userName = prompt('What is your account name?')

function getUserName(){
    if(userName.toLowerCase() == 'admin'){
        document.write('<h2>Welcome Home ' + userName + '</h2>');}
    else {   document.write('<h2>Welcome New User ' + userName + '</h2>');

} 

}

getUserName();