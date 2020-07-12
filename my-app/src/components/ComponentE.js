import React ,{Component} from 'react';
import { UserConsmmer } from './usercontext';

class ComponentE extends Component{
render() {
    return(
        <UserConsmmer>
            {(user)=>{
                return  <div className="col">Hello {user} </div>
            }}
           
        </UserConsmmer>
        )
        
   
}
}
export default ComponentE;