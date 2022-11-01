import React, {useState} from 'react';
import styles from "./Films.scss"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Link} from "react-router-dom";


const Films = () => {
    const [films, setFilms] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/api/v1/films/'
                )
                console.log(data)

                setFilms(data)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        fetchData()
    }, [])


    return (
        <div>
            {loading && 'Загрузка...'}


                <div className={styles.wrapper}>
                    <div className={styles.wrapper} style={{
                        display: 'flex', justifyContent: 'center',
                        overflow: 'auto'
                    }}>
                    {films.map(el => (
                        <div key={el.id} className={styles.card}>
                            <Card style={{width: '18rem', margin: '15px'}}>
                                <Card.Img className={styles.img} variant="top" src={el.image}/>
                                <Card.Body>
                                    <Card.Title style={{textAlign: 'center'}}>{el.name}</Card.Title>
                                    <Card.Text> </Card.Text>
                                    <Button variant="outline-dark" style={{}}><Link to={`/films/about/${el.id}`} className="nav-link px-lg-1 link-dark">Подробнее</Link></Button>
                                    <Button variant="outline-dark" style={{}}><Link to={`/films/${el.id}`} className="nav-link px-lg-1 link-dark">Купить билет</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Films

