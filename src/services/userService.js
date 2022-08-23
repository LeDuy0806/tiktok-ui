import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perpage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perpage,
            }
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
}