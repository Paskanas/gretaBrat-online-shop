export const isImage = (extension) => {
    if (extension === "jpg") {
        return true;
    }
    return false;
};

export const isVideo = (extension) => {
    if (extension === "mp4") {
        return true;
    }
    return false;
};
