import React, {Component} from 'react'
import './tugas13.css'


class HargaBuah13 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daftarHargaBuah :[
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Manga", harga: 30000, berat: 500}
            ],
            inpNama: "",
            inpHarga: "",
            inpBerat: "",
            indexEdit: -1
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange (evt) {
        this.setState({
             [evt.target.name]: evt.target.value,
        })
      }


    handleEdit(evt) {
        const index = evt.target.value
        let data = this.state.daftarHargaBuah[index]
        this.setState({
            inpNama: data.nama,
            inpHarga: data.harga,
            inpBerat: data.berat,
            indexEdit: index
        })
    }

    handleDelete(evt) {
        const index = evt.target.value
        let data = this.state.daftarHargaBuah
        data.splice(index, 1)
        console.log(data)

        this.setState({
            daftarHargaBuah: data
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        let data = this.state.daftarHargaBuah
        let newData = {
            nama : this.state.inpNama,
            harga : parseInt(this.state.inpHarga),
            berat : parseInt(this.state.inpBerat)
        }
        if (this.state.indexEdit === -1) {
            data = [...data,newData]
        } else {
            data[this.state.indexEdit] = newData 
        }

        this.setState({
            daftarHargaBuah: data,
            inpNama: "",
            inpHarga: "",
            inpBerat: "",
            indexEdit: -1
        })
    }

    render() {
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
                        {this.state.daftarHargaBuah.map((dat, index) => {
                            return (
                                <tr key={index}>
                                    <td hidden>{index+1}</td>
                                    <td>{dat.nama}</td>
                                    <td>{dat.harga}</td>
                                    <td>{dat.berat / 1000} Kg</td>
                                    <td><button onClick={this.handleEdit} value={index}>Edit</button><button onClick={this.handleDelete} value={index}>Delete</button></td>
                                </tr>
                            )
                        })}
                </table>
                <form>
                    <label>Nama : </label>
                    <input type="text" name="inpNama" onChange={this.handleChange} value={this.state.inpNama} />
                    <label>Harga : </label>
                    <input type="text" name="inpHarga" onChange={this.handleChange} value={this.state.inpHarga} />
                    <label>Berat : </label>
                    <input type="text" name="inpBerat" onChange={this.handleChange} value={this.state.inpBerat} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
            </>
        )        
    }
}


export default HargaBuah13