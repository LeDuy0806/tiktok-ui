import * as httpRequest from '~/utils/httpRequest';

export const getVideoList = async ({ type, page = 1 }) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            }
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
}