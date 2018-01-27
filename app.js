// TODO
var App = () => (
  <div> Hello World </div>
);

var Cucumbers = () => (
  <li>Cucumbers</li>
);

var Kale = () => (
  <li>Kale</li>
);

class GroceryListItem = (item) => {
  {console.log(item);}
  return (
    <li>{item}</li>
  )
}

var GroceryList = (groceryItems) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return(
    <ul>
      <h2>Grocery List</h2>
      {groceryItems.items.map(function(item){
        console.log(item);
        return <GroceryListItem todo={item}/>;
      })};
    </ul>
  );
}

ReactDOM.render(<GroceryList items={['Tomatoes', 'Mangoes', 'Grapes']}/>, document.getElementById("app"));
