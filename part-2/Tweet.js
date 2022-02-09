const Tweet = (props) => ( 
<div>
    <h1>{props.username}</h1>
    <p>{props.message}</p>
    <h3>{props.name} {props.date}</h3>
</div>
)