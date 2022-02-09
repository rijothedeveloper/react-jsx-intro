const App = () => (
    <div>
        <Tweet username="rijo7" name="rijo george" date="02/06/2022" message="my first tweet" />
        <Tweet username="rijo72" name="rijo george2" date="02/06/2022" message="my second tweet" />
        <Tweet username="rijo73" name="rijo george3" date="02/06/2022" message="my thierd tweet" />
        <Tweet username="rijo74" name="rijo george4" date="02/06/2022" message="my fourth tweet" />
    </div>
)


ReactDOM.render(<App/>, document.getElementById("root"))