import { useMutation} from "react-query";
import HttpClient from "@core/httpClient";
import * as yup from 'yup';
import {ROUTE_API_LOGIN_CHECK} from "../../../../core/routes";

const postLoginUSer = async (loginParams) => {
    if(loginSchema.validate(loginParams)){
        return await HttpClient.post(ROUTE_API_LOGIN_CHECK,loginParams);
    }
};

export default function useLoginUser(loginParams) {
    return useMutation(
        loginParams => postLoginUSer(loginParams),
    );
};

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});