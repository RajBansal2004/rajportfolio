export const Load_State_Table='Load_State_Table';

const loadData=' https://jsonplaceholder.typicode.com/posts';

export const Load_StateData=()=>{
    return async dispatch =>{
        try{
            const result = await fetch(`${loadData}/state_table.json`,
            {
                method:'GET',
                headers:
                {'Content-Type':'application/json'}
            });
            console.log("dataj-----",result)
            const state_data=await result.json();
            if(state_data){
                dispatch({
                    type:Load_State_Table,
                    payload:state_data
                })
            }else{
                console.log("App category not data fetch");
            }
        }
    catch(error){
        console.log(error);
    }
    }
}

