import './styles.scss'

interface BotaoCmsProps {
    cor?:  "primaria" | "secundaria"
    tamanho?: "medio" | "grande"
    texto: string
    style?: string
}

export const BotaoCms = (props: BotaoCmsProps) => {
    const { cor, texto, style, tamanho } = props

    return (
        <button
            className={`botaoCms 
                ${style} ${cor && cor === "primaria" ? "cor_primaria" : cor === "secundaria" ? "cor_secundaria" : ""}
                ${tamanho && tamanho === "medio" ? "tam_medio" : tamanho === "grande" ? "tam_grande" : ""}
            `}
        >
            {texto}
        </button>
    )
}