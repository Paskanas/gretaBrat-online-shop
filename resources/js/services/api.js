import axios from "axios";

export const getPortfolioImages = async () => {
    try {
        const response = await axios.get("/api/portfolio-images");
        return response.data;
    } catch (e) {
        console.error(e);
        throw error;
    }
};

export const getMaxOrderNumber = async () => {
    try {
        const response = await axios.get("/api/get-max-order-number");
        return response.data;
    } catch (e) {
        console.error(e);
        throw error;
    }
};

export const getHomePageData = async () => {
    try {
        const [portfolioImages, maxOrderNum] = await Promise.all([
            getPortfolioImages(),
            getMaxOrderNumber(),
        ]);
        return { portfolioImages, maxOrderNum };
    } catch (e) {
        console.error(e);
        throw error;
    }
};

export const getAchievements = async () => {
    try {
        const response = await axios.get("/api/achievements");
        return response.data;
    } catch (e) {
        console.error(e);
        throw error;
    }
};

export const loginUser = async (email, password, remember) => {
    try {
        const response = await axios.post("/login", {
            email,
            password,
            remember,
        });
        localStorage.setItem("access_token", response.data.access_token);
        window.location.href = "/portfolioImages-admin";
    } catch (error) {
        console.error(error);
    }
};

export const sendEmail = (
    name,
    surname,
    email,
    message,
    setLoading,
    resetFormColors,
    setNameColor,
    errColor,
    setMessageColor,
    setEmailColor
) => {
    axios
        .post("/contacts", {
            name: name,
            surname: surname,
            email: email,
            message: message,
        })
        .then((res) => {
            if (res.data.status === 200) {
                resetForm();
                setLoading(false);
                swal("Success", "Email sent successfuly", "success");
            } else if (res.data.status === 422) {
                setLoading(false);
                resetFormColors();

                const messages = Object.keys(res.data.errors).map((error) => {
                    if (error === "name") {
                        setNameColor(errColor);
                    } else if (error === "email") {
                        setEmailColor(errColor);
                    } else if (error === "message") {
                        setMessageColor(errColor);
                    }
                    return res.data.errors[error];
                });

                swal({
                    title: "Warning",
                    text: messages.join("\n"),
                    type: "warning",
                });
            }
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            swal({
                title: "Error",
                text: "Something went wrong",
                type: "error",
            });
        });
};
