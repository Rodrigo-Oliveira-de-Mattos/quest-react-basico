const mensage = (label) => {
    alert(`A label desse botão é ${label.label}`);
}

const Button = ( {label} ) => {
    return <button className="button" onClick={() => mensage({label})}>{label}</button>
}

Button.defaultProps = {
    label: "Botão padrão"
}

export default Button