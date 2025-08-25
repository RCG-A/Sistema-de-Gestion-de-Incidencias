
import axios from "axios";

export const CreateUser = (idCategory,name, description)=>{
    let body = {
        idCategory: idCategory,
        name: name,
        description: description
    
    }
    return axios.post("http://192.168.0.106:4000/users", body)
}

export const GetUser = () => {
    return axios.get("http://192.168.0.106:4000/users")

}

export const GetDetailsUser = (id)=>{
    return axios.get(`http://192.168.0.106:4000/users/${id}`)
}


export const EditUser = (idCategory,name, description, id)=>{
    let body = {
        idCategory: idCategory,
        name: name,
        description: description
        
    }
    return axios.patch(`http://192.168.0.106:4000/users/${id}`, body)
}
