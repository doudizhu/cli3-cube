<template lang='pug'>
    div
        img.headerimg(src='https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png')
        cube-form(
            :model='model'
            :schema='schema'
            @submit='submitHandler'
        )
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            schema: {
                fields: [
                    {
                        type: "input",
                        modelKey: "username",
                        label: "用户名",
                        props: {
                            placeholer: "请输入用户名"
                        },
                        rules: {
                            required: true,
                            type: "string"
                        },
                        trigger: "blur",
                        messages: {
                            required: "用户名不能为空"
                        }
                    },
                    {
                        type: "input",
                        modelKey: "password",
                        label: "密码",
                        props: {
                            placeholer: "请输入密码",
                            type: "password",
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true
                        },
                        trigger: "blur"
                    },
                    {
                        type: "submit",
                        label: "登录"
                    }
                ]
            }
        };
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            this.$http.get(
                '/api/register',
                {
                    params:this.model,
                }
            ).then(res=>{
                console.log(res.data.success)
            }).catch(err=>console.log(err))
        }
    }
};
</script>

<style lang="stylus" scoped>
    .headerimg
        width 100%
</style>
