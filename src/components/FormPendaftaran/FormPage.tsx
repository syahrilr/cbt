import React from 'react'
import { DataDiri } from './DataDiri'
import { FormOrtu } from './DataOrtu'
import DataSkolah from './DataSkolah'


const FormPage = () => {
  return (
    <div className='container mx-auto bg-white py-4'>
      <DataDiri/>
      <FormOrtu/>
      <DataSkolah/>
    </div>
  )
}

export default FormPage