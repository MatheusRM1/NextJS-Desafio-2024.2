
import axios from "axios"

type ApiProps = {
    id: number,
    title: string,
    text: string
}

type getCards = {
    identities : ApiProps[],
    status: number
}

const getApi = async () : Promise<getCards> => {
    const response = await axios.get('https://treinamentoapi.codejr.com.br/api/identities')

    return response.data;
}

export default getApi;