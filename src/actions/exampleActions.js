import * as actionTypes from '../constants/exampleTypes';
import * as urls from '../constants/urls';
import api from '../utils/api';

export function createExample(example) {
    return {
        type: actionTypes.CREATE_EXAMPLE,
        payload: example
    };
}
