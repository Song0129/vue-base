<template>
	<div>
		<!-- 上传相关 -->
		<div class="masking" v-show="visible">
			<div class="addPhotoContainer"></div>
			<div class="addController">
				<h3 class="addTitle">上传照片-普通上传(H5)<span class="close" @click="close">╳</span></h3>
				<div class="photoTitles">
					<span class="uploadTo">上传到</span>
					<div class="photoSelect">
						<img class="showPhoto" src="public/img/1.jpg" />
						相册名称
					</div>
				</div>

				<!-- 上传按钮 -->
				<div class="showContainer" v-show="!showLoadContainer">
					<div class="uploadContainer">
						<span class="fileinput-button">
							<span>上传图片</span>
							<input class="imgFile" type="file" name="" multiple="multiple" @input="addImg" />
						</span>
						<span class="hint"> 按住Ctrl可多选 </span>
					</div>
				</div>

				<!-- 显示待上传图片  -->
				<div class="loadContainer" v-show="showLoadContainer">
					<div class="wantUpload">
						<template v-for="(item, index) in wantPhotos">
							<UploadPhotoItem :item="item" :key="index"></UploadPhotoItem>
						</template>
					</div>
					<div class="addStyle">
						<span class="fileinput-add">
							<span></span>
							<input class="imgFile-add" type="file" multiple="multiple" />
						</span>
					</div>
					<!-- 开始上传按钮 -->
					<div class="bottomStyle">
						<span class="uploadBtn" @click="uploadImg">开始上传</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import UploadPhotoItem from "../components/UploadPhotoItem.vue";
	import { fetchUpload } from "../api/index";
	export default {
		props: ["visible"],
		components: {
			UploadPhotoItem,
		},
		data() {
			return {
				wantPhotos: [],
			};
		},
		computed: {
			showLoadContainer() {
				return this.wantPhotos.length;
			},
		},
		methods: {
			async uploadImg() {
				for (const photo of this.wantPhotos) {
					const r = await fetchUpload(photo);
					console.log("r :>> ", r);
				}
				// 1. 不要重复
				// 2. 表达出代码的意图
				this.reset();
				this.$emit("upload-completed");
			},
			reset() {
				this.wantPhotos = [];
			},
			close() {
				this.$emit("update:visible", false);
			},
			addImg(event) {
				console.log(event.target.files);
				this.wantPhotos.push(...event.target.files);
				console.log("wantPhotos :>> ", this.wantPhotos);
			},
		},
	};
</script>

<style lang="less" scoped></style>
