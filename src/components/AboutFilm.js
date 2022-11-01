import React, {useState} from 'react';
import styles from "./Films.scss"
import Card from "react-bootstrap/Card";
import axios from "axios";


const Films = () => {
    const [film, setFilms] = React.useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(
                    'http://127.0.0.1:8000/api/v1/films/:id'
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

                    <div className={styles.card}>
                        <Card style={{width: '18rem', margin: '15px'}}>
                            <Card.Img className={styles.img} variant="top" src={''}/>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>Название</Card.Title>
                                <Card.Text>Описание
                                    Жанры
                                    Страна
                                    Год</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Films