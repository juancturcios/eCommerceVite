import {useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import {ShoppingCartContext} from '../../Context'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  // const [items, setItems]= useState(null)
  // useEffect(() =>{
  //   fetch('https://api.escuelajs.co/api/v1/products')
  //   .then(response => response.json())
  //   .then(data =>setItems(data))
  // }, [])

  const context = useContext(ShoppingCartContext)
  const renderView = () =>{

      if(context.filteredItems?.length >0)
      {
        return (
          context.filteredItems?.map(item=>(
            <Card key={item.id} data={item}/>
          ))
        )
      }
      else{
        return(
          <div>
            We don't have anything :(
          </div>
        )
      }
  }

    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Exlusive Products</h1>
          </div>
          <input type="text" placeholder='Search a product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
              renderView()
            }
          </div>
          
          <ProductDetail/>
        </Layout>
    )
  }
  
  export default Home
  