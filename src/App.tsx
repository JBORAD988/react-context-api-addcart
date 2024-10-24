import './App.css'
import { Item } from './components/item'
import { AddCart } from './components/addCart'

function App() {


  const flex: React.CSSProperties ={
display: "flex",
justifyContent: "space-between",
  }

  return (
    <>
    <div className="col-12" style={flex}>
    <Item name="MackBook Pro M1" price={1400} />
   <Item name="MackBook Pro M2" price={1800} />
   <Item name="MackBook Pro M3" price={2000} />
   <Item name="Dell Alean" price={24000} />
   <Item name="Samsung Book 4" price={900} />
      </div>
      <div>
        <hr></hr>
      <AddCart />
      </div>


    </>
  )
}
export default App
