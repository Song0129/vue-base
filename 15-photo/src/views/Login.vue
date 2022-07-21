<template>
	<div class="loginContainer">
		<h1>登录</h1>
		<div>
			姓名：
			<input v-model="username" class="inputStyle" id="username" type="text" name="username" />
			<br />
			密码：
			<input v-model="password" class="inputStyle" id="password" type="password" name="pwd" /><br />
			<button @click="login" class="loginStyle" id="loginBtn">登录</button>
		</div>
	</div>
</template>

<script>
	// import { fetchLogin } from "../api/index";
	export default {
		data() {
			return {
				username: "",
				password: "",
			};
		},
		methods: {
			async login() {
				console.log(this.username, this.password);
				// const { data } = await fetchLogin({ username: this.username, password: this.password });
				// console.log(data);
				// if (data.state === 0) {
				// 	alert("账号或密码错误");
				// 	return;
				// }
				// this.$router.push({
				// 	name: "Photo",
				// });
				await this.$store.dispatch("login", { username: this.username, password: this.password });
				this.$router.push({
					name: "Photo",
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.loginContainer {
		margin: 0 auto;
		width: 600px;
		text-align: center;
		padding-top: 20px;
		padding-bottom: 50px;
		border: 1px solid;
	}
	.loginContainer input {
		margin-bottom: 20px;
	}
	.loginStyle {
		width: 160px;
		height: 40px;
		background: rgb(50, 203, 77);
		color: white;
		font-size: 17px;
	}
	.inputStyle {
		width: 200px;
		height: 30px;
		padding: 5px;
		outline: none;
	}

	.inputStyle:focus {
		border: 1px solid rgb(50, 203, 77);
	}
	form {
		position: relative;
	}
	.exchange {
		position: absolute;
		top: 8px;
		right: 65px;
		color: red;
	}
</style>
