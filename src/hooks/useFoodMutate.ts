import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const postData = async (data: FoodData): AxiosPromise<any> => {
    const res = axios.post(API_URL + "/food", data)
    return res
}


export function useFoodDataMutate() {

    const queryclient = useQueryClient()

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryclient.invalidateQueries({queryKey: ['food-data']})
        }
    })


    return mutate
}