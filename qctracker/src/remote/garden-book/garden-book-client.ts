export const apiLogin = async (username: string, password: string): Promise<object> => {
    let credentials = {
        username,
        password
    }
    try {
        const response = await fetch('http://3.81.82.21:2020/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return {
                body,
                loginMessage: 'successful login'
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}