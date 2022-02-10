const App = () => (
    <div>
        <Person name="rijo" age={32} hobies={["cricket", "badminton"]} />
        <Person name="rijo George" age={32} hobies={["cricket", "badminton","tt"]} />
        <Person name="rijo Moosariyil George" age={32} hobies={["cricket", "badminton","tt", "tennis"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))