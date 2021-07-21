const schemaAgent = {
    subscribers: {},
    subscribe: (eventName, eventFn) => {
      (
        this.schemaAgent.subscribers[eventName] ||
        (this.schemaAgent.subscribers[eventName] = [])
      ).push(eventFn);
    },
    unSubscribe: (eventName, eventFn) => {
      // 查看缓存列表中是否有
      let fns = this.schemaAgent.subscribers[eventName];
      if(!fns || !fns.length) {
          return
      }
      if(!eventFn) {
          this.schemaAgent.subscribers[eventName] = []
          return;
      }
      const index = this.schemaAgent.subscribers[eventName].findIndex( fn => (fn === eventFn))
      if(index !== -1) {
          this.schemaAgent.subscribers[eventName].splice(index, 1);
      }
    },
    dispatch: (event, ...args) => {
      const fns = this.schemaAgent.subscribers[event];
      if (Boolean(fns) && Boolean(fns.length)) {
        fns.forEach((fn) => {
          fn(...args);
        });
      }
    },
  };
  
  this.schemaAgent = schemaAgent;
  
  
  function user1 (content) {
      console.log('用户1订阅了:', content);
  };
  
  function user2 (content) {
      console.log('用户2订阅了:', content);
  };
  
  function user1plus (content) {
      console.log('用户1plus订阅了:', content);
  };
  
  schemaAgent.subscribe('user1', user1);
  schemaAgent.subscribe('user2', user2);
  schemaAgent.subscribe('user1', user1plus);
  
  schemaAgent.dispatch('user1', '海绵宝宝');
  schemaAgent.dispatch('user2', '提那下午');
  
  schemaAgent.unSubscribe('user1', user1plus);
  
  schemaAgent.dispatch('user1', '海绵宝宝');
  schemaAgent.dispatch('user2', '提那下午');