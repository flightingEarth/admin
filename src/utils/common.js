const statusList = [
    {'id':1,'name':'正常'},
    {'id':2, 'name': '未营业'}
];

const scenicStarList = [
    {'id':1,'name':'1A'},
    {'id':2,'name':'2A'},
    {'id':3,'name':'3A'},
    {'id':4,'name':'4A'},
    {'id':5,'name':'5A'}
]

export function getStatusList() {
    return statusList
}

export function getCurrentState(state) {
    if (state == 1) {
        return '正常'
    } else if (state == 2) {
        return '未营业'
    }
}

//获取景区星级
export function getScenicStar() {
    return scenicStarList
}