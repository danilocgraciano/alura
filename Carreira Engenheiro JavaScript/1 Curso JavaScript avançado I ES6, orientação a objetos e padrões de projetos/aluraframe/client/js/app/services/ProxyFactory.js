class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get: function (target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {

                    return function () {
                        // console.log(`interceptando ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            }
            /*
            usado para tratar modificações em atributos, quando se usa a seguinte forma no model

            get texto(){
                return this._texto
            }

            set texto(texto){
                this._texxto = texto;
            }
            ,

            set(target, prop, value, receiver) {

                let retorno = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop))
                    acao(target);

                return retorno;

            }
            */
        });

    }

    static _isFunction(func) {
        return typeof (func) == typeof (Function);
    }
}