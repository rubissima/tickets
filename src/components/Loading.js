import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center p-8">
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#F28C18" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default Loading;
<div className="flex justify-center">
<Loading />
</div>
