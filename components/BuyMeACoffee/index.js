import styles from "../../styles/BuyMeACoffee.module.css"

function BuyMeACoffee(props) {

  return( 
      <span className={styles.coffeeSpan}>
          <a href="https://www.buymeacoffee.com/architdigii" target="_blank" aria-label="buy me a coffee" rel="noreferrer">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="buy me a coffee" />
        </a>
      </span>
  )

}

export default BuyMeACoffee;
