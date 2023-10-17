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
        // 打包 nsis 格式配置
        nsis: {
          // 应用名称
          // 若要自动更新，则很重要，需要改为如下名称
          artifactName: "${name}-Setup-${version}.${ext}",
          deleteAppDataOnUninstall: true,
          oneClick: false,
          allowToChangeInstallationDirectory: true,
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
