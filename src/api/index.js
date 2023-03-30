import { axiosInstance } from "./instance";

export const get_user_data_api = async (id) => {
    const res = await axiosInstance.get(`/user/${id}`);
    return res.data;
};

export const get_order_details_api = async (user_id, order_id) => {
    const data = {
        user_id,
        order_id
    };
    const res = await axiosInstance.post(`/orders`, {
        data,
    });
    return res.data;
};
