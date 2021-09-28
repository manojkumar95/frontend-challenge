import sendRequest from './request-promise';

const search = async (searchTerm) => {
    const url = `/news/autocompletes?type=source_names&term=${searchTerm}&language=en&per_page=5`;
    const result = await sendRequest(url ,'GET', {})
    console.log('result', result);
    return result
}

export default { search };