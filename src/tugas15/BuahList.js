import React, {useContext, useEffect} from 'react'
import {BuahContext} from './BuahContext'
import axios from 'axios'

const BuahList = () => {
    const [
        daftarHargaBuah, setDaftarHargaBuah,
        inpNama, setInpNama,
        inpHarga, setInpHarga,
        inpBerat, setInpBerat,
        formStat, setFormStat,
        idUpdate, setIdUpdate
    ] = useContext(BuahContext)

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
        console.log(selectedBuah)
        setInpNama(selectedBuah.nama)
        setInpHarga(selectedBuah.harga)
        setInpBerat(selectedBuah.berat)
        setIdUpdate(id)
        setFormStat("edit")
    }

    return (
        <>
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
        </>
    )
}

export default BuahList