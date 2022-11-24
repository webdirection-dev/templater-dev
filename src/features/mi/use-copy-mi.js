import {printTg} from '../../static/helpers/var'

export const useCopyMi = ({stand, tg, priority, support, dev, miNumber, title, description}) => {
    const standOut = stand ? `${stand} ` : ''
    const printTgTxt = printTg(tg)

    const str = (
        `**FYI**` +
        `\n` +
        `\n**${support} завела массовый инцидент** MI${miNumber}.` +
        `\n**Приоритет:** ${priority}` +
        `\n**Контур:** ${standOut}` +
        `\n**TG:** ${printTgTxt}` +
        `\n` +
        `\n**${title}**` +
        `\n` +
        `\n${description}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
