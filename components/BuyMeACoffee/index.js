import styles from "../../styles/BuyMeACoffee.module.css"

function BuyMeACoffee(props) {

  return( 
      <span className={styles.coffeeSpan}>
          <a href="https://www.buymeacoffee.com/architdigii" target="_blank" rel="noreferrer">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" />
        </a>
      </span>
  )

}

export default BuyMeACoffee;
