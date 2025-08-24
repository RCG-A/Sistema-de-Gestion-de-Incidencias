import axios from "axios";

export const CreateIncidencia = (numTK, requestingUserId, affectedUserId, company, categoriesId, subcategories1, subcategories2, assignmentGroupId, briefDescription, description, historic) => {
    let body = {
        numTK: numTK,
        requestingUserId: requestingUserId,
        affectedUserId: affectedUserId,
        company: company,
        categoriesId: categoriesId,
        subcategories1: subcategories1,
        subcategories2: subcategories2,
        assignmentGroupId: assignmentGroupId,
        assignedUserId: assignmentGroupId,
        briefDescription: briefDescription,
        description: description,
        historic: historic
    }
    return axios.post(`http://192.168.0.106:4000/incidents/`, body)
}

export const EditIncidencia = (numTK, requestingUserId, affectedUserId, company, categoriesId, subcategories1, subcategories2, assignmentGroupId, briefDescription, description, historic, id) => {
    let body = {
        numTK: numTK,
        requestingUserId: requestingUserId,
        affectedUserId: affectedUserId,
        company: company,
        categoriesId: categoriesId,
        subcategories1: subcategories1,
        subcategories2: subcategories2,
        assignmentGroupId: assignmentGroupId,
        assignedUserId: assignmentGroupId,
        briefDescription: briefDescription,
        description: description,
        historic: historic
    }
    return axios.patch(`http://192.168.0.106:4000/incidents/${id}`, body)
}

export const GetIncidencia = (id) => {

    return axios.get(`http://192.168.0.106:4000/incidents/${id}`)
}

export const GetAllIncidencia = () => {

    return axios.get(`http://192.168.0.106:4000/incidents`)
}
