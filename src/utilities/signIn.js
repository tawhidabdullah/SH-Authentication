export async function signIn({
  mobile,
  password
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile === '12345678910' && password === 'shobhobe') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

export async function getUserIfExists(mobile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile === '12345678910') {
        resolve();
      } else {
        reject();
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
      if (mobile === '12345678910' && password === 'shobhobe') {
        resolve();
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
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}