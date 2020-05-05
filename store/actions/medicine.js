import { ADD_MEDICINE } from './types';

export const addMedicine = medicineName => {
    return {
        type: ADD_MEDICINE,
        payload: medicineName
    }
}