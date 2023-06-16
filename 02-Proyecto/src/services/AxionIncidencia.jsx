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
    return axios.post(`http://localhost:4000/assignment-group/`, body)
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
    return axios.patch(`http://localhost:4000/assignment-group/${id}`, body)
}

export const GetIncidencia = (id) => {

    return axios.get(`http://localhost:4000/assignment-group/${id}`)
}

export const GetAllIncidencia = () => {

    return axios.get(`http://localhost:4000/assignment-group/`)
}
