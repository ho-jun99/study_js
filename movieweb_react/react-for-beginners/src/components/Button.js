import PropTypes from "prop-types";
import styles from "../css/Button.module.css"
function Button({text}) {
    console.log("컴포넌트 버튼입니다")
    return <button className={styles.btn}>{text}</button>
}

Button.prototype = {
    text : PropTypes.string.isRequired,
};

export default Button;