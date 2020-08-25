// 품종 = {
//     // 세계애견연맹 5 그룹. 뾰족한 주둥이와 선 귀를 가진 종 그룹.
//     '진돗개' : 50.0,
//     '포메라니안' : 51.0,
//     '시베리안 허스키' : 51.0,
//     // 세계애견연맹 6 그룹. 수렵견 그룹.
//     '비글' : 60.0,
//     '달마시안' : 61.0,
//     '바셋 하운드' : 62.0,
//     // 세계애견연맹 9 그룹. 가정견 그룹.
//     '몰티즈': 90.0,
//     '시추': 91.0,
//     '토이 푸들': 92.0,
//     '치와와': 93.0,
//     '빠삐용': 94.0
// }

// 강아지/고양이 = {
//     강아지 : 1,
//     고양이 : 10000000000
// }

// 성별 = {
//     암 : 1,
//     수 : 10000
// }

// 동물 등록 여부 = {
//     유 : 1,
//     무 : 100
// }

// 중성화 여부 = {
//     유 : 1,
//     무 : 100
// }

function getAgeFromBirthDay(birth_day) {
    var birthday = new Date(birth_day);
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    // if (age < 1) {
    //     var age = today.getMonth() - birthday.getMonth();
    //     console.log('생후 ', age, '개월');
    // }
    return age
}

// set a dataset
exports.basicDataSet = {
    '신준수': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2019/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100
    },
    '김철수': {
        '강아지/고양이': 1,
        '품종': 91.0,
        '나이': (getAgeFromBirthDay('2015/03/04') / 10),
        '성별': 1
    },
    '박보검': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2017/03/04') / 10),
        '성별': 1
    },
    '김미영': {
        '강아지/고양이': 10000000000,
        '품종': 11000000001.0,
        '나이': (getAgeFromBirthDay('2018/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100,
    },
    '홍길동': {
        '강아지/고양이': 1,
        '품종': 60.0,
        '나이': (getAgeFromBirthDay('2018/03/04') / 10),
        '성별': 10000,
        '동물 등록 여부': 100,
        '중성화 여부': 1,
    },
    '김밥밥': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2017/03/04') / 10),
        '성별': 10000
    },
    '뿌링클': {
        '강아지/고양이': 1,
        '품종': 92.0,
        '나이': (getAgeFromBirthDay('2017/03/04') / 10),
        '성별': 10000
    },
    '김치치': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2017/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100
    },
    '김소미': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2015/03/04') / 10),
        '성별': 1
    },
    '김소영': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2014/03/04') / 10),
        '성별': 1
    },
    '신준식': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2014/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100
    },
    '신준일': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2012/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100
    },
    '신준이': {
        '강아지/고양이': 1,
        '품종': 90.0,
        '나이': (getAgeFromBirthDay('2017/03/04') / 10),
        '성별': 1,
    },
    '신준삼': {
        '강아지/고양이': 1,
        '품종': 91.0,
        '나이': (getAgeFromBirthDay('2019/03/04') / 10),
        '성별': 1,
        '동물 등록 여부': 1,
        '중성화 여부': 100
    },
    '김소일': {
        '강아지/고양이': 1,
        '품종': 50.0,
        '나이': (getAgeFromBirthDay('2015/03/04') / 10),
        '성별': 1
    },
    '김소이': {
        '강아지/고양이': 1,
        '품종': 50.0,
        '나이': (getAgeFromBirthDay('2009/03/04') / 10),
        '성별': 1
    },
    '김소삼': {
        '강아지/고양이': 1,
        '품종': 50.0,
        '나이': (getAgeFromBirthDay('2014/03/04') / 10),
        '성별': 1
    },
    '김소사': {
        '강아지/고양이': 1,
        '품종': 50.0,
        '나이': (getAgeFromBirthDay('2015/03/04') / 10),
        '성별': 1
    },
    '김소오': {
        '강아지/고양이': 1,
        '품종': 50.0,
        '나이': (getAgeFromBirthDay('2016/03/04') / 10),
        '성별': 1
    },
};

const data = require('./data.js');

var user_name = data.data[0].user_name;

if (data.data[0].kind == '말티즈') { var kind = 90; }
else if (data.data[0].kind == '푸들') { var kind = 92; }
else if (data.data[0].kind == '진돗개') { var kind = 50;}

var age = data.data[0].age;

if (data.data[0].gender == '암컷') { var gender = 1; }
else { var gender = 10000; }

if (data.data[0].neutralization == 'YES') { var neutralization = 1; }
else { var neutralization = 100; }

if (data.data[0].enrollment == 'YES') { var enrollment = 1; }
else { var enrollment = 100; }

this.basicDataSet[user_name] = {
    '강아지/고양이': 1,
    '품종': kind,
    '나이': (age / 10),
    '성별': gender,
    '동물 등록 여부': neutralization,
    '중성화 여부': enrollment
};