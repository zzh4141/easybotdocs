<template>
    <div v-if="ipAddress !== null">
      你的公网IP是: 
      <a :onclick="copyIp">{{ ipAddress }}</a>
    </div>
    <div v-else>
      正在加载中...
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ipAddress: null,
      };
    },
    mounted() {
      this.fetchIPAddress();
    },
    methods: {
      async fetchIPAddress() {
        try {
          const response = await fetch('https://ipinfo.io/json');
          if (!response.ok) {
            throw new Error('请求失败: ' + response.statusText);
          }
          const data = await response.json();
          this.ipAddress = data.ip;
        } catch (error) {
          console.error('获取IP地址失败:', error);
          this.ipAddress = '获取失败';
        }
      },

      async copyIp() {
        try {
          if(this.ipAddress === '获取失败') return;

          await navigator.clipboard.writeText(this.ipAddress);
          alert('IP地址已复制到剪贴板');
        } catch (error) {
          console.error('复制失败:', error);
        }
      }
    }
  };
  </script>