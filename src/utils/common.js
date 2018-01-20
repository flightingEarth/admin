const statusList = [
    {'id':0,'name':'全部'},
    {'id':1,'name':'正常'},
    {'id':2, 'name': '未营业'}
];

const scenicStarList = [
    {'id':0,'name':'全部'},
    {'id':1,'name':'A'},
    {'id':2,'name':'AA'},
    {'id':3,'name':'AAA'},
    {'id':4,'name':'AAAA'},
    {'id':5,'name':'AAAAA'}
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