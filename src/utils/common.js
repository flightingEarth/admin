const statusList = [
    {'id':1,'name':'正常'},
    {'id':2, 'name': '未营业'}
];

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