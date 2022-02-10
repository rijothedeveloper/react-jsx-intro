const Person = (props) => (
    <div>
        <p>Learn some information about this person</p>
        <h3>name: {props.name.slice(0, 6)}</h3>
        <h3>age: {props.age}</h3>
        <b>{props.age > 18 ? <h3>please go vote</h3> : <h3>you must be 18 to vote</h3>}</b>
        <ul>
            {props.hobies.map( h => <li>{h}</li>)}
        </ul>
    </div>
)