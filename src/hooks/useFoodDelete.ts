import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = "http://localhost:8080"

const deleteData = async (id: number): AxiosPromise<any> => {
    const res = await axios.delete(`${API_URL}/food/${id}`)
    return res
}


export function useFoodDataDelete() {

    const queryclient = useQueryClient()

    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryclient.invalidateQueries({queryKey: ['food-data']})
        }
    })


    return mutate
}