
import './clearButton.css'
function Button({clearGame}) {
    return (
      <div>
        <button className="clear-button" onClick={clearGame}>
          Clear Game
        </button>
      </div>
    );
}
export {Button}