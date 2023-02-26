import React from 'react';


const UserInfo = () => {
    return (
        <div style={{
            display: "flex", width: "50px", position: "absolute",
            padding: "20px", textAlign: "center", borderRadius: "5%"
        }}>
            <img src={'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}
                 alt={''}
            />
        </div>
    );
};

export {UserInfo};