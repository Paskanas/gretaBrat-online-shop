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
        throw error;
    }
};

export const sendEmail = async (name, surname, email, message) => {
    try {
        const response = await axios.post("/contacts", {
            name: name,
            surname: surname,
            email: email,
            message: message,
        });

        return response.data;
    } catch {
        (error) => {
            console.error(error);
            throw error;
        };
    }
};
