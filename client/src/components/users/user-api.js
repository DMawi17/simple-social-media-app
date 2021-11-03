const url = "http://localhost:3001/users/";

const create = (user) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    };

    fetch(url, config)
        .then((res) => res.json())
        .then((json) => console.log(json));
};

const list = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
        });
        return await response.json();
    } catch (err) {
        console.error(err);
    }
};

const read = async (params, credentials) => {
    try {
        let response = await fetch(url + params.userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + credentials.t,
            },
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (params, credentials, user) => {
    try {
        let response = await fetch(url + params.userId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + credentials.t,
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { create, list, read, update };
