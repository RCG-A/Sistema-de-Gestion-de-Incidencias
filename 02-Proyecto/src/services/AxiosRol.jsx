import axios from "axios";

export const CreateRole = (name, description)=>{
    let body = {
        name: name,
        description: description
    }
    return axios.post("http://192.168.0.106:4000/roles", body)
}

export const GetRole = () => {
    return axios.get("http://192.168.0.106:4000/roles")

}

export const GetDetailsRole = (id)=>{
    return axios.get(`http://192.168.0.106:4000/roles/${id}`)
}


export const EditRole = (name, description, id)=>{
    let body = {
        name:name,
        description: description,
        
    }
    return axios.patch(`http://192.168.0.106:4000/roles/${id}`, body)
}
