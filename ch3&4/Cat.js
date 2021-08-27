function Cat({name}) {
  return (
    <React.Fragment>
      <h1>The cat's name is {name}</h1>
      <p>He's good.</p>
    </React.Fragment>  
  )
}

ReactDOM.render(<Cat name="Kitty" />, document.getElementById('root'))

