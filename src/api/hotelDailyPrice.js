import fetch from 'utils/fetch';

export function getHotelDailyPrice(query) {
    return fetch({
        url: 'admin/hotelDailyPrice',
        method: 'get',
        params: query
    });
}


export function addHotelDailyPrice(data) {
    return fetch({
        url: 'admin/hotelDailyPrice',
        method: 'post',
        data: data
    });
}


