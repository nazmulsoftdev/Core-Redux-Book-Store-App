import { STATUSFILTER } from "./action";



// create action types

export const StatusChangeAc = (value) => {
    return {
        type: STATUSFILTER,
        paylod: value
    }
}