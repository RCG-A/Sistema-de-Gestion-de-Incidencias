import axios from "axios";


export const CreateCategories = (name, description)=>{
    let body = {
        name: name,
        description: description
    }
    return axios.post("http://192.168.0.106:4000/categories", body)
}


export const EditCategories = (name, description, id)=>{
    let body = {
        name: name,
        description: description
    }
    return axios.patch(`http://192.168.0.106:4000/categories/${id}`, body)
}

export const GetAllCategories = ()=>{

    return axios.get(`http://192.168.0.106:4000/categories/`)
}



export const GetCategories = (id)=>{

    return axios.get(`http://192.168.0.106:4000/categories/${id}`)
}

export const CreateSubCategories1 = (idCategory, name, description)=>{
    let body = {
        idCategory: idCategory,
        name: name,
        description: description
        
    }
    return axios.post("http://192.168.0.106:4000/subcategories1", body)
}


export const EditSubCategories1 = (idCategory,name, description, id)=>{
    let body = {
        idCategory: idCategory,
        name: name,
        description: description
    }
    return axios.patch(`http://192.168.0.106:4000/subcategories1/${id}`, body)
}

export const GetAllSubCategories1 = ()=>{

    return axios.get(`http://192.168.0.106:4000/subcategories1/`)
}



export const GetSubCategories1 = (id)=>{

    return axios.get(`http://192.168.0.106:4000/subcategories1/${id}`)
}

export const CreateSubCategories2 = (subcategories1Id, name, description)=>{
    let body = {
        subcategories1Id: subcategories1Id,
        name: name,
        description: description
    }
    return axios.post("http://192.168.0.106:4000/subcategories2", body)
}


export const EditSubCategories2 = (subcategories1Id, name, description, id)=>{
    let body = {
        subcategories1Id:subcategories1Id,
        name: name,
        description: description
    }
    return axios.patch(`http://192.168.0.106:4000/subcategories2/${id}`, body)
}

export const GetAllSubCategories2 = ()=>{

    return axios.get(`http://192.168.0.106:4000/subcategories2/`)
}



export const GetSubCategories2 = (id)=>{

    return axios.get(`http://192.168.0.106:4000/subcategories2/${id}`)
}