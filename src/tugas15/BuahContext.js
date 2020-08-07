import React, { useState, createContext } from "react";

export const BuahContext = createContext()

export const BuahProvider = (props) => {
    const [daftarHargaBuah, setDaftarHargaBuah] = useState(null)
    const [inpNama, setInpNama  ] = useState("")
    const [inpHarga, setInpHarga] = useState("")
    const [inpBerat, setInpBerat] = useState("")
    const [formStat, setFormStat] = useState("create")
    const [idUpdate, setIdUpdate] = useState(0)

    return (
        <BuahContext.Provider value={[
            daftarHargaBuah, setDaftarHargaBuah,
            inpNama, setInpNama,
            inpHarga, setInpHarga,
            inpBerat, setInpBerat,
            formStat, setFormStat,
            idUpdate, setIdUpdate
        ]}>
            {props.children}
        </BuahContext.Provider>
    )

}