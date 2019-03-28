module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,// 端口号
            open: true,
            // Mocks数据
            before(app) {
                app.get('请求地址',(req,res)=>{
                    res.json({

                    })
                })

                // 注册接口
                // 用户信息池
                let userpoor = [
                    {username:'xiaod',password:'123qwe'},
                    {username:'tim',password:'123qwe'},
                ]
                app.get('/api/register',(req,res)=>{
                    const {username,password} = req.query
                    const userLength = userpoor.filter(v=>v.username==username).length
                    if(userLength>0){
                        res.json({
                            success:false,
                            message:'用户名已存在',
                        })
                    }else{
                        res.json({
                            success:true,
                            message:'注册成功',
                        })
                    }
                })
            },
        },
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
