import axios from "axios";

export const BLOCKS_CATEGORY_LOADING = "BLOCKS_CATEGORY_LOADING";
export const BLOCKS_CATEGORY_SUCCESS = "BLOCKS_CATEGORY_SUCCESS";
export const BLOCKS_CATEGORY_FAILED = "BLOCKS_CATEGORY_FAILED";

export const blocksLoading = () => ({ type: BLOCKS_CATEGORY_LOADING });
export const blocksSuccess = data => ({
    type: BLOCKS_CATEGORY_SUCCESS,
    payload: data
});
export const blocksFailure = error => ({
    type: BLOCKS_CATEGORY_FAILED,
    payload: error
});

export function blocksData(data){
    return function(dispatch) {
        dispatch(blocksLoading());
        return axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                dispatch(blocksSuccess(response.data.results))
            })
            .catch(error=>{
                dispatch(blocksFailure(error)); 
            })
    }
}