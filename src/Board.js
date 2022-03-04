import React from 'react';
import Square from './Square';
class Board extends React.Component {
    renderSquare(i,j) {
      return <Square value={i} caption={j} />;
    }  
    render() {
      const status = 'Jayapen checking git hosting';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0,"OK")}
            {this.renderSquare(1,"Exit")}
            {this.renderSquare(2,"Run")}
          </div>
          <div className="board-row">
            {this.renderSquare(3,"Est")}
            {this.renderSquare(4,"Services")}
            {this.renderSquare(5,"Shut donw")}
          </div>
          <div className="board-row">
            {this.renderSquare(6,"Release")}
            {this.renderSquare(7,"Quit")}
            {this.renderSquare(8,"Napean")}
          </div>
        </div>
      );
    }
  }
  export default Board;