import styles from "./card.module.css";


const Card = ({image , category}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt="first slide"/>
        <p >{category}</p>
      
    </div>
  )
}

export default Card
