import React from 'react'
import './tugas11.css'


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]
class HargaBuah extends React.Component {
    render() {
        return (
            <div>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    <>
                        {dataHargaBuah.map(dat => {
                            return (
                                <tr>
                                    <td>{dat.nama}</td>
                                    <td>{dat.harga}</td>
                                    <td>{dat.berat / 1000} Kg</td>
                                </tr>
                            )
                        })}
                    </>
                </table>
            </div>
        )        
    }
}


export default HargaBuah