// 400	Bad Request	"E-mail ou senha inválidos."
// 401	Unauthorized	"Credenciais inválidas. Por favor, tente novamente."
// 409	Conflict	"E-mail já registrado. Tente outro e-mail."
// 422	Unprocessable Entity	"Dados de entrada inválidos. Verifique o formato do e-mail e senha."
// 500	Internal Server Error	"Erro interno no servidor. Tente novamente mais tarde."
// 503	Service Unavailable	"Serviço temporariamente indisponível. Tente mais tarde."

const delay = (amount = 1000) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInAuth(clientData) {
    // link backEnd login

    await delay()

    const data = {
        "token": "dawdawdiuqbgxyu2qiyuebashdjbayutfkise",
        "user": {
            "name": "RamonPontes",
            "email": "",
            "telephoneNumber": "",
            "address": {
                "cep": "84073000",
                "street": "Rua Balduino Taques",
                "number": "222",
                "city": "Ponta Grossa",
                "uf": "PR",
                "complement": "Apartamento Nº111"
            },
            "cart": {
                "23": "1",
                "53": "4"
            }
        }
    }

    const status = "error"
    const code = 401
    const message = "E-mail ou senha inválidos."

    const response = {
        data,
        status,
        code,
        message
    }

    return response;
}

export async function recoverUserWithToken(token) {
    // link backEnd recover

    await delay()

    const responseExample = {
        "token": "dawdawdiuqbgxyu2qiyuebashdjbayutfkise",
        "user": {
            "name": "RamonPontes",
            "email": "",
            "telephoneNumber": "",
            "address": {
                "cep": "84073000",
                "street": "Rua Balduino Taques",
                "number": "222",
                "city": "Ponta Grossa",
                "uf": "PR",
                "complement": "Apartamento Nº111"
            },
            "cart": {
                "23": "1",
                "53": "4"
            }
        }
    }

    return (responseExample)
}

export async function registerAuth(clientData) {
        // link backEnd login

        await delay()

        const data = {
            // "token": "dawdawdiuqbgxyu2qiyuebashdjbayutfkise",
            // "user": {
            //     "name": "RamonPontes",
            //     "email": "",
            //     "telephoneNumber": "",
            //     "address": {
            //         "cep": "84073000",
            //         "street": "Rua Balduino Taques",
            //         "number": "222",
            //         "city": "Ponta Grossa",
            //         "uf": "PR",
            //         "complement": "Apartamento Nº111"
            //     },
            //     "cart": {
            //         "23": "1",
            //         "53": "4"
            //     }
            // }
        }
    
        const status = "error"
        const code = 409
        const message = "E-mail já registrado. Tente outro e-mail."
    
        const response = {
            data,
            status,
            code,
            message
        }
    
        return response;
}