import React from 'react'
import {BuahProvider} from './BuahContext'
import BuahList from './BuahList'
import BuahForm from './BuahForm'

const Buah = () => {
    return(
        <BuahProvider>
            <div className="app">
            <h1>Tabel Harga Buah</h1>
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Option</th>
                </tr>
            <BuahList/>
            </table>
            <BuahForm/>
        </div>
        </BuahProvider>
    )
}

export default Buah