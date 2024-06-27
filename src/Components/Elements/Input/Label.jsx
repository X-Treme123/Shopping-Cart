import { useContext } from "react"
import { DarkMode } from "../../../context/DarkMode"

const Label = (props) => {
    const { htmlFor, children } = props
    const {isDarkMode} = useContext(DarkMode)
    
    return(
        <label 
        htmlFor={htmlFor}
        className={`block ${isDarkMode && "text-white"} font-bold mb-2`}
        >
            {children}
        </label>
    )
}

export default Label