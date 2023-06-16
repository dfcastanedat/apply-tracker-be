/**
 * Cors options for merchList-back
 */
const corsOptions = {
    exposedHeaders: [
        "X-Auth",
        "X-Total-Pages",
        "X-Current-Page",
        "X-Next-Page",
        "X-Prev-Page",
        "X-Total-Records",
    ],
    origin: "*",
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
    preflightContinue: false,
};

export default corsOptions;