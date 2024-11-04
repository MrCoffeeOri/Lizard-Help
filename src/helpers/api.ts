export const path = "http://localhost:5000"

export async function UserLogin() {
    try {
      const authResponse = await (await fetch(`${path}/user/auth`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e.currentTarget[0].value, password: e.currentTarget[1].value })
      })).json()
      if (authResponse.error)
        return setErroMessage(authResponse.error)
      setUser(authResponse.user)
      navigate("/home")
    } catch (error) {
      setErroMessage(error.toString())
    }
}