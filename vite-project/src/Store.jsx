import { createStore } from 'redux';

import rootred from "./Redux/Reducer/Main";


const Store =createStore(
    rootred
);
    
export default Store