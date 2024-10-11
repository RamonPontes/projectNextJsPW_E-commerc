function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resposta simulada da API");
        }, 1000);
    });
}

export async function signInAuth(data) {
    // link backEnd login

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

    const status = 200

    return { responseExample, status };
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