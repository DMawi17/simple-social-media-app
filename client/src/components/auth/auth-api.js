const login = async (user) => {
    try {
        const url = "http://localhost:3001/auth";

        let response = await fetch(url + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const logout = () => {};

export { login, logout };
