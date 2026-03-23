import { Button, Col, Form, Row, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";

export function SmjerNovi() {

    async function dodaj(smjer) {
        console.log(smjer);
        
        
    }
    function odradiSubmit(e) {
        e.preventDefault();
        const podaci = new FormData(e.target);
        dodaj({
            naziv: podaci.get("naziv"),
            trajanje: parseFloat(podaci.get("trajanje")),
            cijena: parseFloat(podaci.get("cijena")),
            datumPokretanja: podaci.get("datumPokretanja"),
            aktivan: podaci.get("aktivan") === "on"
        });
    }

    return (
        <>
            <h3>
                Unos novog smjera
            </h3>

            <Form>
                <Form.Group controlId="naziv">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="naziv" required placeholder="Unesite naziv smjera" />
                </Form.Group>
                <Form.Group controlId="trajanje">
                    <Form.Label>Trajanje</Form.Label>
                    <Form.Control type="number" name="trajanje" step={1} required placeholder="Unesite trajanje smjera" />
                </Form.Group>
                <Form.Group controlId="cijena">
                    <Form.Label>Cijena</Form.Label>
                    <Form.Control type="number" name="cijena" step={0.01} required placeholder="Unesite cijenu smjera" />
                </Form.Group>
                <Form.Group controlId="datumPokretanja">
                    <Form.Label>Datum pokretanja</Form.Label>
                    <Form.Control type="datetime-local" name="datumPokretanja" required />
                </Form.Group>
                <Form.Group controlId="aktivan">
                    <Form.Check type="checkbox" name="aktivan" label="Aktivan" />
                </Form.Group>

                <hr style={{marginTop: '50px', border: '0px'}} />

                <Row>
                    <Col>
                        <Button className="btn Spremi-smjer" onClick={odradiSubmit} variant="success">
                            Spremi
                        </Button>
                    </Col>
                    <Col>
                        <Link to={RouteNames.SMJEROVI_PREGLED} className="btn btn-danger">
                            Odustani
                        </Link>
                    </Col>
                        
                </Row>
            </Form>
        </>
    )
}

