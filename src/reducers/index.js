import { 
    FETCH_ANIMELIST_FAIL, 
    FETCH_ANIMELIST_START, 
    FETCH_ANIMELIST_SUCCESS, 
    FIND_ANIME, 
    FOUND_ANIME 
} from "../actions"

const initialState = {
    animes: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case( FETCH_ANIMELIST_START ):
        return({
            ...state,
            animes: [],
            isFetching: true,
            error: '',
        });
        case( FETCH_ANIMELIST_SUCCESS ):
        return({
            ...state,
            animes: action.payload,
            isFetching: false,
            error: '',
        });
        case( FETCH_ANIMELIST_FAIL ):
        return({
            ...state,
            isFetching: false,
            error: action.payload,
        });
        case( FIND_ANIME ):
        return({
            ...state,
            animes: [],
            isFetching: true,
            error: '',
        });
        case( FOUND_ANIME ):
        return({
            ...state,
            animes: action.payload,
            isFetching: false,
            error: '',
        });
        default:
            return state;
    }
};