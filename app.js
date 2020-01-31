

class Header extends React.Component {
    render() {
        return (
            <h1>Tic Tac Toe</h1>
        )
    }
}

class Players extends React.Component {
    render() {
        return (
            <div>
            <h3>Player {this.props.whichPlayer}</h3>
            <h4>Wins:</h4>
            </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div>
                <div>square</div>
                <div>square</div>
                <div>square</div>

                <div>square</div>
                <div>square</div>
                <div>square</div>

                <div>square</div>
                <div>square</div>
                <div>square</div>
            </div>
        )
    }
}
class App extends React.Component {
    render() {
       return (
        <div>
        <Header />
        <Players  whichPlayer="x"/>
        <Players whichPlayer="o"/>
        <Board />
        </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)