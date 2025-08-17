const BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://localhost:8000/api"
        : "https://master-akash-backend-1.onrender.com/api";

export default BASE_URL;
