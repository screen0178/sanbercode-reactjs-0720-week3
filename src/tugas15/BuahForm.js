import React, {useContext} from 'react'
import axios from 'axios'
import {BuahContext} from './BuahContext'

const BuahForm = () => {
    const [
        daftarHargaBuah, setDaftarHargaBuah,
        inpNama, setInpNama,
        inpHarga, setInpHarga,
        inpBerat, setInpBerat,
        formStat, setFormStat,
        idUpdate,
    ] = useContext(BuahContext)

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

    return(
        <form>
                <label>Nama : </label>
                <input type="text" name="inpNama" onChange={handleChangeName} value={inpNama} />
                <label>Harga : </label>
                <input type="text" name="inpHarga" onChange={handleChangePrice} value={inpHarga} />
                <label>Berat : </label>
                <input type="text" name="inpBerat" onChange={handleChangeWeight} value={inpBerat} />
                <input type="submit" onClick={handleSubmit} />
            </form>
    )
}

export default BuahForm