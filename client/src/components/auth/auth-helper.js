const auth = {
    // if login successful save jwt credentials
    authenticate(jwt) {
        if (typeof window !== "undefined")
            sessionStorage.setItem("jwt", JSON.stringify(jwt));
    },

    // retrieve credentials from sessionStorage
    isAuthenticated() {
        if (typeof window == "undefined") return false;

        if (sessionStorage.getItem("jwt"))
            return JSON.parse(sessionStorage.getItem("jwt"));
        else return false;
    },

    // clear JWT credentials from sessionStorage.
    clearJWT(cb) {
        if (typeof window !== "undefined") sessionStorage.removeItem("jwt");
        cb();
    },
};

export default auth;
