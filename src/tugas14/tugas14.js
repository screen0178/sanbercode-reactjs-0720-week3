import React, { useState, useEffect} from 'react'
import axios from 'axios'

const HargaBuah14 = () => {
    
    const [daftarHargaBuah, setDaftarHargaBuah] = useState(null)
    const [inpNama, setInpNama] = useState("")
    const [inpHarga, setInpHarga] = useState("")
    const [inpBerat, setInpBerat] = useState("")
    const [formStat, setFormStat] = useState("create")
    const [idUpdate, setIdUpdate] = useState(0)

    useEffect( () => {
        if (daftarHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                console.log(res)
                setDaftarHargaBuah(res.data.map(el => {
                    return {
                        id: el.id,
                        nama: el.name,
                        harga: el.price,
                        berat: el.weight
                    }}))
                })
        }
    }, [daftarHargaBuah])

    const handleDelete = (evt) => {
        let id = parseInt(evt.target.value)
        let newDaftarHargaBuah = daftarHargaBuah.filter(el => el.id !== id)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
        .then(res => {
            console.log(res)
        })

        setDaftarHargaBuah([...newDaftarHargaBuah])
    }

    const handleEdit = (evt) => {
        let id = parseInt(evt.target.value)
        let selectedBuah = daftarHargaBuah.find(x => x.id === id)
        setInpNama(selectedBuah.nama)
        setInpHarga(selectedBuah.harga)
        setInpBerat(selectedBuah.berat)
        setIdUpdate(id)
        setFormStat("edit")
    }

    const handleChangeName = (evt) => {
        setInpNama(evt.target.value)
    }
    const handleChangePrice = (evt) => {
        setInpHarga(evt.target.value)
    }
    const handleChangeWeight = (evt) => {
        setInpBerat(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        let name = inpNama
        let price = inpHarga
        let weight = inpBerat

        if (name.replace(/\s/g,'') !== "") {
            if (formStat === "create") {
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                .then(res => {
                    console.log(res)
                    setDaftarHargaBuah([
                        ...daftarHargaBuah,
                        {
                            id: res.data.id,
                            nama: res.data.name,
                            harga: res.data.price,
                            berat: res.data.weight
                        }
                    ])
                })
            } else if (formStat === "edit") {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${idUpdate}`, {name, price, weight})
                .then(res => {
                    console.log(res)
                    let dataBuah = daftarHargaBuah.find(el => el.id === idUpdate)
                    dataBuah.nama = res.data.name
                    dataBuah.harga = res.data.price
                    dataBuah.berat = res.data.weight
                    setFormStat("create")
                    setDaftarHargaBuah([...daftarHargaBuah])
                })
            }
        }

    }

    return (
        <>
        <div className="app">
            <h1>Tabel Harga Buah</h1>
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Option</th>
                </tr>
                    {
                        daftarHargaBuah !== null && daftarHargaBuah.map((dat, index) => {
                            return (
                            <tr key={index}>
                                <td hidden>{index+1}</td>
                                <td>{dat.nama}</td>
                                <td>{dat.harga}</td>
                                <td>{dat.berat / 1000} Kg</td>
                                <td><button onClick={handleEdit} value={dat.id}>Edit</button><button onClick={handleDelete} value={dat.id}>Delete</button></td>
                            </tr>
                        )
                        })
                    }
            </table>
            <form>
                <label>Nama : </label>
                <input type="text" name="inpNama" onChange={handleChangeName} value={inpNama} />
                <label>Harga : </label>
                <input type="text" name="inpHarga" onChange={handleChangePrice} value={inpHarga} />
                <label>Berat : </label>
                <input type="text" name="inpBerat" onChange={handleChangeWeight} value={inpBerat} />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
        </>
    )        
}

export default HargaBuah14