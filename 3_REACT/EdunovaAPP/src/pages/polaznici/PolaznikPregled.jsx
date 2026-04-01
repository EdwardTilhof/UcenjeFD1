import { useEffect, useState } from "react"
import PolaznikService from "../../services/polaznici/PolaznikService"
import { Button, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"

export default function PolaznikPregled(){

    const navigate = useNavigate()

    const [polaznici, setPolaznici] = useState([])

    useEffect(()=>{
        ucitajPolaznike()
    },[])

    async function ucitajPolaznike() {
        await PolaznikService.get().then((odgovor)=>{
            if(!odgovor.success){
                alert('Nije implementiran servis')
                return
            }
            setPolaznici(odgovor.data)
        })
    }

    async function brisanje(sifra) {
        if (!confirm('Sigurno obrisati?')) return;
        await PolaznikService.obrisi(sifra);
        await PolaznikService.get().then((odgovor)=>{
            setPolaznici(odgovor.data)
        })
    }

    return(
        <>
        <Link to={RouteNames.POLAZNICI_NOVI}
        className="btn btn-success w-100 my-3">
            Dodavanje novog polaznika
        </Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Email</th>
                    <th>OIB</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {polaznici && polaznici.map((polaznik)=>(
                    <tr key={polaznik.sifra}>
                        <td className="lead">{polaznik.ime}</td>
                        <td className="lead">{polaznik.prezime}</td>
                        <td>{polaznik.email}</td>
                        <td>{polaznik.oib}</td>
                        <td>
                            <Button onClick={()=>{navigate(`/polaznici/${polaznik.sifra}`)}}>
                                Promjeni
                            </Button>
                            &nbsp;&nbsp;
                            <Button variant="danger" onClick={() => brisanje(polaznik.sifra)}>
                                Obriši
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}
