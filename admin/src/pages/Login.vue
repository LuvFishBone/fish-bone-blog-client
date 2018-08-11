<template>
    <div class="login-box">
        <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import md5 from 'md5'
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //console.log(this.formInline.user);
                        //this.$Message.success('Success!');
                        this.login();
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            login(){
                console.log(123);
                axios.post(
                    '/api/v1/tokens',
                    {
                        username: this.formInline.user,
                        password: md5(this.formInline.password)
                    }
                )
                .then(res => {
                    const data = res.data
                    console.log('login success, response data->', data)
                    localStorage.setItem('fishboneToken', data)
                    console.log(this.$router)
                    this.$router.push('/dashboard')
                })
                .catch(err => {
                    const errorMsg = err.response.data.error
                    this.$Message.error(errorMsg);
                })
            }
        }
    }
</script>


<style scoped lang="less">
    .login-box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../assets/img/login_bg.jpg');
        .login-form{
            background: rgba(0, 0, 0, .5);
            padding: 19px 5px 0 17px;
            border-radius: 8px;
        }
    }
</style>