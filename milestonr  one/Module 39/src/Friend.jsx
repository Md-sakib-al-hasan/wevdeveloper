export default function Friend(friend){
    const {name ,email} = friend.friend;
    console.log(name);
    return(
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
        </div>
    )
}