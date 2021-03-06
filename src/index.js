class pmEventUtil{
    // 构造函数
    constructor(opts){
        if(!opts) {
            opts = {};
        }

        // 配置项
        this.otherWindow = opts.otherWindow ?? window
        this.targetOrigin = opts.targetOrigin ?? '*'

        // 基本信息
        this.version = '1.0.2';
    }

    /**
     * channel 监听的频道
     * callback 回调函数
     */

    listen(channel, callback){
        window.addEventListener('message', function (e) {
            if(typeof e.data === 'object' && e.data.hasOwnProperty('data') && e.data.hasOwnProperty('channel') && channel === e.data['channel']){
                callback(e.data.data, e);
            }
        });
    }

    /**
     * channel 发送的频道
     * data 发送的数据
     * callback 回调函数，当成功时，参数为 undefined
     */
    send(channel, data, callback){
        try{
            ((typeof this.otherWindow === 'object' && this.otherWindow.hasOwnProperty("postMessage") && typeof this.otherWindow.postMessage === 'function') ? this.otherWindow: window).postMessage({
                channel:channel,
                data:data
            }, this.targetOrigin);

            callback();
        }catch(e){
            callback(e.toString());
        }
    }
}

export default pmEventUtil;
