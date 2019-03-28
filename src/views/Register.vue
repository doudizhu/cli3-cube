<template lang='pug'>
  div
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
                userName: "",
                password: ""
            },
            schema: {
                fields: [
                    {
                        type: "input",
                        modelKey: "userName",
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
                        label: "注册"
                    }
                ]
            }
        };
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            console.log("注册");
        }
    }
};
</script>