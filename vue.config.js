const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: { preload: 'src/preload.js'},
      builderOptions: {
        // win 平台选项
        win: {
          target: 'nsis',
          icon: 'build/icons/icon.png'
        },
        // 拷贝资源到输出 resources 中
        extraResources: [
          'build',
          'images'
        ],
        // 发布选项，用于自动更新
        publish: [
          {
            provider: "github",
            owner: "shampoo6",
            repo: "electron-vue-demo"
          }
        ]
      }
    }
  }
})
