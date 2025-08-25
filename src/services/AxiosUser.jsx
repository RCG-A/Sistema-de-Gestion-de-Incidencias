import axios from "axios";

export const CreateUser = (DNI,name, lastname, email, password, roleId, groupAssignId)=>{
    let body = {
        DNI: DNI,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        roleId: roleId,
        assignmentGroupId: assignmentGroupId
    }
    return axios.post("http://192.168.0.106:4000/users", body)
}

export const GetUser = () => {
    return axios.get("http://192.168.0.106:4000/users")

}

export const GetDetailsUser = (id)=>{
    return axios.get(`http://192.168.0.106:4000/users/${id}`)
}


export const EditUser = (DNI,name, lastname, email, password, roleId, groupAssignId, id)=>{
    let body = {
        DNI: DNI,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        roleId: roleId,
        groupAssignId: groupAssignId
        
    }
    return axios.patch(`http://192.168.0.106:4000/users/${id}`, body)
}


export const auth =  (username,password)=>{
        
    let body ={
        username: username,
        password: password
    }
return axios.post("http://192.168.0.106:4000/auth/login", body)
    
}
