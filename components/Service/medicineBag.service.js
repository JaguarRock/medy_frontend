import axios from "axios";

const API_URL = "http://192.168.0.69:5000/medicineBag/";

function addMedicineBag(medicineBag) {
    return axios.post(API_URL + "add", medicineBag);
}

export default { addMedicineBag };