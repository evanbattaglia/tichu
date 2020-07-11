const not_right_side = document.getElementById('main')

// the idea here is to allow a page refresh to reconnect you to the game
// if you lose your websocket connection

function Connect(game_id, player_id) {
  ReactDOM.unmountComponentAtNode(not_right_side)
  location.hash = `${game_id}:${player_id}`
  ReactDOM.render(<Game game_id={game_id} player_id={player_id}/>, not_right_side)
}

const hash_params = location.hash.match(/^#(\w+):(\w+):(\w+)$/)
if (hash_params) {
  Connect(hash_params[1], hash_params[2], hash_params[3])
} else {
  ReactDOM.render(<JoinGameDialog/>, not_right_side)
}
