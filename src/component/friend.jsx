// eslint-disable-next-line react/prop-types
export default function Friend({user}){
    console.log(user);
    // eslint-disable-next-line react/prop-types
    const {name, email} = user;
    return(
        <>
            <div> Name: {name}</div>
            <div>Email:{email}</div>
        </>
    )
}