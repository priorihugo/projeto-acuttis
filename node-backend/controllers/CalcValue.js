

export const CalcValue = (request , response) =>{

    console.log('request ' , request.query)

    return response.status(200).json('deu certo')
}