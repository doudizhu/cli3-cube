module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,// 端口号
            open: true,
            // Mocks数据
            before(app) {
                    
            },
        },
    },
}