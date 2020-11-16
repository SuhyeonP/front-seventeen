import { enableES5, produce } from 'immer';

export default (...args:any) => {
    enableES5();
    return produce(args);
};//IE 에러방지