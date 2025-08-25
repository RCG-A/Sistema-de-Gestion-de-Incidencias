import axios from "axios";

export const CreateArea = (name, description) => {
    let body = {
        name: name,
        description: description
    }
    return axios.post(`http://localhost:4000/assignment-group/`, body)
}

export const EditArea = (name, description, id) => {
    let body = {
        name: name,
        description: description
    }
    return axios.patch(`http://localhost:4000/assignment-group/${id}`, body)
}

export const GetAreaId = (id) => {

    return axios.get(`http://localhost:4000/assignment-group/${id}`)
}

export const GetArea = () => {

    return axios.get(`http://localhost:4000/assignment-group/`)
}
