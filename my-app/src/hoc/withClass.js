import React from 'react';
const withClass = (WrappedComponent,ClassName)=>{
    return props =>(
        <div className={ClassName}>
            <WrappedComponent {...props}/>
        </div>
    )

}
export default withClass;