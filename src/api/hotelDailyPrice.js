import fetch from 'utils/fetch';

export function getHotelDailyPrice(query) {
    return fetch({
        url: 'supplier/hotelDailyPrice',
        method: 'get',
        params: query
    });
}


export function addHotelDailyPrice(data) {
    return fetch({
        url: 'supplier/hotelDailyPrice',
        method: 'post',
        data: data
    });
}


