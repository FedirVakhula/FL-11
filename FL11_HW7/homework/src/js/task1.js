let account = [{
    user: 'user@gmail.com',
    password: 'UserPass'
},{
    user: 'admin@gmail.com',
    password: 'AdminPass'
}]
let count = true;
let login = prompt('enter your email');
const loginLength = 6;

if (!login){
    alert('Canceled.');
} else if (login.length < loginLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else {
    for (let index = 0; index < account.length; index++) {
        if (account[index].user === login) {
            let pass = prompt('enter your password');
            count = true;
            if (pass === account[index].password) {
                let confirmationMasage = confirm(
                  'Do you want to change your password?'
                );
                if (confirmationMasage) {
                    let oldPas = prompt('enter old password');
                    if (oldPas === account[index].password) {
                      let newPass = prompt('enter new password');
                      let newPassLength = 5;
                      if (newPass.length < newPassLength) {
                          alert('too short password. Sorry.');
                      } else{
                          let newPassRepeat = prompt('repeat new password');
                          if (newPass === newPassRepeat){
                              alert('You have successfully changed your password.')
                          } else{
                              alert('You wrote the wrong password.')
                          }
                      }
                    } else if (!oldPas){
                        alert('Canceled.');
                    } else{
                        alert('Wrong password');
                    }
                } else{
                    alert('You have failed the change.');
                }
                break;
            } else if (!pass){
                alert('Canceled.');
                break;
            } else {
                alert('Wrong password');
                break;
            }
        }
        count = false;
    }
    if (!count) {
        alert(`I don’t know you`);
    }
}