import sendRequest from './request-promise';

const autocompletes = async (searchTerm) => {
    const url = `/news/autocompletes?type=source_names&term=${searchTerm}&language=en&per_page=5`;
    const result = await sendRequest(url ,'GET', {})
    return result
}

const searchStories = async (searchTerm, cursorValue) => {
    const cursor = '*';
    console.log('cursor', cursor)
    if (cursorValue) cursor=cursorValue
    const url = `/news/stories?title=${searchTerm}&sort_by=published_at&sort_direction=desc&cursor=${cursor}&per_page=10`;
    const result = await sendRequest(url ,'GET', {})
    return result
}

export default { autocompletes, searchStories };