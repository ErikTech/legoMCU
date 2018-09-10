import * as allActions from './allActions';
import data from '../data/sets.json'

export function receiveStuff(data) {
    return {type: allActions.RECEIVE_STUFF, stuff: data};
}

export function fetchStuff() {
    console.log("data:" + data)
    return (dispatch) => {
        fetch(data)
            // .then(res => res.text()).then(text => console.log(text));
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveStuff(response.data))
                }else{
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}
