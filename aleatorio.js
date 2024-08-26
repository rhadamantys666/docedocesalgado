const nomes = ["duda", "vinicius", "neno", "karol", "douglas", "nana", "vesgo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
