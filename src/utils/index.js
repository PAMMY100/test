export async function signupUser(formData) {
  const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    //get the token
    if(response.ok) {
      const data = response.json();
      localStorage.setItem('token', data.token)
      window.location.replace("/")
    }
}

export async function loginUser(formData) {
  const response = await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(formData)
  })
  //store token in localstorage
  if(response.ok) {
    const data = response.json()
    localStorage.setItem('token', data.token)
    window.location.replace('/')
  }
}