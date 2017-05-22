export class MensagemCadastro {

    // private _mensagem: string;
    // private _inclusao: boolean;

    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
}