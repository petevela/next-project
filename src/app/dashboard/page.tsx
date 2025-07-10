import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mi primer dasboard',
  description: 'Estaes mi dasboard',
}

const page = () => {   
  return (
    <h1>esta es la ruta Dashboard</h1>
  )
}
export default page

