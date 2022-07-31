class ProductList extends React.Component {
  render() {
    return (
      <div className="ui stackable items">
        Hello Sachin, I am a basic react component!
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
