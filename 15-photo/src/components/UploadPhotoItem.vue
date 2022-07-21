<template>
	<div>
		<div class="uploadPhotoItem">
			<span class="myProgress">
				<span class="plan"></span>
				30%
			</span>
			<img :src="imgUrl" />
			<span class="pictureName"> {{ item.name }} </span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["item"],
		data() {
			return {
				imgUrl: "",
			};
		},
		created() {
			const render = new FileReader();
			render.readAsDataURL(this.item);
			render.onload = () => {
				// console.log(render.result);
				this.imgUrl = render.result;
			};
		},
	};
</script>

<style lang="less" scoped></style>
