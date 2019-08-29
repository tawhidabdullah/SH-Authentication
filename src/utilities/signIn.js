export async function signIn({
  mobile,
  password
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile || password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user) => {
          return user.mobile === mobile
        });
        if (user && Object.keys(user).length > 0) {
          localStorage.setItem("currentuser", JSON.stringify(user));
          resolve();
        } else {
          reject();
        }
      }
    }, 3000);
  });
}



export async function getUserIfExists(mobile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user) => {
          return user.mobile === mobile
        });
        if (user && Object.keys(user).length > 0) {
          resolve();
        } else {
          reject();
        }
      }
    }, 3000);
  });
}


export async function signUp({
  mobile,
  password
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile || password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const isUserExistsuser = users.find((user) => {
          return user.mobile === mobile
        });

        if (isUserExistsuser && Object.keys(isUserExistsuser).length > 0) {
          reject();
        } else {
          const user = {
            mobile,
            password
          };
          users.push(user);
          let oldUser = JSON.parse(localStorage.getItem("currentuser") || "{}");
          oldUser = {
            ...oldUser,
            user
          };
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("currentuser", JSON.stringify(oldUser));
          resolve();
        }

      } else {
        reject();
      }

    }, 3000);
  });
}

export async function verificationCode({
  code1,
  code2,
  code3,
  code4
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code1 === '1' && code2 === '2' && code3 === '3' && code4 === '4') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}
export async function resetPassword({
  newPassword,
  confirmPassword
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newPassword === confirmPassword && confirmPassword !== 'shobhobe') {
        const oldUser = JSON.parse(localStorage.getItem("currentuser") || "{}");
        oldUser.password = newPassword;
        localStorage.setItem("currentuser", JSON.stringify(oldUser));
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}