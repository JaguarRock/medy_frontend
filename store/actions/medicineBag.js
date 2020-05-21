export const MEDICINEBAG_AVAILABLE = 'MEDICINES_AVAILABLE';
export const ADD_MEDICINEBAG = 'ADD_MEDICINEBAG';
export const UPDATE_MEDICINEBAG = 'UPDATE_MEDICINEBAG';
export const DELETE_MEDICINEBAG = 'DELETE_MEDICINEBAG';

// 약 봉투 가져오기
export const getMedicineBags = (medicineBags) => ({
    type: MEDICINEBAG_AVAILABLE,
    data: {medicineBags}
});

// 약 봉투 추가
export const addMedicineBag = (medicineBag) => ({
    type: ADD_MEDICINEBAG,
    data: {medicineBag}
});

// 약 봉투 수정
export const updateMedicineBag = (medicineBag) => ({
    type: UPDATE_MEDICINEBAG,
    data: {medicineBag}
});

// 약 봉투 삭제
export const deleteMedicineBag = (_id) => ({
    type: DELETE_MEDICINEBAG,
    data: {_id}
})