class Core {

    constructor() {
        if (Core.prototype.Instance === undefined) {
            Core.prototype.Instance = this;
            this.obsv = [];
            this.listeners = {};

            this.addListenr = listener => {
                if ('function' === typeof listener) {
                    this.listeners[listener.name] = listener;
                    return listener
                }
            };
            this.removeListener = listener => {
                if ('function' === typeof listener) {
                    delete this.listeners[listener.name];
                    return 1;
                }
            };
            this.addItem = (obj) => {
                this.obsv.push(obj);
                Object.keys(this.listeners).map(key => this.listeners[key](obj, 'INSERT'));
            };
            this.removeItem = (obj) => {
                this.obsv = this.obsv.filter(obs => obs === obj);
                Object.keys(this.listeners).map(key => this.listeners[key](obj, 'REMOVE'));
            }
        }

        return Core.prototype.Instance;
    }





}

export default Core;