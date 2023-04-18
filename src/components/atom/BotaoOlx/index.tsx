import './styles.scss'

interface BotaoOlxProps {
    cor?:  "primaria" | "secundaria"
    tamanho?: "medio" | "grande"
    texto: string
    style?: string
    onClick: (props: any) => any
}

export const BotaoOlx = (props: BotaoOlxProps) => {
    const { cor, texto, style, tamanho, onClick} = props

    return (
        <button
            className={`botaoOlx 
                ${style} ${cor && cor === "primaria" ? "cor_primaria" : cor === "secundaria" ? "cor_secundaria" : ""}
                ${tamanho && tamanho === "medio" ? "tam_medio" : tamanho === "grande" ? "tam_grande" : ""}
            `}
            aria-label={texto}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}