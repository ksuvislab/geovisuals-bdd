import { view_close_loading, view_show_loading } from "./view";

export function util_axios_interceptors()
{
    axios.interceptors.request.use(function s(config) {
        // Show loading screen
        view_show_loading();
        return config;
    }, function(error) {
        return error;
    });


    axios.interceptors.response.use(function (response) {
        // Close loading screen
        view_close_loading();
        return response;
    }, function (error) {
        return error;
    });
}