import axios from "axios";

export const randomUserApi = axios.create({
	baseURL: "https://randomuser.me",
});

export const cmsCdn = axios.create({
	baseURL: process.env.NEXT_PUBLIC_CMS_CDN_URL,
});

export const cmsApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
});
