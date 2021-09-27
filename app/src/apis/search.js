import sendRequest from './request-promise';

const search = (searchTerm) => {
    const url = `https://api.aylien.com/news/autocompletes?type=source_names&term=${searchTerm}&language=en&per_page=5`;
    return sendRequest(url ,'GET', {})
}

export default { search };