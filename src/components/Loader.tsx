import { useEffect } from "react";
import { useLocation } from "react-router";
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import * as NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
    showSpinner: false,
    speed: 500,
    minimum: 0.1,
});

const Loader = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => NProgress.done(), 700); // Simulate route load

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [location.pathname]);

    useEffect(() => {
        let activeRequests = 0;

        const requestHandler = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            if (activeRequests === 0) NProgress.start();
            activeRequests++;
            return config;
        };

        const responseHandler = (response: any): any => {
            activeRequests--;
            if (activeRequests === 0) NProgress.done();
            return response;
        };

        interface AxiosError {
            response?: any;
            request?: any;
            message: string;
            config: AxiosRequestConfig;
        }

        const errorHandler = (error: AxiosError): Promise<never> => {
            activeRequests--;
            if (activeRequests === 0) NProgress.done();
            return Promise.reject(error);
        };

        const axiosInstance = axios.interceptors.request.use(requestHandler);
        const axiosResponse = axios.interceptors.response.use(responseHandler, errorHandler);

        return () => {
            axios.interceptors.request.eject(axiosInstance);
            axios.interceptors.response.eject(axiosResponse);
        };
    }, []);

    return null;
};

export default Loader;